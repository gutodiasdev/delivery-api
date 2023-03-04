import { HttpCode } from '@/domain/utils'

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
}
