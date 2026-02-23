"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { applications } from "@/data/applications";

interface QuoteFormData {
  applicationType: string;
  area: number;
  location: string;
  timeline: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

const TOTAL_STEPS = 3;

export function QuoteForm() {
  const t = useTranslations("Quote");
  const tApp = useTranslations("Applications");
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({ mode: "onTouched" });

  const stepLabels = [
    t("steps.projectType"),
    t("steps.details"),
    t("steps.contact"),
  ];

  const timelineOptions = [
    { value: "asap", label: t("options.asap") },
    { value: "1to3", label: t("options.1to3") },
    { value: "3to6", label: t("options.3to6") },
    { value: "6plus", label: t("options.6plus") },
  ];

  async function goNext() {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    if (step === 1) fieldsToValidate = ["applicationType"];
    if (step === 2) fieldsToValidate = ["area", "location", "timeline"];

    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function onSubmit(data: QuoteFormData) {
    setStatus("submitting");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Quote form submitted:", data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <p className="text-lg text-gray-900 font-medium">{t("success")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors";
  const errorClass = "text-red-600 text-sm mt-1";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {stepLabels.map((label, idx) => {
          const stepNum = idx + 1;
          const isActive = step === stepNum;
          const isComplete = step > stepNum;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : isComplete
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {isComplete ? "✓" : stepNum}
              </div>
              <span
                className={`text-xs text-center ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Project Type */}
        {step === 1 && (
          <div className="space-y-4">
            <label htmlFor="applicationType" className={labelClass}>
              {t("fields.applicationType")} *
            </label>
            <select
              id="applicationType"
              className={inputClass}
              {...register("applicationType", {
                required: t("validation.required"),
              })}
            >
              <option value="">{t("options.selectType")}</option>
              {applications.map((app) => (
                <option key={app.slug} value={app.slug}>
                  {tApp(`${app.slug}.title`)}
                </option>
              ))}
              <option value="other">{t("options.other")}</option>
            </select>
            {errors.applicationType && (
              <p className={errorClass}>{errors.applicationType.message}</p>
            )}
          </div>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="area" className={labelClass}>
                {t("fields.area")} *
              </label>
              <input
                id="area"
                type="number"
                min="1"
                className={inputClass}
                {...register("area", {
                  required: t("validation.required"),
                  min: { value: 1, message: t("validation.minArea") },
                  valueAsNumber: true,
                })}
              />
              {errors.area && (
                <p className={errorClass}>{errors.area.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className={labelClass}>
                {t("fields.location")} *
              </label>
              <input
                id="location"
                type="text"
                className={inputClass}
                {...register("location", {
                  required: t("validation.required"),
                })}
              />
              {errors.location && (
                <p className={errorClass}>{errors.location.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="timeline" className={labelClass}>
                {t("fields.timeline")} *
              </label>
              <select
                id="timeline"
                className={inputClass}
                {...register("timeline", {
                  required: t("validation.required"),
                })}
              >
                <option value="">{t("options.selectTimeline")}</option>
                {timelineOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.timeline && (
                <p className={errorClass}>{errors.timeline.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="description" className={labelClass}>
                {t("fields.description")}
              </label>
              <textarea
                id="description"
                rows={4}
                className={inputClass}
                {...register("description")}
              />
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className={labelClass}>
                {t("fields.name")} *
              </label>
              <input
                id="name"
                type="text"
                className={inputClass}
                {...register("name", {
                  required: t("validation.required"),
                })}
              />
              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                {t("fields.email")} *
              </label>
              <input
                id="email"
                type="email"
                className={inputClass}
                {...register("email", {
                  required: t("validation.required"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("validation.invalidEmail"),
                  },
                })}
              />
              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                {t("fields.phone")} *
              </label>
              <input
                id="phone"
                type="tel"
                className={inputClass}
                {...register("phone", {
                  required: t("validation.required"),
                  pattern: {
                    value: /^[+]?[\d\s()-]{7,}$/,
                    message: t("validation.invalidPhone"),
                  },
                })}
              />
              {errors.phone && (
                <p className={errorClass}>{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                {t("fields.company")}
              </label>
              <input
                id="company"
                type="text"
                className={inputClass}
                {...register("company")}
              />
            </div>
          </div>
        )}

        {/* Error state */}
        {status === "error" && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {t("error")}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t("navigation.back")}
            </button>
          ) : (
            <div />
          )}

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={goNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t("navigation.next")}
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? t("submitting") : t("submit")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
