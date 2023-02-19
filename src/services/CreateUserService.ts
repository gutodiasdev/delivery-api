import { CreateUser } from '@/interfaces'

export class CreateUserService implements CreateUser {
  async execute(input: CreateUser.Input): Promise<CreateUser.Output> {
    const { email, password } = input
    console.log(email, password)

    return {
      token: 'something',
      refreshToken: 'something'
    }
  }
}
