import { HttpCode } from '@/utils'

interface HttpResponseArgs {
  success: boolean
  httpCode: HttpCode
  body: Record<string, unknown>
}

export class HttpResponse {
  public readonly success: boolean
  public readonly httpCode: HttpCode
  public readonly body: any

  constructor(input: HttpResponseArgs) {
    this.success = input.success ?? false
    this.httpCode = input.httpCode ?? 200
    this.body = input.body ?? {}
  }
}
