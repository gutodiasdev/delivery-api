
import { CreateUserRepository, UpdateRefreshTokenRepository } from '@/data/contracts'
import { prisma } from '@/main/config/prisma'
import dayjs from 'dayjs'

export class UserRepository implements
  CreateUserRepository,
  UpdateRefreshTokenRepository {
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

  async updateRefreshToken(input: UpdateRefreshTokenRepository.Input): Promise<void> {
    try {
      await prisma.user.update({
        where: {
          email: input.email
        },
        data: {
          refreshToken: {
            create: {
              token: input.refreshToken,
              expiresIn: dayjs().add(30, 'day').toString()
            }
          }
        }
      })
    } catch {
      throw new Error('Failed to update refresh token')
    }
  }
}
