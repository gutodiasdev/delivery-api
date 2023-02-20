import { CreateUserRepository } from '@/data/contracts'
import { prisma } from '@/main/config/prisma'

export class UserRepository implements CreateUserRepository {
  async create(input: CreateUserRepository.Input): Promise<CreateUserRepository.Output> {
    try {
      const user = await prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password
        }
      })

      return {
        name: user.name,
        email: user.email
      }
    } catch {
      throw new Error('Failed to create new user')
    }
  }
}
