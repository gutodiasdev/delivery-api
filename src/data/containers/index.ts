import { container } from 'tsyringe'

import {
  CreateBusinessAddressRepository,
  CreateBusinessMenuRepository,
  CreateBusinessProductRepository,
  CreateBusinessRepository,
  CreateBusinessSocialRepository,
  CreateUserRepository,
  FindByEmailRepository,
  ListProductsRepository,
  UpdateRefreshTokenRepository,
  VerifyUserRepository
} from '@/data/contracts'
import {
  BusinessRepository,
  ProductsRepository,
  UserRepository
} from '@/data/prisma'

container.registerSingleton<
  CreateBusinessRepository &
  CreateBusinessAddressRepository &
  CreateBusinessSocialRepository &
  CreateBusinessMenuRepository &
  CreateBusinessProductRepository
>('BusinessRepository', BusinessRepository)

container.registerSingleton<ListProductsRepository>('ProductsRepository', ProductsRepository)

container.registerSingleton<
  CreateUserRepository &
  UpdateRefreshTokenRepository &
  FindByEmailRepository &
  VerifyUserRepository
>('UserRepository', UserRepository)
