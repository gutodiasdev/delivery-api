
import { CreateBusinessAddressRepository } from '@/data/contracts'
import { HttpResponse } from '@/domain/builders'
import { CreateBusinessAddress } from '@/domain/interfaces'
import { HttpCode } from '@/domain/utils'

export class CreateBusinessAddressService implements CreateBusinessAddress {
  constructor(
    private readonly businessRepository: CreateBusinessAddressRepository
  ) { }

  async execute(input: CreateBusinessAddressRepository.Input): Promise<HttpResponse> {
    await this.businessRepository.createAddress(input)

    return new HttpResponse({
      success: true,
      httpCode: HttpCode.CREATED,
      body: {}
    })
  }
}
