import { prisma } from '@/application/main/config'
import { ListProductsRepository } from '@/data/contracts'
import { AppError } from '@/domain/errors'
import { HttpCode } from '@/domain/utils'

export class ProductsRepository implements ListProductsRepository {
  async getProducts(input: ListProductsRepository.Input): Promise<ListProductsRepository.Output> {
    const menuExists = await prisma.businessMenu.findFirst({
      where: { id: input.menuId }
    })

    if (!menuExists) {
      throw new AppError({
        name: 'BusinessMenuDoesNotExists',
        description: 'Business menu was not found!',
        httpCode: HttpCode.NOT_FOUND
      })
    }

    const products = await prisma.businessProducts.findMany({
      where: {
        businessMenuId: input.menuId
      }
    })

    return products
  }
}
