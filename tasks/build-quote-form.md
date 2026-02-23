# Membriko - Quote Form Page

## Task
Build the quote request form for the Membriko website.

## Location
- Page: `/home/athena/membriko/src/app/[locale]/quote/page.tsx`

## Requirements
- Bilingual: Support both `pt` and `en` locales
- Multi-step form with:
  1. **Step 1: Project Type** - Select application type (from the 11 options)
  2. **Step 2: Project Details** - Area size, location, timeline
  3. **Step 3: Contact Info** - Name, email, phone
- Form validation
- Success/error states
- Use React Hook Form (install if needed)
- Style with Tailwind CSS
- Use next-intl for translations

## Form Fields

### Step 1: Project Type
- Application type (dropdown/radio): Required
  - Telhados Planos / Flat Roofs
  - Telhados Inclinados / Pitched Roofs
  - Telhados Verdes / Green Roofs
  - Terraços e Varandas / Terraces & Balconies
  - Piscinas / Swimming Pools
  - Lagos e Reservatórios / Lakes & Reservoirs
  - Fachadas / Facades
  - Fundações / Foundations
  - Edifícios Industriais / Industrial Buildings
  - Edifícios Comerciais / Commercial Buildings
  - Habitações Residenciais / Residential Houses
  - Outro / Other

### Step 2: Project Details
- Area (m²): Required, number
- Location/Address: Required, text
- Timeline: Required, select
  - ASAP / Quanto antes
  - 1-3 meses / 1-3 months
  - 3-6 meses / 3-6 months
  - 6+ meses / 6+ months
- Description: Optional, textarea
- File upload (optional): For project plans/documents

### Step 3: Contact Info
- Name: Required, text
- Email: Required, email
- Phone: Required, phone
- Company (optional): text

## Translations Needed (add to messages/)

### Portuguese (pt.json)
```json
{
  "Quote": {
    "title": "Pedir Orçamento",
    "subtitle": "Fale connosco para um orçamento personalizado",
    "steps": {
      "projectType": "Tipo de Projeto",
      "details": "Detalhes do Projeto",
      "contact": "Contacto"
    },
    "fields": {
      "applicationType": "Tipo de Aplicação",
      "area": "Área (m²)",
      "location": "Localização",
      "timeline": "Prazo",
      "description": "Descrição",
      "upload": "Upload de Ficheiros",
      "name": "Nome",
      "email": "Email",
      "phone": "Telefone",
      "company": "Empresa"
    },
    "options": {
      "asap": "Quanto antes",
      "1to3": "1-3 meses",
      "3to6": "3-6 meses",
      "6plus": "6+ meses"
    },
    "submit": "Enviar Pedido",
    "success": "Obrigado! O seu pedido foi enviado. Responderemos em 24h.",
    "error": "Erro ao enviar. Por favor, tente novamente."
  }
}
```

### English (en.json)
```json
{
  "Quote": {
    "title": "Get a Quote",
    "subtitle": "Contact us for a personalized quote",
    "steps": {
      "projectType": "Project Type",
      "details": "Project Details",
      "contact": "Contact Info"
    },
    "fields": {
      "applicationType": "Application Type",
      "area": "Area (m²)",
      "location": "Location",
      "timeline": "Timeline",
      "description": "Description",
      "upload": "Upload Files",
      "name": "Name",
      "email": "Email",
      "phone": "Phone",
      "company": "Company"
    },
    "options": {
      "asap": "ASAP",
      "1to3": "1-3 months",
      "3to6": "3-6 months",
      "6plus": "6+ months"
    },
    "submit": "Submit Request",
    "success": "Thank you! Your request has been sent. We'll respond within 24h.",
    "error": "Error sending. Please try again."
  }
}
```

## Success Criteria
- [ ] Form works in both PT and EN
- [ ] All validation works
- [ ] Multi-step navigation works
- [ ] Success message shows after submission
- [ ] Form is responsive
- [ ] Accessible (proper labels, ARIA)
