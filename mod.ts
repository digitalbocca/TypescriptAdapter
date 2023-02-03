import { ProductAdapter } from './ProductAdapter/index.ts'

const product = {
  a200: 'produto',
  c400: 10,
  f400: 20
}

const mapping = {
  a200: "name",
  c400: "product",
  f400: "amount"
}

const adapter = new ProductAdapter<typeof product, typeof mapping>(product)
const adaptedProduct = adapter.adapt(mapping)

console.log(adaptedProduct);
