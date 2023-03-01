import { CreateBusinessRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusiness } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateBusinessService implements CreateBusiness {
  constructor(
    private readonly businessRepository: CreateBusinessRepository
  ) { }

  async execute(input: CreateBusiness.Input): Promise<CreateBusiness.Output> {
    const business = await this.businessRepository.create(input)

    return new HttpResponse({
      success: true,
      httpCode: HttpCode.CREATED,
      body: {
        message: `${business.name} was created`
      }
    })
  }
}
