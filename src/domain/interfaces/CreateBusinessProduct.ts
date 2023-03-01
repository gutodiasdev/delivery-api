import { HttpResponse } from '@/domain/builders'

export interface CreateBusinessProduct {
  execute: (input: CreateBusinessProduct.Input) => Promise<CreateBusinessProduct.Output>
}

export namespace CreateBusinessProduct {
  export type Input = {
    businessMenuId: string
    title: string
    image: string
    description: string
    price: number
  }

  export type Output = HttpResponse
}
