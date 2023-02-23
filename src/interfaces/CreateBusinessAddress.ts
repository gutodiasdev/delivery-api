import { HttpResponse } from '@/utils'

export interface CreateBusinessAddress {
  execute: (input: CreateBusinessAddress.Input) => Promise<CreateBusinessAddress.Output>
}

export namespace CreateBusinessAddress {
  export type Input = {
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
    businessId: string
  }
  export type Output = HttpResponse
}
