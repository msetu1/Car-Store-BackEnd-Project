import express, { NextFunction, Request, Response } from 'express';
import { CarController } from './car.controller';
const router = express.Router();

//create car
router.post('/create-car', CarController.createCar);

// single car
router.get('/:id', CarController.singleCar);

// update car
router.put('/:id', CarController.updateCar);

// delete car
router.delete('/:id', CarController.deleteCar);

// All cars
router.get('/', CarController.allCars);

export const CarRoute = router;
