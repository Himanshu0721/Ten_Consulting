import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Captcha from "./ContactFormCaptcha.jsx";
import {
  LucideChevronDown,
  LucideLoader,
  LucideChevronRight,
} from "lucide-react";

const countries = {
  US: "United States",
  CA: "Canada",
  MX: "Mexico",
  IN: "India",
  BR: "Brazil",
};

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Country is required").default(""),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || (/^\d{10}$/.test(val) && !isNaN(Number(val))), {
      message: "Phone number must be exactly 10 numeric digits",
    }),
  message: z
    .string()
    .min(1, "Message is required")
    .min(100, "Message must be at least 100 characters")
    .max(4000, "Message must be at most 4000 characters"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and policies" }),
  }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
const [captchaError, setCaptchaError] = useState(null);
const [submitting, setSubmitting] = useState(false);

  const handleCaptchaVerify = (verified) => {
    setIsCaptchaVerified(verified);
    setCaptchaError(null);
  };

  const onSubmit = (data) => {
    const { terms, ...formData } = data; // we do not need terms in the data

    if (!isCaptchaVerified) {
      setCaptchaError("Please enter valid captcha");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      alert("Form submitted. Check browser console for data.");
      console.log("Form submitted", formData);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <main className="grid lg:place-items-center min-h-screen pt-4">
      <div className="lg:max-w-8xl lg:w-8xl lg:mx-auto px-4 py-8 flex flex-col md:flex-row md:gap-6">
        <div className="md:w-2/4 mb-8 md:mb-0">
          <h1 className="text-4xl lg:text-5xl lg:tracking-wide font-normal md:font-bold text-gray-900 mb-4">
            Let's Talk
          </h1>
          <p className="text-gray-700">
            Fill in your details and our team will get in touch.
          </p>
        </div>

        <div className="md:w-2/4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <input
                {...register("fullName")}
                placeholder="Full Name*"
                className="input"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <input
                {...register("email")}
                type="email"
                placeholder="Email*"
                className="input"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="relative space-y-2">
              <select
                {...register("country")}
                className="input appearance-none bg-white pr-10"
              >
                <option value="" disabled selected>
                  --Select Country--
                </option>
                {Object.entries(countries).map(([countryCode, countryName]) => (
                  <option key={countryCode} value={countryCode}>
                    {countryName}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <LucideChevronDown className="size-4" />
              </div>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <input
                {...register("phone")}
                type="number"
                placeholder="Phone (Optional)"
                className="input"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <textarea
                {...register("message")}
                placeholder="Write a Message"
                rows={6}
                className="input resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <div className="flex items-center mt-4">
              <input
                {...register("terms")}
                type="checkbox"
                className="size-6 text-blue-600 border border-gray-600 rounded focus:ring-blue-500"
              />
              <label className="ml-3 text-sm text-gray-700">
                By submitting this form you acknowledge that you have read
                Kelton's Privacy Policy and agree to its terms.*
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.terms.message}
              </p>
            )}

            <Captcha onVerify={handleCaptchaVerify} />
            {captchaError && (
              <p className="text-red-500 text-sm">{captchaError}</p>
            )}

            <div className="flex md:justify-end">
              <button
                type="submit"
                disabled={submitting}
                className={`group px-6 w-full md:w-auto text-center py-3 text-white flex items-center justify-center md:justify-start focus:outline-none rounded-md ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-900 hover:bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-gray-700 focus:ring-offset-1"
                }`}
                onClick={() => {
                  if (!isCaptchaVerified) {
                    setCaptchaError("Please enter valid captcha");
                    return;
                  }
                }}
              >
                {submitting ? (
                  <>
                    Submitting
                    <LucideLoader
                      className="animate-spin ml-1 size-5"
                      width={20}
                      height={20}
                    />
                  </>
                ) : (
                  <>
                    Submit
                    <LucideChevronRight
                      className="ml-1 size-5"
                      width={20}
                      height={20}
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
