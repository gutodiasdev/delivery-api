import { CreateBusinessProductService } from '@/application/services'
import { BusinessRepository } from '@/data/prisma'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct } from '@/domain/interfaces'
import { Request, Response } from 'express'

export class CreateBusinessProductController {
  constructor(
    private readonly createBusinessProductService: CreateBusinessProduct
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusinessProduct.Output>>> {
    const result = await this.createBusinessProductService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

const businessRepository = new BusinessRepository()
const createBusinessProductService = new CreateBusinessProductService(businessRepository)
export const createBusinessProductController = new CreateBusinessProductController(createBusinessProductService)
