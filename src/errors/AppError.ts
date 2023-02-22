import { HttpCode } from '@/utils'

type AppErrorArgs = {
  name?: string
  httpCode: HttpCode
  description: string
  isOperational?: boolean
}

export class AppError extends Error {
  public readonly name: string
  public readonly httpCode: HttpCode
  public readonly isOperacional: boolean = true

  constructor(input: AppErrorArgs) {
    super(input.description)

    Object.setPrototypeOf(this, new.target.prototype)

    this.name = input.name ?? 'Error'
    this.httpCode = input.httpCode

    if (input.isOperational !== undefined) this.isOperacional = input.isOperational

    Error.captureStackTrace(this)
  }
}
