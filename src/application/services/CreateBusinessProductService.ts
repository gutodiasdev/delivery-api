import { CreateBusinessProductRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateBusinessProductService implements CreateBusinessProduct {
  constructor(
    private readonly businessRepository: CreateBusinessProductRepository
  ) { }

  async execute(input: CreateBusinessProduct.Input): Promise<HttpResponse<unknown>> {
    await this.businessRepository.createProduct(input)

    return new HttpResponse({
      httpCode: HttpCode.CREATED
    })
  }
}
