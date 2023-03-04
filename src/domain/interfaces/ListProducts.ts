import { HttpResponseArgs } from '../builders'
import { Product } from './@types'

export interface ListProducts {
  execute: (input: ListProducts.Input) => Promise<ListProducts.Output>
}

export namespace ListProducts {
  export type Input = {
    menuId: string
  }

  export type Output = HttpResponseArgs<Product[]>
}
