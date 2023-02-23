import { BusinessRepository } from '@/data/prisma'
import { CreateBusinessAddress } from '@/interfaces'
import { CreateBusinessAddressService } from '@/services/CreateBusinessAddressService'
import { HttpResponse } from '@/utils'
import { Request, Response } from 'express'

export class CreateBusinessAddressController {
  constructor(
    private readonly createBusinessAddressController: CreateBusinessAddress
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponse>> {
    const result = await this.createBusinessAddressController.execute(req.body)
    return res.status(result.httpCode).json(result)
  }
}

const businessRepository = new BusinessRepository()
const createBusinessAddressService = new CreateBusinessAddressService(businessRepository)
export const createBusinessAddressController = new CreateBusinessAddressController(createBusinessAddressService)
