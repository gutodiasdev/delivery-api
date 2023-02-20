export interface CreateUserRepository {
  create: (input: CreateUserRepository.Input) => Promise<CreateUserRepository.Output>
}

export namespace CreateUserRepository {
  export type Input = {
    name: string
    email: string
    password: string
  }

  export type Output = {
    name: string
    email: string
  }
}
