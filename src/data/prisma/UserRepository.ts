
import dayjs from 'dayjs'

import { prisma } from '@/application/main/config/prisma'
import {
  CreateUserRepository,
  FindByEmailRepository,
  UpdateRefreshTokenRepository,
  VerifyUserRepository
} from '@/data/contracts'
import { AppError } from '@/domain/errors'
import { HttpCode } from '@/domain/utils'

export class UserRepository implements
  CreateUserRepository,
  UpdateRefreshTokenRepository,
  FindByEmailRepository,
  VerifyUserRepository {
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

  async findByEmail(input: FindByEmailRepository.Input): Promise<FindByEmailRepository.Output> {
    const user = await prisma.user.findFirst({
      where: {
        email: input.email
      }
    })

    if (!user) {
      throw new AppError({
        name: 'UserNotFound',
        description: 'User does not exists in our database',
        httpCode: HttpCode.NOT_FOUND
      })
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password
    }
  }

  async verifyByEmail(input: VerifyUserRepository.Input): Promise<void> {
    const user = await prisma.user.findFirst({
      where: {
        email: input.email
      }
    })

    if (user) {
      throw new AppError({
        name: 'UserAlreadyExists',
        description: 'User does not exists in our database',
        httpCode: HttpCode.NOT_FOUND
      })
    }
  }
}
