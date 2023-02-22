import { prisma } from '@/main/config'
import { Prisma } from '@prisma/client'
import { CreateBusinessRepository } from '../contracts'

export class BusinessRepository implements CreateBusinessRepository {
  async create(input: Prisma.BusinessCreateInput): Promise<CreateBusinessRepository.Output> {
    const { name } = await prisma.business.create({ data: input })
    return {
      name
    }
  }
}
