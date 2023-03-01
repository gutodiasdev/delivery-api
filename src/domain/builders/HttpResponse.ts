import { HttpCode } from '@/domain/utils'

interface HttpResponseArgs {
  success?: boolean
  httpCode?: HttpCode
  body?: Record<string, unknown>
}

export class HttpResponse {
  public readonly success: boolean
  public readonly httpCode: HttpCode
  public readonly body?: Record<string, unknown>

  constructor(input: HttpResponseArgs) {
    this.success = input.success ?? true
    this.httpCode = input.httpCode ?? HttpCode.SUCCESS
    this.body = input.body ?? {}
  }
}
