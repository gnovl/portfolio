import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import { FaPaperPlane } from "react-icons/fa6";

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
        "service_cm3fzmq",
        "template_wpsupg8",
        form.current!,
        "T9QxCDk1od-h1Pj9d",
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
        },
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
    <div className="bg-black">
      <div className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-blue-400 mb-3">~/contact</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("translation.home.contact.title")}
          </h2>

          <p className="text-zinc-400 mb-10 max-w-2xl">
            {t("translation.home.contact.message")}
          </p>

          <div className="max-w-md mx-auto border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  {t("translation.home.contact.labels.name")}
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: t(
                      "translation.home.contact.validation.name.required",
                    ),
                    maxLength: {
                      value: 10,
                      message: t(
                        "translation.home.contact.validation.name.maxLength",
                      ),
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: t(
                        "translation.home.contact.validation.name.pattern",
                      ),
                    },
                  })}
                  placeholder={t("translation.home.contact.placeholders.name")}
                  className="w-full p-2.5 border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  {t("translation.home.contact.labels.email")}
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: t(
                      "translation.home.contact.validation.email.required",
                    ),
                    validate: {
                      validChars: (value) =>
                        /^[A-Za-z0-9@.]+$/.test(value) ||
                        t(
                          "translation.home.contact.validation.email.validChars",
                        ),
                      validEmail: (value) => {
                        if (value === "example@example.com") {
                          return true;
                        }

                        const emailParts = value.split("@");
                        if (emailParts.length !== 2) {
                          return t(
                            "translation.home.contact.validation.email.validEmail",
                          );
                        }
                        const [localPart, domain] = emailParts;

                        if (!/^[^\s@]+$/.test(localPart)) {
                          return t(
                            "translation.home.contact.validation.email.validEmail",
                          );
                        }

                        if (!/^[^.]+\.[^.]+$/.test(domain)) {
                          return t(
                            "translation.home.contact.validation.email.validEmail",
                          );
                        }

                        if (/\.{2,}/.test(localPart) || /\.{2,}/.test(domain)) {
                          return t(
                            "translation.home.contact.validation.email.validEmail",
                          );
                        }

                        if (/\.{3,}/.test(localPart) || /\.{3,}/.test(domain)) {
                          return t(
                            "translation.home.contact.validation.email.validEmail",
                          );
                        }

                        if (value.includes("example@example.com")) {
                          return t(
                            "translation.home.contact.validation.email.validEmail",
                          );
                        }

                        return true;
                      },
                    },
                    maxLength: {
                      value: 30,
                      message: t(
                        "translation.home.contact.validation.email.maxLength",
                      ),
                    },
                  })}
                  placeholder={t("translation.home.contact.placeholders.email")}
                  className="w-full p-2.5 border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  {t("translation.home.contact.labels.message")}
                </label>
                <textarea
                  {...register("message", {
                    required: t(
                      "translation.home.contact.validation.message.required",
                    ),
                    pattern: {
                      value: /^[A-Za-z0-9\s]*$/,
                      message: t(
                        "translation.home.contact.validation.message.pattern",
                      ),
                    },
                    maxLength: {
                      value: 300,
                      message: t(
                        "translation.home.contact.validation.message.maxLength",
                      ),
                    },
                  })}
                  className="w-full p-2.5 border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none h-28"
                  placeholder={t(
                    "translation.home.contact.placeholders.message",
                  )}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center items-center recaptcha-dark">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LeFpEEpAAAAAKHAcf--_tF4XU3lyDCtTZ5KRqoA"
                  onChange={onCaptchaChange}
                  size="compact"
                  theme="dark"
                />
              </div>

              <div className="flex justify-center w-full">
                <button
                  className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-blue-500 text-base w-full ${
                    !(isCaptchaCompleted && isValid) || isFormSubmitted
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  disabled={!(isCaptchaCompleted && isValid) || isFormSubmitted}
                >
                  <span>{t("translation.home.contact.button.send")}</span>
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>

              <div className="w-full flex justify-center items-center">
                {isEmailSent && (
                  <div
                    ref={successMessageRef}
                    className="bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center p-2 w-full"
                  >
                    <FcCheckmark className="mr-2" />
                    {t("translation.home.contact.successMessage")}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
