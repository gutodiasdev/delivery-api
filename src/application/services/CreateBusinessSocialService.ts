import { CreateBusinessSocialRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessSocial } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateBusinessSocialService implements CreateBusinessSocial {
  constructor(
    @inject('BusinessRepository')
    private readonly businessRepository: CreateBusinessSocialRepository
  ) { }

  async execute(input: CreateBusinessSocial.Input): Promise<CreateBusinessSocial.Output> {
    await this.businessRepository.createSocial(input)

    return new HttpResponse({
      success: true,
      httpCode: HttpCode.CREATED
    })
  }
}
