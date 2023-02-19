import { createUserController } from '@/controllers/CreateUserController'
import { Router } from 'express'

const userRouter = Router()

userRouter.post('/create', async (req, res) => await createUserController.handle(req, res))

export { userRouter }
