import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import { CreateSession } from '@/interfaces'

export class CreateSessionService implements CreateSession {
  async execute(input: CreateSession.Input): Promise<CreateSession.Output> {
    const { email, password } = input

    const token = sign({ email, password }, 'SECRET', { expiresIn: '15m' })
    const refreshToken = uuid()

    return {
      token,
      refreshToken
    }
  }
}
