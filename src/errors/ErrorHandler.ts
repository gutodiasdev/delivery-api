import { NextFunction, Request, Response } from 'express'
import { AppError, HttpCode } from './AppError'

export function ErrorHandler(err: Error & AppError, req: Request, res: Response, next: NextFunction): any {
  const errCode = err.httpCode || HttpCode.INTERNAL_SERVER_ERROR
  const errMessage = err.message || 'Something went wrong'

  res.status(errCode).json({
    success: false,
    status: errCode,
    name: err.name,
    message: errMessage
  })
}
