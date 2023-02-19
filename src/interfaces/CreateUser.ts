export interface CreateUser {
  execute: (input: CreateUser.Input) => Promise<CreateUser.Output>
}

export namespace CreateUser {
  export type Input = {
    nome?: string
    email: string
    senha: string
  }

  export type Output = {
    token: string
    refreshToken: string
  }
}
