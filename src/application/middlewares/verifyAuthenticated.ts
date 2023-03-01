import { NextFunction, Request, Response } from 'express'

import { AppError } from '@/domain/errors'
import { HttpCode } from '@/domain/utils'

export function verifyAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const { authorization } = req.headers

  if (!authorization) {
    throw new AppError({
      name: 'Unauthorized',
      httpCode: HttpCode.UNAUTHORIZED,
      description: 'Failed to identify authorization token'
    })
  }

  const [, token] = authorization?.split(' ')

  if (!token) {
    throw new AppError({
      name: 'Unauthorized',
      httpCode: HttpCode.UNAUTHORIZED,
      description: 'Failed to identify authorization token'
    })
  }

  next()
}
