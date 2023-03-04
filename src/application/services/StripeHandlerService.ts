import Stripe from 'stripe'

import { CreateStripeProduct } from '@/domain/interfaces'

export class StripeHandlerService implements CreateStripeProduct {
  private readonly stripe: Stripe

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2022-11-15' })
  }

  async createProduct(input: CreateStripeProduct.Input): Promise<CreateStripeProduct.Output> {
    const productCreated = await this.stripe.products.create(input)
    return productCreated
  }
}
