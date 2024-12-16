/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { handleZodError } from '../helpers/handleZodError';
import mongoose from 'mongoose';
import { handleCastError } from '../helpers/handleCastError';
import { handleValidationError } from '../helpers/handleValidationError';
import { handleDuplicateError } from '../helpers/handleDuplicateError';
import { handleGenericError } from '../helpers/handleGenericError';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Zod error
  if (err.brand && err.brand === 'ZodError') {
    handleZodError(req, res);
  }

  // cast error
  else if (err instanceof mongoose.Error.CastError) {
    handleCastError(req, res);
  }
  // validate error
  else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(req, res);
  }
  // duplicate error
  else if (err.code && err.code === 11000) {
    handleDuplicateError(req, res);
  }
  // generic error
  else if (err instanceof Error) {
    handleGenericError(req, res);
  }
};
