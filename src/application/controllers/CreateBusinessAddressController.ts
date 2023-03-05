import { Request, Response } from 'express'

import { CreateBusinessAddressService } from '@/application/services'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessAddress } from '@/domain/interfaces'
import { container } from 'tsyringe'

export class CreateBusinessAddressController {
  async handle(req: Request, res: Response): Promise<Response<HttpResponse<CreateBusinessAddress.Output>>> {
    const createBusinessAddressController = container.resolve(CreateBusinessAddressService)
    const result = await createBusinessAddressController.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

export const createBusinessAddressController = new CreateBusinessAddressController()
