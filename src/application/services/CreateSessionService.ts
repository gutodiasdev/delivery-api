import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import { FindByEmailRepository } from '@/data/contracts'
import { AppError } from '@/domain/errors'
import { CreateSession } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'
import { compare } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateSessionService implements CreateSession {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: FindByEmailRepository
  ) { }

  async execute(input: CreateSession.Input): Promise<CreateSession.Output> {
    const { email, password } = input

    const user = await this.userRepository.findByEmail({ email: input.email })

    if (!user) {
      throw new AppError({
        name: 'UserDontExists',
        description: 'Failed to create session. User does not exists',
        httpCode: HttpCode.NOT_FOUND
      })
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError({
        name: 'Unauthorized',
        description: 'Failed to create session. Email or Password are incorrect.',
        httpCode: HttpCode.UNAUTHORIZED
      })
    }

    const token = sign({ email, password }, 'SECRET', { expiresIn: '15m' })
    const refreshToken = uuid()

    return {
      token,
      refreshToken
    }
  }
}
