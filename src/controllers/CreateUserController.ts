import { CreateUser } from '@/interfaces'
import { CreateUserService } from '@/services/CreateUserService'
import { Request, Response } from 'express'

export class CreateUserController {
  constructor(
    private readonly createUserService: CreateUser
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const result = this.createUserService.execute(req.body)

    return res.status(201).json(result)
  }
}

const createUserService = new CreateUserService()
export const createUserController = new CreateUserController(createUserService)
