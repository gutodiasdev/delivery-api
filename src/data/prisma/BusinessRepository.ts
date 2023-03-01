import { Prisma } from '@prisma/client'

import { prisma } from '@/application/main/config'
import {
  CreateBusinessAddressRepository,
  CreateBusinessMenuRepository,
  CreateBusinessRepository,
  CreateBusinessSocialRepository
} from '@/data/contracts'

export class BusinessRepository implements
  CreateBusinessRepository,
  CreateBusinessAddressRepository,
  CreateBusinessSocialRepository,
  CreateBusinessMenuRepository {
  async create(input: Prisma.BusinessCreateInput): Promise<CreateBusinessRepository.Output> {
    const { name } = await prisma.business.create({ data: input })
    return {
      name
    }
  }

  async createAddress(input: CreateBusinessAddressRepository.Input): Promise<void> {
    await prisma.businessAddress.create({ data: input })
  }

  async createSocial(input: CreateBusinessSocialRepository.Input): Promise<void> {
    await prisma.businessSocial.create({
      data: {
        businessId: input.businessId,
        instagram: input.instagram,
        facebook: input.facebook,
        whatsapp: input.whatsapp
      }
    })
  }

  async createMenu(input: CreateBusinessMenuRepository.Input): Promise<void> {
    await prisma.businessMenu.create({
      data: {
        businessId: input.businessId,
        name: input.name
      }
    })
  }
}
