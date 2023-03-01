import { Request, Response } from 'express'

import { CreateBusinessService } from '@/application/services'
import { BusinessRepository } from '@/data/prisma'
import { CreateBusiness } from '@/domain/interfaces'
import { HttpResponse } from '@/domain/utils'

export class CreateBusinessController {
  constructor(
    private readonly createBusinessService: CreateBusiness
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse>> {
    const result = await this.createBusinessService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

const businessRepository = new BusinessRepository()
const createBusinessService = new CreateBusinessService(businessRepository)
export const createBusinessController = new CreateBusinessController(createBusinessService)
