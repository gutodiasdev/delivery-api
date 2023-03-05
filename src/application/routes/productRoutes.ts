import { listProductsController } from '@/application/controllers'
import { Router } from 'express'

const productRoutes = Router()

productRoutes.get('/list-all', listProductsController.handle)

export { productRoutes }
