import { HttpResponse } from '@/domain/builders'

export interface CreateBusinessSocial {
  execute: (input: CreateBusinessSocial.Input) => Promise<HttpResponse>
}

export namespace CreateBusinessSocial {
  export type Input = {
    businessId: string
    facebook?: string
    instagram?: string
    whatsapp?: string
  }

  export type Output = HttpResponse
}
