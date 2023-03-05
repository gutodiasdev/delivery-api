import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListProductsService } from '@/application/services'
import { HttpResponse, HttpResponseArgs } from '@/domain/builders'
import { ListProducts } from '@/domain/interfaces'

class ListProductsController {
  async handle(req: Request, res: Response): Promise<Response<HttpResponseArgs<ListProducts.Output>>> {
    const listProdutsService = container.resolve(ListProductsService)
    const result = await listProdutsService.execute(req.body)
    const response = new HttpResponse(result)
    return await response.dispatcher(res)
  }
}

export const listProductsController = new ListProductsController()
