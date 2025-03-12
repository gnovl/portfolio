import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa6";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const captcha = useRef<ReCAPTCHA | null>(null);
  const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const successMessageRef = useRef<HTMLDivElement | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  // Check dark mode on component mount and when it changes
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Set up MutationObserver to detect changes to the 'dark' class on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const sendEmail = (_data: FormValues) => {
    setIsFormSubmitted(true);

    emailjs
      .sendForm(
        "service_cm3fzmq",
        "template_wpsupg8",
        form.current!,
        "T9QxCDk1od-h1Pj9d"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Mensaje enviado");
          setIsFormSubmitted(true);
          setIsEmailSent(true);
          setTimeout(() => {
            setIsFormSubmitted(false);
            reset();
            if (captcha.current) {
              captcha.current.reset();
            }
            setIsCaptchaCompleted(false);
            setIsEmailSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onCaptchaChange = (value: string | null) => {
    setIsCaptchaCompleted(!!value);
  };

  const onSubmit = (data: FormValues) => {
    if (isCaptchaCompleted && isValid) {
      sendEmail(data);
    }
  };

  useEffect(() => {
    if (isEmailSent && successMessageRef) {
      successMessageRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }, [isEmailSent]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full">
        <div className="bg-white dark:bg-gray-800 rounded-xs shadow-xl min-h-screen flex flex-col justify-center">
          <div className="w-full py-8 px-4 md:px-8 lg:px-12">
            {/* Header with left alignment */}
            <div className="flex items-center space-x-3 mb-8">
              <FaEnvelope className="text-2xl text-gray-700 dark:text-gray-300" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {i18n.language === "en"
                  ? "Get in touch"
                  : t("translation.home.contact.title")}
              </h2>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              {t("translation.home.contact.message")}
            </p>

            <div className="max-w-md mx-auto">
              <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 w-full"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {i18n.language === "en"
                      ? "Name"
                      : t("translation.home.contact.labels.name")}
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: t(
                        "translation.home.contact.validation.name.required"
                      ),
                      maxLength: {
                        value: 10,
                        message: t(
                          "translation.home.contact.validation.name.maxLength"
                        ),
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: t(
                          "translation.home.contact.validation.name.pattern"
                        ),
                      },
                    })}
                    placeholder={t(
                      "translation.home.contact.placeholders.name"
                    )}
                    className="w-full p-2.5 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 focus:border-gray-400 dark:focus:border-gray-500 outline-none transition-all bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  />
                  {errors.name && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Please fill in this field.",
                      validate: {
                        validChars: (value) =>
                          /^[A-Za-z0-9@.]+$/.test(value) ||
                          "Only letters, numbers, '@', and '.' are allowed.",
                        validEmail: (value) => {
                          if (value === "example@example.com") {
                            return true;
                          }

                          const emailParts = value.split("@");
                          if (emailParts.length !== 2) {
                            return "Please enter a valid email format e.g 'example@example.com'";
                          }
                          const [localPart, domain] = emailParts;

                          if (!/^[^\s@]+$/.test(localPart)) {
                            return "Please enter a valid email format e.g 'example@example.com'";
                          }

                          if (!/^[^.]+\.[^.]+$/.test(domain)) {
                            return "Please enter a valid email format e.g 'example@example.com'";
                          }

                          if (
                            /\.{2,}/.test(localPart) ||
                            /\.{2,}/.test(domain)
                          ) {
                            return "Please enter a valid email format e.g 'example@example.com'";
                          }

                          if (
                            /\.{3,}/.test(localPart) ||
                            /\.{3,}/.test(domain)
                          ) {
                            return "Please enter a valid email format e.g 'example@example.com'";
                          }

                          if (value.includes("example@example.com")) {
                            return "Please enter a valid email format e.g 'example@example.com'";
                          }

                          return true;
                        },
                      },
                      maxLength: {
                        value: 30,
                        message: "Maximum 30 characters.",
                      },
                    })}
                    placeholder={t(
                      "translation.home.contact.placeholders.email"
                    )}
                    className="w-full p-2.5 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 focus:border-gray-400 dark:focus:border-gray-500 outline-none transition-all bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  />
                  {errors.email && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Please fill in this field.",
                      pattern: {
                        value: /^[A-Za-z0-9\s]*$/,
                        message: "Only letters and numbers allowed.",
                      },
                      maxLength: {
                        value: 300,
                        message: "Maximum 300 characters.",
                      },
                    })}
                    className="w-full p-2.5 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 focus:border-gray-400 dark:focus:border-gray-500 outline-none transition-all resize-none h-28 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t(
                      "translation.home.contact.placeholders.message"
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div
                  className={`flex justify-center items-center ${
                    isDarkMode ? "recaptcha-dark" : ""
                  }`}
                >
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LeFpEEpAAAAAKHAcf--_tF4XU3lyDCtTZ5KRqoA"
                    onChange={onCaptchaChange}
                    size="compact"
                    theme={isDarkMode ? "dark" : "light"}
                  />
                </div>

                <div className="flex justify-center w-full">
                  <button
                    className={`flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-black dark:hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:focus:ring-gray-600 text-base w-full ${
                      !(isCaptchaCompleted && isValid) || isFormSubmitted
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={
                      !(isCaptchaCompleted && isValid) || isFormSubmitted
                    }
                  >
                    <span>
                      {i18n.language === "en"
                        ? "Send"
                        : t("translation.home.contact.button.send")}
                    </span>
                    <FaPaperPlane className="text-sm" />
                  </button>
                </div>

                <div className="w-full flex justify-center items-center">
                  {isEmailSent && (
                    <div
                      ref={successMessageRef}
                      className="bg-customMesBG dark:bg-green-900 border border-customMesBorderColor dark:border-green-700 text-customMesColor dark:text-green-400 shadow-md flex items-center justify-center rounded-lg p-2 w-full md:w-auto lg:w-fit xl:w-1/2"
                    >
                      <FcCheckmark className="mr-2" />
                      {i18n.language === "en"
                        ? "Your message has been successfully submitted!"
                        : t("translation.home.contact.successMessage")}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
