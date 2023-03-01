
import { CreateBusinessAddressRepository } from '@/data/contracts'
import { CreateBusinessAddress } from '@/domain/interfaces'
import { HttpCode, HttpResponse } from '@/domain/utils'

export class CreateBusinessAddressService implements CreateBusinessAddress {
  constructor(
    private readonly businessRepository: CreateBusinessAddressRepository
  ) { }

  async execute(input: CreateBusinessAddressRepository.Input): Promise<HttpResponse> {
    await this.businessRepository.createAddress(input)

    return {
      success: true,
      httpCode: HttpCode.CREATED,
      body: {}
    }
  }
}
