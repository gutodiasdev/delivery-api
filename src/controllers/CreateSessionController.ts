import { Request, Response } from 'express'

import { UserRepository } from '@/data/prisma'
import { CreateSession } from '@/interfaces'
import { CreateSessionService } from '@/services/CreateSessionService'

export class CreateSessionController {
  constructor(
    private readonly createSessionService: CreateSession
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.createSessionService.execute(req.body)

    return res.status(200).json(result)
  }
}

const userRepository = new UserRepository()
const createSessionService = new CreateSessionService(userRepository)
export const createSessionController = new CreateSessionController(createSessionService)
