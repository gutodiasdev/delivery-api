import { Request, Response } from 'express'

import { CreateBusinessService } from '@/application/services'
import { HttpResponse } from '@/domain/builders'
import { CreateBusiness } from '@/domain/interfaces'
import { container } from 'tsyringe'

export class CreateBusinessController {
  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusiness.Output>>> {
    const createBusinessService = container.resolve(CreateBusinessService)
    const result = await createBusinessService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

export const createBusinessController = new CreateBusinessController()
