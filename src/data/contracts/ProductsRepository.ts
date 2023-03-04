import { Product } from '@/domain/interfaces/@types'

export interface ListProductsRepository {
  getProducts: (input: ListProductsRepository.Input) => Promise<ListProductsRepository.Output>
}

export namespace ListProductsRepository {
  export type Input = {
    menuId: string
  }

  export type Output = Product[]
}
