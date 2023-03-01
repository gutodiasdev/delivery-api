import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import {
  CreateUserRepository,
  UpdateRefreshTokenRepository,
  VerifyUserRepository
} from '@/data/contracts'
import { AppError } from '@/domain/errors'
import { CreateUser } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateUserService implements CreateUser {
  constructor(
    private readonly userRepository: CreateUserRepository & UpdateRefreshTokenRepository & VerifyUserRepository
  ) { }

  async execute(input: CreateUser.Input): Promise<CreateUser.Output> {
    const { name, email, password } = input

    await this.userRepository.verifyByEmail({ email })

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

    const token = sign({ name, email, password }, 'SECRET', { expiresIn: '15m', subject: email })

    return {
      token,
      refreshToken
    }
  }
}
