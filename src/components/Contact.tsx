import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { FaEnvelope } from "react-icons/fa6";

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

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const sendEmail = (_data: FormValues) => {
    setIsFormSubmitted(true);

    emailjs
      .sendForm(
        "service_1iwktvn",
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
    <>
      {/* contact form */}
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center pt-20 lg:pt-14 xl:pt-20">
        <div className="md:mx-auto text-center w-full lg:w-full p-4 max-w-6xl">
          <div className="bg-customBGHeader text-customColorHeader border rounded-md flex items-center justify-center mb-2">
            <FaEnvelope className="text-xl mr-1" />
            <h2 className="text-2xl font-semibold">
              {i18n.language === "en"
                ? "Get in touch"
                : t("translation.home.contact.title")}
            </h2>
          </div>
          <div className="border-gray-400 border-t my-2"></div>
          <div className="bg-white border rounded-lg shadow-xl p-2 lg:p-6">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-full lg:w-full"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mr-2 text-left">
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
                  placeholder={t("translation.home.contact.placeholders.name")}
                  className="w-full p-2 border rounded"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mr-2 text-left">
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

                        if (/\.{2,}/.test(localPart) || /\.{2,}/.test(domain)) {
                          return "Please enter a valid email format e.g 'example@example.com'";
                        }

                        if (/\.{3,}/.test(localPart) || /\.{3,}/.test(domain)) {
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
                  placeholder={t("translation.home.contact.placeholders.email")}
                  className="w-full p-2 border rounded"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 text-left">
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm resize-none"
                  placeholder={t(
                    "translation.home.contact.placeholders.message"
                  )}
                />
                {errors.message && (
                  <p className="text-red-600">{errors.message.message}</p>
                )}
              </div>
              <div className="flex justify-center items-center mt-4">
                <div>
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LeFpEEpAAAAAKHAcf--_tF4XU3lyDCtTZ5KRqoA"
                    onChange={onCaptchaChange}
                    size="compact" // Use the "compact" size for small screens
                  />
                </div>
              </div>
              <button
                className={`bg-gray-500 hover:bg-black text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/2 xl:w-1/2 md:w-auto mt-4 md:mt-0 ${
                  !(isCaptchaCompleted && isValid) || isFormSubmitted // Disable button if Captcha, validation, or form submitted
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                type="submit"
                onClick={handleSubmit(onSubmit)}
                disabled={!(isCaptchaCompleted && isValid) || isFormSubmitted}
              >
                {i18n.language === "en"
                  ? "Send"
                  : t("translation.home.contact.button.send")}
              </button>
              <div className="w-full flex justify-center items-center">
                {isEmailSent && (
                  <div
                    ref={successMessageRef}
                    className="bg-customMesBG border border-customMesBorderColor text-customMesColor shadow-md flex items-center justify-center rounded-lg p-2 w-full md:w-auto lg:w-fit xl:w-1/2"
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
    </>
  );
};
export default Contact;
