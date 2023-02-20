export interface CreateUserRepository {
  create: (input: CreateUserRepository.Input) => Promise<void>
}

export namespace CreateUserRepository {
  export type Input = {
    name?: string
    email: string
    password: string
  }
}
