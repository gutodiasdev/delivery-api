
import { CreateUserRepository, UpdateRefreshTokenRepository } from '@/data/contracts'
import { AppError, HttpCode } from '@/errors'
import { prisma } from '@/main/config/prisma'
import dayjs from 'dayjs'

export class UserRepository implements
  CreateUserRepository,
  UpdateRefreshTokenRepository {
  async create(input: CreateUserRepository.Input): Promise<CreateUserRepository.Output> {
    if (!input) {
      throw new AppError({
        name: 'Failed to create a user',
        description: 'Some necessary parameters are missing in request',
        httpCode: HttpCode.BAD_REQUEST
      })
    }

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
  }

  async updateRefreshToken({ email, refreshToken }: UpdateRefreshTokenRepository.Input): Promise<void> {
    if (!email) {
      throw new AppError({
        name: 'Failed Refresh Token Update',
        description: 'User was not found',
        httpCode: HttpCode.UNAUTHORIZED
      })
    }

    if (typeof refreshToken !== 'string') {
      throw new AppError({
        name: 'Failed Refresh Token Update',
        description: 'Refresh Token type is invalid',
        httpCode: HttpCode.UNAUTHORIZED
      })
    }

    await prisma.user.update({
      where: {
        email
      },
      data: {
        refreshToken: {
          create: {
            token: refreshToken,
            expiresIn: dayjs().add(30, 'day').toString()
          }
        }
      }
    })
  }
}
