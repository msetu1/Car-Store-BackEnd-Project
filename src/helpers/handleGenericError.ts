/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import httpStatusCodes from 'http-status-codes';

export const handleGenericError = (err: any, res: Response) => {
  res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  });
};
