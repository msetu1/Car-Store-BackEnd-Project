/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import httpStatusCodes from 'http-status-codes';
export const handleZodError = (err: any, res: Response) => {
  const issues = err.issues.map((item: any) => {
    return {
      path: item.path.json(' > '),
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
