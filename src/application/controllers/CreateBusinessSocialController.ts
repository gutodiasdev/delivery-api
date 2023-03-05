import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateBusinessSocialService } from '@/application/services'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessSocial } from '@/domain/interfaces'

export class CreateBusinessSocialController {
  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusinessSocial.Output>>> {
    const createBusinessSocialService = container.resolve(CreateBusinessSocialService)
    const result = await createBusinessSocialService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

export const createBusinessSocialController = new CreateBusinessSocialController()
