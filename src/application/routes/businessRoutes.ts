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
businessRoutes.post('/create', createBusinessController.handle)
businessRoutes.post('/address/create', createBusinessAddressController.handle)
businessRoutes.post('/social/create', async (req, res) => await createBusinessSocialController.handle(req, res))
businessRoutes.post('/menu/create', createBusinessMenuController.handle)
businessRoutes.post('/product/create', createBusinessProductController.handle)

export { businessRoutes }
