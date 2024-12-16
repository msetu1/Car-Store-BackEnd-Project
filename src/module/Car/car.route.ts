import express, { NextFunction, Request, Response } from 'express';
import { CarController } from './car.controller';
import { carValidateSchema } from './carValidateSchema';
const router = express.Router();

//create car
router.post(
  '/create-car',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedBody = await carValidateSchema.parseAsync(req.body);
      req.body = parsedBody;
      next();
    } catch (error) {
      next(error);
    }
  },
  CarController.createCar,
);

// single car
router.get('/:id', CarController.singleCar);

// update car
router.put('/:id', CarController.updateCar);

// delete car
router.delete('/:id', CarController.deleteCar);

// All cars
router.get('/', CarController.allCars);

export const CarRoute = router;
