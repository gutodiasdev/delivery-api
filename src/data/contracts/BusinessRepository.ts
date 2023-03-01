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

export interface CreateBusinessAddressRepository {
  createAddress: (input: CreateBusinessAddressRepository.Input) => Promise<void>
}

export namespace CreateBusinessAddressRepository {
  export type Input = {
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
    businessId: string
  }
}

export interface CreateBusinessSocialRepository {
  createSocial: (input: CreateBusinessSocialRepository.Input) => Promise<void>
}

export namespace CreateBusinessSocialRepository {
  export type Input = {
    businessId: string
    facebook?: string
    instagram?: string
    whatsapp?: string
  }
}
