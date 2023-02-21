import 'express-async-errors'

import './main/config/ModuleAlias'

import express from 'express'

import { userRouter } from '@/routes/userRoutes'

const app = express()
app.use(express.json())

app.use('/user', userRouter)

app.listen(3333, () => { console.log('Server is running with nodemon! On port:' + 3333) })
