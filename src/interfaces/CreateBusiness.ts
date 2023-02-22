import { HttpResponse } from '@/utils'

export interface CreateBusiness {
  execute: (input: CreateBusiness.Input) => Promise<CreateBusiness.Output>
}

export namespace CreateBusiness {
  export type Input = {
    name: string
    image: string
    description: string
    telephone: string
  }

  export type Output = HttpResponse
}
