/* eslint-disable @typescript-eslint/no-explicit-any */

import { Response } from 'express';
import httpStatusCodes from 'http-status-codes';
export const handleValidationError = (err: any, res: Response) => {
  const issues = Object.values(err.errors).map((item: any) => {
    return {
      name: item.name,
      path: item.path,
      message: item.message,
    };
  });

  res.status(httpStatusCodes.BAD_REQUEST).json({
    success: false,
    message: err.message,
    issues: issues,
    error: err,
  });
};
