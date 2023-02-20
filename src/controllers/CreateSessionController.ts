import { Request, Response } from 'express'

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

const createSessionService = new CreateSessionService()
export const createSessionController = new CreateSessionController(createSessionService)
