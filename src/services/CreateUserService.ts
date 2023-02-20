import { sign } from 'jsonwebtoken'

import { CreateUser } from '@/interfaces'

export class CreateUserService implements CreateUser {
  async execute(input: CreateUser.Input): Promise<CreateUser.Output> {
    const { email, password } = input

    const token = sign({ email, password }, 'SECRET', { expiresIn: '5m' })

    return {
      token,
      refreshToken: 'something'
    }
  }
}
