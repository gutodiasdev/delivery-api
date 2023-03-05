import { CreateBusinessRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusiness } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateBusinessService implements CreateBusiness {
  constructor(
    @inject('BusinessRepository')
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
