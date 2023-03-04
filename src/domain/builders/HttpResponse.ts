import { HttpCode } from '@/domain/utils'
import { Response } from 'express'

export interface HttpResponseArgs<T> {
  success?: boolean
  httpCode?: HttpCode
  body?: T
}

export class HttpResponse<T> {
  public readonly success: boolean
  public readonly httpCode: HttpCode
  public readonly body?: T

  constructor(input: HttpResponseArgs<T>) {
    this.success = input.success ?? true
    this.httpCode = input.httpCode ?? HttpCode.SUCCESS
    this.body = input.body
  }

  async dispatcher(res: Response): Promise<Response> {
    return res.status(this.httpCode).json({
      success: this.success,
      httpCode: this.httpCode,
      body: this.body
    })
  }
}
