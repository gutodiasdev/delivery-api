import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'

import { CreateUserRepository, UpdateRefreshTokenRepository } from '@/data/contracts'
import { CreateUser } from '@/interfaces'

export class CreateUserService implements CreateUser {
  constructor(
    private readonly userRepository: CreateUserRepository & UpdateRefreshTokenRepository
  ) { }

  async execute(input: CreateUser.Input): Promise<CreateUser.Output> {
    const { name, email, password } = input
    try {
      await this.userRepository.create(input)

      const refreshToken = uuid()

      await this.userRepository.updateRefreshToken({ email, refreshToken })

      const token = sign({ name, email, password }, 'SECRET', { expiresIn: '15m' })

      return {
        token,
        refreshToken
      }
    } catch {
      throw new Error('Failed to create new user')
    }
  }
}
