/* eslint-disable @typescript-eslint/no-explicit-any */

import { Response } from 'express';
import httpStatusCodes from 'http-status-codes';
export const handleCastError = (err: any, res: Response) => {
  res.status(httpStatusCodes.BAD_REQUEST).json({
    success: false,
    message: err.message,
    error: err,
  });
};
