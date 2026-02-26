'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { Locale } from '@/lib/i18n'
import { categories } from '@/content/categories'
import { applicationSlugMap, getApplicationsInCategory } from '@/lib/slugs'
import { submitQuote } from '@/app/actions/quote'

// --- Validation schema ---

const contactFormSchema = z.object({
  projectType: z.string().min(1),
  area: z.string().min(1),
  timeline: z.string().min(1),
  location: z.string().min(1),
  description: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  locale: z.enum(['pt', 'en']),
})

type ContactFormData = z.infer<typeof contactFormSchema>

// --- Localisation strings ---

const strings = {
  pt: {
    step1Title: 'Tipo de Projeto',
    step1Sub: 'Selecione a aplicação que melhor descreve o seu projeto',
    step2Title: 'Detalhes do Projeto',
    step2Sub: 'Ajude-nos a entender melhor o seu projeto',
    step3Title: 'Os Seus Dados',
    step3Sub: 'Como podemos contactar para enviar o orçamento?',
    step4Title: 'Confirmar e Enviar',
    step4Sub: 'Reveja os detalhes antes de submeter',
    next: 'Seguinte',
    back: 'Anterior',
    submit: 'Enviar Pedido de Orçamento',
    submitting: 'A enviar...',
    successTitle: 'Pedido Enviado com Sucesso!',
    successMessage:
      'Recebemos o seu pedido de orçamento e entraremos em contacto em menos de 24 horas. Obrigado por escolher a Membriko.',
    projectTypePlaceholder: 'Selecione o tipo de aplicação',
    areaLabel: 'Área Aproximada (m²)',
    areaPlaceholder: 'ex: 150',
    timelineLabel: 'Prazo Pretendido',
    timelinePlaceholder: 'Selecione um prazo',
    locationLabel: 'Localização da Obra',
    locationPlaceholder: 'ex: Lisboa, Porto, Faro',
    descriptionLabel: 'Descrição Adicional (opcional)',
    descriptionPlaceholder: 'Descreva o seu projeto com mais detalhes...',
    nameLabel: 'Nome Completo',
    namePlaceholder: 'O seu nome',
    emailLabel: 'Email',
    emailPlaceholder: 'email@exemplo.com',
    phoneLabel: 'Telefone',
    phonePlaceholder: '+351 912 345 678',
    timelines: [
      { value: 'urgent', label: 'Urgente (< 2 semanas)' },
      { value: '1month', label: '1 mês' },
      { value: '3months', label: '1–3 meses' },
      { value: '6months', label: '3–6 meses' },
      { value: 'flexible', label: 'Flexível / Sem prazo definido' },
    ],
    reviewProjectType: 'Tipo de Projeto',
    reviewArea: 'Área',
    reviewTimeline: 'Prazo',
    reviewLocation: 'Localização',
    reviewDescription: 'Descrição',
    reviewName: 'Nome',
    reviewEmail: 'Email',
    reviewPhone: 'Telefone',
    errorRequired: 'Este campo é obrigatório',
    errorEmail: 'Email inválido',
    errorPhone: 'Número de telefone inválido',
    errorName: 'O nome deve ter pelo menos 2 caracteres',
    errorServer: 'Erro ao enviar. Por favor tente novamente.',
  },
  en: {
    step1Title: 'Project Type',
    step1Sub: 'Select the application that best describes your project',
    step2Title: 'Project Details',
    step2Sub: 'Help us better understand your project',
    step3Title: 'Your Details',
    step3Sub: 'How can we contact you to send the quote?',
    step4Title: 'Confirm and Submit',
    step4Sub: 'Review the details before submitting',
    next: 'Next',
    back: 'Back',
    submit: 'Submit Quote Request',
    submitting: 'Submitting...',
    successTitle: 'Request Submitted Successfully!',
    successMessage:
      'We received your quote request and will get back to you within 24 hours. Thank you for choosing Membriko.',
    projectTypePlaceholder: 'Select application type',
    areaLabel: 'Approximate Area (m²)',
    areaPlaceholder: 'e.g. 150',
    timelineLabel: 'Desired Timeline',
    timelinePlaceholder: 'Select a timeline',
    locationLabel: 'Project Location',
    locationPlaceholder: 'e.g. Lisbon, Porto, Faro',
    descriptionLabel: 'Additional Description (optional)',
    descriptionPlaceholder: 'Describe your project in more detail...',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'email@example.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+351 912 345 678',
    timelines: [
      { value: 'urgent', label: 'Urgent (< 2 weeks)' },
      { value: '1month', label: '1 month' },
      { value: '3months', label: '1–3 months' },
      { value: '6months', label: '3–6 months' },
      { value: 'flexible', label: 'Flexible / No fixed deadline' },
    ],
    reviewProjectType: 'Project Type',
    reviewArea: 'Area',
    reviewTimeline: 'Timeline',
    reviewLocation: 'Location',
    reviewDescription: 'Description',
    reviewName: 'Name',
    reviewEmail: 'Email',
    reviewPhone: 'Phone',
    errorRequired: 'This field is required',
    errorEmail: 'Invalid email',
    errorPhone: 'Invalid phone number',
    errorName: 'Name must be at least 2 characters',
    errorServer: 'Failed to submit. Please try again.',
  },
}

function buildProjectOptions(locale: Locale) {
  return categories.map((category) => {
    const appIds = getApplicationsInCategory(category.id)
    const options = appIds.map((appId) => ({
      value: appId,
      label: applicationSlugMap[appId]?.[locale]?.replace(/-/g, ' ') ?? appId,
    }))
    return {
      groupLabel: category.title[locale],
      options,
    }
  })
}

// --- Step indicator ---

function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number
  totalSteps: number
}): React.JSX.Element {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
              step < currentStep
                ? 'bg-success text-white'
                : step === currentStep
                  ? 'bg-accent text-black'
                  : 'bg-white/10 text-text-muted'
            }`}
          >
            {step < currentStep ? '✓' : step}
          </div>
          {step < totalSteps && (
            <div
              className={`w-8 h-0.5 transition-colors duration-200 ${
                step < currentStep ? 'bg-success' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

// --- Field components ---

function FieldError({ message }: { message?: string }): React.JSX.Element | null {
  if (!message) return null
  return <p className="mt-1 text-xs text-red-400">{message}</p>
}

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-subtle text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-200'

const labelClass = 'block text-sm font-medium text-text mb-1'

// --- Main component ---

interface ContactPageContentProps {
  locale: Locale
}

export function ContactPageContent({ locale }: ContactPageContentProps): React.JSX.Element {
  const s = strings[locale]
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const projectOptions = buildProjectOptions(locale)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<ContactFormData>({
    defaultValues: { locale },
  })

  const formValues = watch()

  const TOTAL_STEPS = 4

  async function handleNext() {
    let fieldsToValidate: (keyof ContactFormData)[] = []

    if (currentStep === 1) fieldsToValidate = ['projectType']
    else if (currentStep === 2) fieldsToValidate = ['area', 'timeline', 'location']
    else if (currentStep === 3) fieldsToValidate = ['name', 'email', 'phone']

    const isValid = await trigger(fieldsToValidate)
    if (isValid) setCurrentStep((prev) => prev + 1)
  }

  async function onSubmit(data: ContactFormData) {
    setServerError(null)
    const result = await submitQuote(data)
    if (result.success) {
      setIsSuccess(true)
    } else {
      setServerError(result.error ?? s.errorServer)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="max-w-lg mx-auto text-center px-4">
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-success">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-text mb-4">{s.successTitle}</h2>
          <p className="text-text-muted leading-relaxed">{s.successMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 sm:py-12 lg:py-20 bg-bg min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4">
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <div className="bg-bg-elevated rounded-2xl border border-white/10 p-5 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Hidden locale field */}
            <input type="hidden" {...register('locale')} value={locale} />

            {/* STEP 1: Project type */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-2">{s.step1Title}</h2>
                <p className="text-text-muted mb-6">{s.step1Sub}</p>

                <label className={labelClass}>{s.step1Title} *</label>
                <select
                  {...register('projectType', { required: s.errorRequired })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {s.projectTypePlaceholder}
                  </option>
                  {projectOptions.map((group) => (
                    <optgroup key={group.groupLabel} label={group.groupLabel}>
                      {group.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <FieldError message={errors.projectType?.message} />
              </div>
            )}

            {/* STEP 2: Project details */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-bold text-text mb-2">{s.step2Title}</h2>
                  <p className="text-text-muted mb-6">{s.step2Sub}</p>
                </div>

                <div>
                  <label className={labelClass}>{s.areaLabel} *</label>
                  <input
                    type="number"
                    min="1"
                    {...register('area', { required: s.errorRequired })}
                    placeholder={s.areaPlaceholder}
                    className={inputClass}
                  />
                  <FieldError message={errors.area?.message} />
                </div>

                <div>
                  <label className={labelClass}>{s.timelineLabel} *</label>
                  <select
                    {...register('timeline', { required: s.errorRequired })}
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {s.timelinePlaceholder}
                    </option>
                    {s.timelines.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.timeline?.message} />
                </div>

                <div>
                  <label className={labelClass}>{s.locationLabel} *</label>
                  <input
                    type="text"
                    {...register('location', { required: s.errorRequired })}
                    placeholder={s.locationPlaceholder}
                    className={inputClass}
                  />
                  <FieldError message={errors.location?.message} />
                </div>

                <div>
                  <label className={labelClass}>{s.descriptionLabel}</label>
                  <textarea
                    {...register('description')}
                    placeholder={s.descriptionPlaceholder}
                    rows={4}
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Contact details */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-bold text-text mb-2">{s.step3Title}</h2>
                  <p className="text-text-muted mb-6">{s.step3Sub}</p>
                </div>

                <div>
                  <label className={labelClass}>{s.nameLabel} *</label>
                  <input
                    type="text"
                    {...register('name', {
                      required: s.errorRequired,
                      minLength: { value: 2, message: s.errorName },
                    })}
                    placeholder={s.namePlaceholder}
                    className={inputClass}
                  />
                  <FieldError message={errors.name?.message} />
                </div>

                <div>
                  <label className={labelClass}>{s.emailLabel} *</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: s.errorRequired,
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: s.errorEmail },
                    })}
                    placeholder={s.emailPlaceholder}
                    className={inputClass}
                  />
                  <FieldError message={errors.email?.message} />
                </div>

                <div>
                  <label className={labelClass}>{s.phoneLabel} *</label>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: s.errorRequired,
                      minLength: { value: 9, message: s.errorPhone },
                    })}
                    placeholder={s.phonePlaceholder}
                    className={inputClass}
                  />
                  <FieldError message={errors.phone?.message} />
                </div>
              </div>
            )}

            {/* STEP 4: Review */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-2">{s.step4Title}</h2>
                <p className="text-text-muted mb-6">{s.step4Sub}</p>

                <dl className="space-y-3 bg-bg-subtle rounded-xl p-6 border border-white/10">
                  {[
                    { label: s.reviewProjectType, value: formValues.projectType },
                    { label: s.reviewArea, value: formValues.area ? `${formValues.area} m²` : '' },
                    { label: s.reviewTimeline, value: formValues.timeline },
                    { label: s.reviewLocation, value: formValues.location },
                    { label: s.reviewDescription, value: formValues.description },
                    { label: s.reviewName, value: formValues.name },
                    { label: s.reviewEmail, value: formValues.email },
                    { label: s.reviewPhone, value: formValues.phone },
                  ]
                    .filter((item) => item.value)
                    .map((item) => (
                      <div key={item.label} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <dt className="flex-shrink-0 sm:w-32 text-sm font-medium text-text-muted">
                          {item.label}
                        </dt>
                        <dd className="text-sm text-text font-medium">{item.value}</dd>
                      </div>
                    ))}
                </dl>

                {serverError && (
                  <p className="mt-4 text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-3 border border-red-500/20">
                    {serverError}
                  </p>
                )}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="flex-1 px-6 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 min-h-[48px]"
                >
                  {s.back}
                </button>
              )}

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 px-6 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 min-h-[48px]"
                >
                  {s.next}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3.5 rounded-lg bg-accent text-black font-semibold hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px]"
                >
                  {isSubmitting ? s.submitting : s.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
