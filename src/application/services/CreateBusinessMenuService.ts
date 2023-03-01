import { CreateBusinessMenuRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessMenu } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateBusinessMenuService implements CreateBusinessMenu {
  constructor(
    private readonly businessRepository: CreateBusinessMenuRepository
  ) { }

  async execute(input: CreateBusinessMenu.Input): Promise<CreateBusinessMenu.Output> {
    await this.businessRepository.createMenu(input)

    return new HttpResponse({
      httpCode: HttpCode.CREATED
    })
  }
}
