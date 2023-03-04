import { listProductsController } from '@/application/controllers'
import { Router } from 'express'

const productRoutes = Router()

productRoutes.get('/list-all', async (req, res) => await listProductsController.handle(req, res))

export { productRoutes }
