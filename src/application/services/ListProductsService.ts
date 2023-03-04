import { ListProductsRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { ListProducts } from '@/domain/interfaces'

export class ListProductsService implements ListProducts {
  constructor(
    private readonly productsRepository: ListProductsRepository
  ) { }

  async execute(input: ListProducts.Input): Promise<ListProducts.Output> {
    const products = await this.productsRepository.getProducts(input)

    return new HttpResponse({
      success: true,
      httpCode: 200,
      body: products
    })
  }
}
