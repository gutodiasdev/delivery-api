import 'express-async-errors'

import './application/main/config/ModuleAlias'

import cors from 'cors'
import express from 'express'

import {
  businessRoutes,
  paymentRoutes,
  productRoutes,
  userRouter
} from '@/application/routes'
import { ErrorHandler } from '@/domain/errors'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/business', businessRoutes)
app.use('/products', productRoutes)
app.use('/payment', paymentRoutes)

app.use(ErrorHandler)

app.listen(3333, () => { console.log('Server is running with nodemon! On port:' + 3333) })
