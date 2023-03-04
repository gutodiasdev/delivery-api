import { ListProductsService } from '@/application/services/ListProductsService'
import { ProductsRepository } from '@/data/prisma'
import { HttpResponse, HttpResponseArgs } from '@/domain/builders'
import { ListProducts } from '@/domain/interfaces'
import { Request, Response } from 'express'

class ListProductsController {
  constructor(
    private readonly listProdutsService: ListProducts
  ) { }

  async handle(req: Request, res: Response): Promise<Response<HttpResponseArgs<ListProducts.Output>>> {
    const result = await this.listProdutsService.execute(req.body)
    const response = new HttpResponse(result)
    return await response.dispatcher(res)
  }
}

const productsRepository = new ProductsRepository()
const listProdutsService = new ListProductsService(productsRepository)
export const listProductsController = new ListProductsController(listProdutsService)
