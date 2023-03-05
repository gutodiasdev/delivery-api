import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateBusinessProductService } from '@/application/services'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessProduct } from '@/domain/interfaces'

export class CreateBusinessProductController {
  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusinessProduct.Output>>> {
    const createBusinessProductService = container.resolve(CreateBusinessProductService)
    const result = await createBusinessProductService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

export const createBusinessProductController = new CreateBusinessProductController()
