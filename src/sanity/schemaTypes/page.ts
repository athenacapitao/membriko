import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'pt', type: 'seoFields', title: 'Portuguese' },
        { name: 'en', type: 'seoFields', title: 'English' },
      ],
    }),
  ],
})

const seoFields = {
  name: 'seoFields',
  title: 'SEO Fields',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', title: 'Meta Title' },
    { name: 'description', type: 'text', title: 'Meta Description' },
    { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' },
  ],
}
