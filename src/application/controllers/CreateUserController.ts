import { CreateUserService } from '@/application/services'
import { UserRepository } from '@/data/prisma'
import { CreateUser } from '@/domain/interfaces'
import { Request, Response } from 'express'

export class CreateUserController {
  constructor(
    private readonly createUserService: CreateUser
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.createUserService.execute(req.body)

    return res.status(201).json(result)
  }
}

const userRepository = new UserRepository()
const createUserService = new CreateUserService(userRepository)
export const createUserController = new CreateUserController(createUserService)
