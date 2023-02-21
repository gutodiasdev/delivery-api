export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

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
