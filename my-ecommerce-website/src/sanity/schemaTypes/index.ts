import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import customer from './customer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,customer],
}
