import catchAsync from '../utils/catchAsync';
import { CarService } from './car.service';

//create Car Controller section
const createCar = catchAsync(async (req, res) => {
  const result = await CarService.createCar(req.body);
  res.status(200).json({
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});

// all cars
const allCars = catchAsync(async (req, res) => {
  const result = await CarService.allCars();

  res.status(200).json({
    success: true,
    message: 'All Car retrieved successfully',
    data: result,
  });
});

// Single Car
const singleCar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarService.singleCar(id);
  res.status(200).json({
    success: true,
    message: 'Single Car retrieved successfully',
    data: result,
  });
});

// update Car
const updateCar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await CarService.updateCar(id, body);
  res.status(200).json({
    success: true,
    message: ' Car Updated successfully',
    data: result,
  });
});

// delete Car
const deleteCar = catchAsync(async (req, res) => {
  const { id } = req.params;
  await CarService.deleteCar(id);
  res.status(200).json({
    success: true,
    message: 'Car Deleted successfully',
    data: {},
  });
});

export const CarController = {
  createCar,
  allCars,
  singleCar,
  updateCar,
  deleteCar,
};
