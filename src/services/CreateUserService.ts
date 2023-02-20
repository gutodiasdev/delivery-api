import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import { CreateUser } from '@/interfaces'

export class CreateUserService implements CreateUser {
  async execute(input: CreateUser.Input): Promise<CreateUser.Output> {
    const { email, password } = input

    const token = sign({ email, password }, 'SECRET', { expiresIn: '15m' })
    const refreshToken = uuid()

    return {
      token,
      refreshToken
    }
  }
}
