import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import {
  CreateUserRepository,
  FindByEmailRepository,
  UpdateRefreshTokenRepository
} from '@/data/contracts'
import { AppError, HttpCode } from '@/errors'
import { CreateUser } from '@/interfaces'
import { hash } from 'bcryptjs'

export class CreateUserService implements CreateUser {
  constructor(
    private readonly userRepository: CreateUserRepository & UpdateRefreshTokenRepository & FindByEmailRepository
  ) { }

  async execute(input: CreateUser.Input): Promise<CreateUser.Output> {
    const { name, email, password } = input

    const userAlreadyExists = await this.userRepository.findByEmail({ email })
    if (userAlreadyExists) {
      throw new AppError({
        name: 'UserAlreadyExists',
        description: 'Failed to create new user. Already exists in our database',
        httpCode: HttpCode.BAD_REQUEST
      })
    }

    const hashedPassword = await hash(password, 10)

    await this.userRepository.create({ ...input, password: hashedPassword })

    const refreshToken = uuid()

    if (!refreshToken) {
      throw new AppError({
        name: 'FailedGenerateRefreshToken',
        description: 'Failed to generate a new refresh token',
        httpCode: HttpCode.INTERNAL_SERVER_ERROR
      })
    }

    await this.userRepository.updateRefreshToken({ email, refreshToken })

    const token = sign({ name, email, password }, 'SECRET', { expiresIn: '15m' })

    return {
      token,
      refreshToken
    }
  }
}
