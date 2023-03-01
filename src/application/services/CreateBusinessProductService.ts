import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateBusinessProductService implements CreateBusinessProduct {
  async execute(input: CreateBusinessProduct.Input): Promise<HttpResponse> {
    return new HttpResponse({
      httpCode: HttpCode.CREATED
    })
  }
}
