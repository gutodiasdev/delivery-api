
import {
  createSessionController,
  createUserController
} from '@/application/controllers'
import { Router } from 'express'

const userRouter = Router()

userRouter.post('/create', createUserController.handle)
userRouter.post('/session', async (req, res) => await createSessionController.handle(req, res))

export { userRouter }
