import Stripe from 'stripe'

export interface CreateStripeProduct {
  createProduct: (input: CreateStripeProduct.Input) => Promise<CreateStripeProduct.Output>
}

export namespace CreateStripeProduct {
  export type Input = Stripe.ProductCreateParams
  export type Output = any
}
