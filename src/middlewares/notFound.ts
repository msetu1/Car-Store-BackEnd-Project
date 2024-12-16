/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import httpStatusCodes from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    error: '',
  });
};
