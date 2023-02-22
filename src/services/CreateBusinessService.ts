import { CreateBusinessController } from '@/controllers/CreateBusinessController'
import { CreateBusinessRepository } from '@/data/contracts'
import { BusinessRepository } from '@/data/prisma'
import { CreateBusiness } from '@/interfaces/CreateBusiness'
import { HttpCode, HttpResponse } from '@/utils'

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

const businessRepository = new BusinessRepository()
const createBusinessService = new CreateBusinessService(businessRepository)
export const createBusinessController = new CreateBusinessController(createBusinessService)
