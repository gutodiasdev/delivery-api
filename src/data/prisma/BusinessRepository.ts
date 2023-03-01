import { prisma } from '@/application/main/config'
import { Prisma } from '@prisma/client'
import { CreateBusinessAddressRepository, CreateBusinessRepository } from '../contracts'

export class BusinessRepository implements
  CreateBusinessRepository,
  CreateBusinessAddressRepository {
  async create(input: Prisma.BusinessCreateInput): Promise<CreateBusinessRepository.Output> {
    const { name } = await prisma.business.create({ data: input })
    return {
      name
    }
  }

  async createAddress(input: CreateBusinessAddressRepository.Input): Promise<void> {
    await prisma.businessAddress.create({ data: input })
  }
}
