import { HttpResponse } from '@/utils'
import { Prisma } from '@prisma/client'

export interface CreateBusiness {
  execute: (input: CreateBusiness.Input) => Promise<CreateBusiness.Output>
}

export namespace CreateBusiness {
  export type Input = Prisma.BusinessCreateInput

  export type Output = HttpResponse
}
