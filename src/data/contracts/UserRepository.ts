
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

export interface UpdateRefreshTokenRepository {
  updateRefreshToken: (input: UpdateRefreshTokenRepository.Input) => Promise<void>
}

export namespace UpdateRefreshTokenRepository {
  export type Input = {
    email: string
    refreshToken: string
  }
}

export interface FindByEmailRepository {
  findByEmail: (input: FindByEmailRepository.Input) => Promise<FindByEmailRepository.Output>
}

export namespace FindByEmailRepository {
  export type Input = {
    email: string
  }

  export type Output = {
    id: string
    name: string
    email: string
    password: string
  }
}
