import { CreateBusinessSocialService } from '@/application/services'
import { BusinessRepository } from '@/data/prisma'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessSocial } from '@/domain/interfaces'
import { Request, Response } from 'express'

export class CreateBusinessSocialController {
  constructor(
    private readonly createBusinessSocialService: CreateBusinessSocial
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse>> {
    const result = await this.createBusinessSocialService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

const businessRepository = new BusinessRepository()
const createBusinessSocialService = new CreateBusinessSocialService(businessRepository)
export const createBusinessSocialController = new CreateBusinessSocialController(createBusinessSocialService)
