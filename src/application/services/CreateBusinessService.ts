import { CreateBusinessRepository } from '@/data/contracts'
import { CreateBusiness } from '@/domain/interfaces'
import { HttpCode, HttpResponse } from '@/domain/utils'

export class CreateBusinessService implements CreateBusiness {
  constructor(
    private readonly businessRepository: CreateBusinessRepository
  ) { }

  async execute(input: CreateBusiness.Input): Promise<HttpResponse> {
    const business = await this.businessRepository.create(input)

    return {
      success: true,
      httpCode: HttpCode.CREATED,
      body: {
        message: `${business.name} was created`
      }
    }
  }
}
