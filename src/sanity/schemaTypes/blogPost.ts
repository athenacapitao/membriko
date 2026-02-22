import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        { name: 'pt', type: 'text', title: 'Portuguese' },
        { name: 'en', type: 'text', title: 'English' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
