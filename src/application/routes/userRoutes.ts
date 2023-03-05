
import {
  createSessionController,
  createUserController
} from '@/application/controllers'
import { Router } from 'express'

const userRouter = Router()

userRouter.post('/create', createUserController.handle)
userRouter.post('/session', createSessionController.handle)

export { userRouter }
