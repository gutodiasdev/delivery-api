import { HttpResponse } from '@/domain/builders'

export interface CreateBusinessMenu {
  execute: (input: CreateBusinessMenu.Input) => Promise<CreateBusinessMenu.Output>
}

export namespace CreateBusinessMenu {
  export type Input = {
    businessId: string
    name: string
  }

  export type Output = HttpResponse
}
