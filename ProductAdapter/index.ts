type Product = {
  name: string
  value: number
  amount: number
}

export class ProductAdapter <ProviderProduct, Adaptee> {
  private product: ProviderProduct
  
  public constructor (product: ProviderProduct) {
    this.product = product
  }

  public adapt (mapping: { [inputKey: string]: string }): Product {
    const adaptedProduct: Adaptee = {}

    for (const inputKey in mapping) {
      const outputKey = mapping[inputKey];
      adaptedProduct[outputKey] = this.product[inputKey]
    }

    return adaptedProduct
  }
}
