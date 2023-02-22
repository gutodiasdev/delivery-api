import { Prisma } from '@prisma/client'

export interface CreateBusinessRepository {
  create: (input: CreateBusinessRepository.Input) => Promise<CreateBusinessRepository.Output>
}

export namespace CreateBusinessRepository {
  export type Input = Prisma.BusinessCreateInput
  export type Output = {
    name: string
  }
}
