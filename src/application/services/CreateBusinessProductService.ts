import { CreateBusinessProductRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct, CreateStripeProduct } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'
import { parsePriceToCents } from '@/domain/utils/parsePriceToCents'

export class CreateBusinessProductService implements CreateBusinessProduct {
  constructor(
    private readonly businessRepository: CreateBusinessProductRepository,
    private readonly stripeHandler: CreateStripeProduct
  ) { }

  async execute(input: CreateBusinessProduct.Input): Promise<HttpResponse<unknown>> {
    const parsedStripePrice = parsePriceToCents(input.price)
    await this.stripeHandler.createProduct({
      name: input.title,
      default_price_data: {
        currency: 'brl',
        unit_amount: parsedStripePrice
      }
    })
    await this.businessRepository.createProduct(input)

    return new HttpResponse({
      httpCode: HttpCode.CREATED
    })
  }
}
