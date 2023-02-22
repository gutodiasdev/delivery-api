import { CreateBusiness } from '@/interfaces'
import { HttpResponse } from '@/utils'
import { Request, Response } from 'express'

export class CreateBusinessController {
  constructor(
    private readonly createBusinessService: CreateBusiness
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse>> {
    const result = await this.createBusinessService.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}
