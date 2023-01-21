interface Product {
  name: string
  value: number
  amount: number
}

class ProductAdapter <ProviderProduct, Adaptee> {
  private product: ProviderProduct
  
  public constructor (product: ProviderProduct) {
    this.product = product
  }

  public adapt (mapping: { [inputKey: string]: string }): Product {
    const adaptedProduct: Adaptee = {}

    for (const inputKey in mapping) {
      if (mapping.hasOwnProperty(inputKey)) {
        const outputKey = mapping[inputKey];
        adaptedProduct[outputKey] = this.product[inputKey]
      }
    }

    return adaptedProduct
  }
}

/**
 * Exemplo de uso
 */

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
