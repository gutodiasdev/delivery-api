import { Request, Response } from 'express'

// import { BusinessRepository } from '@/data/prisma'
import { CreateBusinessProductService } from '@/application/services'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct } from '@/domain/interfaces'
import { container } from 'tsyringe'
// import { CreateBusinessProductService, StripeHandlerService } from '../services'

export class CreateBusinessProductController {
  // constructor(
  //   private readonly createBusinessProductService: CreateBusinessProduct
  // ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusinessProduct.Output>>> {
    const createBusinessProductService = container.resolve(CreateBusinessProductService)
    const result = await createBusinessProductService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

// const businessRepository = new BusinessRepository()
// const stripeHandlerService = new StripeHandlerService()
// const createBusinessProductService = new CreateBusinessProductService(businessRepository, stripeHandlerService)
export const createBusinessProductController = new CreateBusinessProductController()
