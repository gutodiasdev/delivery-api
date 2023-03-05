import { inject, injectable } from 'tsyringe'

import { CreateBusinessProductRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct, CreateStripeProduct } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'
import { parsePriceToCents } from '@/domain/utils/parsePriceToCents'

@injectable()
export class CreateBusinessProductService implements CreateBusinessProduct {
  constructor(
    @inject('BusinessRepository')
    private readonly businessRepository: CreateBusinessProductRepository,
    @inject('StripeHandlerService')
    private readonly stripeHandlerService: CreateStripeProduct
  ) { }

  async execute(input: CreateBusinessProduct.Input): Promise<HttpResponse<unknown>> {
    const parsedStripePrice = parsePriceToCents(input.price)

    const product = await this.stripeHandlerService.createProduct({
      name: input.title,
      default_price_data: {
        currency: 'brl',
        unit_amount: parsedStripePrice
      }
    })

    await this.businessRepository.createProduct({ ...input, stripeProductId: product.id })

    return new HttpResponse({
      httpCode: HttpCode.CREATED
    })
  }
}
