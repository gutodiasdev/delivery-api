import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateBusinessMenuService } from '@/application/services'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessMenu } from '@/domain/interfaces'

export class CreateBusinessMenuController {
  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusinessMenu.Output>>> {
    const createBusinessMenuService = container.resolve(CreateBusinessMenuService)
    const result = await createBusinessMenuService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

export const createBusinessMenuController = new CreateBusinessMenuController()
