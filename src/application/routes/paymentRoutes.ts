import { Router } from 'express'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY as string, { apiVersion: '2022-11-15' })

const paymentRoutes = Router()

paymentRoutes.get('/balance', async (req, res) => {
  const balance = await stripe.balance.retrieve()
  return res.status(200).json(balance)
})

paymentRoutes.get('/balance-transactions', async (req, res) => {
  const balanceTransactions = await stripe.balanceTransactions.list()
  return res.status(200).json(balanceTransactions)
})

paymentRoutes.post('/charge', async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 10000,
    currency: 'brl',
    source: 'tok_visa',
    description: 'My first charge',
    receipt_email: 'gutodiasux@gmail.com'
  })
  return res.status(200).json(charge)
})

export { paymentRoutes }
