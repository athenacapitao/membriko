'use server'

import { z } from 'zod'

const quoteSchema = z.object({
  projectType: z.string().min(1, 'Project type is required'),
  area: z.string().min(1, 'Area is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  location: z.string().min(1, 'Location is required'),
  description: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Phone must be at least 9 digits'),
  locale: z.enum(['pt', 'en']),
})

export type QuoteFormData = z.infer<typeof quoteSchema>

interface QuoteResult {
  success: boolean
  error?: string
}

export async function submitQuote(data: QuoteFormData): Promise<QuoteResult> {
  const parsed = quoteSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? 'Invalid data' }
  }

  const { projectType, area, timeline, location, description, name, email, phone, locale } = parsed.data

  try {
    // Send notification email to Membriko team
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const notificationEmail = process.env.NOTIFICATION_EMAIL ?? 'info@membriko.pt'

      // Notification to team
      await resend.emails.send({
        from: 'Membriko Website <noreply@membriko.pt>',
        to: notificationEmail,
        subject: `Novo Pedido de Orçamento: ${projectType} - ${name}`,
        html: `
          <h2>Novo Pedido de Orçamento</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nome</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Tipo de Projeto</td><td style="padding:8px;border:1px solid #ddd">${projectType}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Área</td><td style="padding:8px;border:1px solid #ddd">${area} m²</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Prazo</td><td style="padding:8px;border:1px solid #ddd">${timeline}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Localização</td><td style="padding:8px;border:1px solid #ddd">${location}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Descrição</td><td style="padding:8px;border:1px solid #ddd">${description || 'N/A'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Idioma</td><td style="padding:8px;border:1px solid #ddd">${locale.toUpperCase()}</td></tr>
          </table>
        `,
      })

      // Confirmation to customer
      const confirmSubject = locale === 'pt'
        ? 'Membriko - Recebemos o seu pedido de orçamento'
        : 'Membriko - We received your quote request'

      const confirmBody = locale === 'pt'
        ? `<h2>Obrigado, ${name}!</h2><p>Recebemos o seu pedido de orçamento e entraremos em contacto nas próximas 24 horas.</p><p>Detalhes do pedido:</p><ul><li>Projeto: ${projectType}</li><li>Área: ${area} m²</li><li>Localização: ${location}</li></ul><p>Cumprimentos,<br>Equipa Membriko</p>`
        : `<h2>Thank you, ${name}!</h2><p>We received your quote request and will get back to you within 24 hours.</p><p>Request details:</p><ul><li>Project: ${projectType}</li><li>Area: ${area} m²</li><li>Location: ${location}</li></ul><p>Best regards,<br>Membriko Team</p>`

      await resend.emails.send({
        from: 'Membriko <noreply@membriko.pt>',
        to: email,
        subject: confirmSubject,
        html: confirmBody,
      })
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send email. Please try again.' }
  }
}
