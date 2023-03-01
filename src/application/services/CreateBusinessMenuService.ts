import { HttpResponse } from '@/domain/builders'
import { CreateBusinessMenu } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateBusinessMenuService implements CreateBusinessMenu {
  async execute(input: CreateBusinessMenu.Input): Promise<CreateBusinessMenu.Output> {
    return new HttpResponse({
      httpCode: HttpCode.CREATED
    })
  }
}
