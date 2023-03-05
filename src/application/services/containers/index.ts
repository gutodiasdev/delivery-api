import { CreateStripeProduct } from '@/domain/interfaces'
import { container } from 'tsyringe'
import { StripeHandlerService } from '../StripeHandlerService'

container.register<CreateStripeProduct>('StripeHandlerService', StripeHandlerService)
