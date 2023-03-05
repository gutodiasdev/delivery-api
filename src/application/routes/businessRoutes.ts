import { Router } from 'express'

import {
  createBusinessAddressController,
  createBusinessController,
  createBusinessMenuController,
  createBusinessProductController,
  createBusinessSocialController
} from '@/application/controllers'
import { verifyAuthenticated } from '@/application/middlewares'

const businessRoutes = Router()

businessRoutes.use(verifyAuthenticated)
businessRoutes.post('/create', async (req, res) => await createBusinessController.handle(req, res))
businessRoutes.post('/address/create', async (req, res) => await createBusinessAddressController.handle(req, res))
businessRoutes.post('/social/create', async (req, res) => await createBusinessSocialController.handle(req, res))
businessRoutes.post('/menu/create', async (req, res) => await createBusinessMenuController.handle(req, res))
businessRoutes.post('/product/create', createBusinessProductController.handle)

export { businessRoutes }
