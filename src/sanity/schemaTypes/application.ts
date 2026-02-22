import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'application',
  title: 'Application',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'pt', type: 'string', title: 'Portuguese' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        { name: 'pt', type: 'slug', title: 'Portuguese' },
        { name: 'en', type: 'slug', title: 'English' },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'pt', type: 'heroFields', title: 'Portuguese' },
        { name: 'en', type: 'heroFields', title: 'English' },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'benefit' }],
    }),
    defineField({
      name: 'specs',
      title: 'Technical Specifications',
      type: 'array',
      of: [{ type: 'spec' }],
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'processStep' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
  ],
})

defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'object',
  fields: [
    { name: 'title', type: 'object', fields: [
      { name: 'pt', type: 'string', title: 'Portuguese' },
      { name: 'en', type: 'string', title: 'English' },
    ]},
    { name: 'description', type: 'object', fields: [
      { name: 'pt', type: 'text', title: 'Portuguese' },
      { name: 'en', type: 'text', title: 'English' },
    ]},
    { name: 'icon', type: 'string', title: 'Icon Name' },
  ],
})
