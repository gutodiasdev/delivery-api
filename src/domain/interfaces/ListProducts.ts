import { HttpResponse } from '../builders'

export interface ListProducts {
  execute: (input: ListProducts.Input) => Promise<ListProducts.Output>
}

export namespace ListProducts {
  export type Input = {
    businessMenuId: string
  }

  export type Output = HttpResponse
}
