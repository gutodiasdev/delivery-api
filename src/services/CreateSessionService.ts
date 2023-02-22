import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import { FindByEmailRepository } from '@/data/contracts'
import { AppError, HttpCode } from '@/errors'
import { CreateSession } from '@/interfaces'

export class CreateSessionService implements CreateSession {
  constructor(
    private readonly userRepository: FindByEmailRepository
  ) { }

  async execute(input: CreateSession.Input): Promise<CreateSession.Output> {
    const { email, password } = input

    const user = await this.userRepository.findByemail({ email: input.email })

    if (!user) {
      throw new AppError({
        name: 'UserDontExists',
        description: 'Failed to create session. User does not exists',
        httpCode: HttpCode.NOT_FOUND
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
