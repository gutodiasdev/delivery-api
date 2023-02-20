import { CreateSession } from '@/interfaces'
import { Request, Response } from 'express'

export class CreateSessionController {
  constructor(
    private readonly createSessionService: CreateSession
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.createSessionService.execute(req.body)

    return res.status(200).json(result)
  }
}
