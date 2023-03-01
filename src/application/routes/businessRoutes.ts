import {
  createBusinessAddressController,
  createBusinessController,
  createBusinessSocialController
} from '@/application/controllers'
import { Router } from 'express'

const businessRoutes = Router()

businessRoutes.post('/create', async (req, res) => await createBusinessController.handle(req, res))
businessRoutes.post('/address/create', async (req, res) => await createBusinessAddressController.handle(req, res))
businessRoutes.post('/social/create', async (req, res) => await createBusinessSocialController.handle(req, res))

export { businessRoutes }
