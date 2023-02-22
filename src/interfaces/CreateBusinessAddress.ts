import { HttpResponse } from '@/utils'
import { Prisma } from '@prisma/client'

export interface CreateBusinessAddress {
  execute: (input: CreateBusinessAddress.Input) => Promise<CreateBusinessAddress.Output>
}

export namespace CreateBusinessAddress {
  export type Input = Prisma.BusinessAddressCreateInput
  export type Output = HttpResponse
}
