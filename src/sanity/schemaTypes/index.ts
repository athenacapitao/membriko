import { type SchemaTypeDefinition } from 'sanity'
import page from './page'
import application from './application'
import blogPost from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, application, blogPost],
}
