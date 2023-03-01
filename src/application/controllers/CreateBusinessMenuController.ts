import { CreateBusinessMenuService } from '@/application/services'
import { BusinessRepository } from '@/data/prisma'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessMenu } from '@/domain/interfaces'
import { Request, Response } from 'express'

export class CreateBusinessMenuController {
  constructor(
    private readonly createBusinessMenuService: CreateBusinessMenu
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse>> {
    const result = await this.createBusinessMenuService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

const businessRepository = new BusinessRepository()
const createBusinessMenuService = new CreateBusinessMenuService(businessRepository)
export const createBusinessMenuController = new CreateBusinessMenuController(createBusinessMenuService)
