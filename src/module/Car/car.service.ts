import { ICar } from './car.interface';
import { Car } from './car.model';

// create Car Service section
const createCar = async (playLoad: ICar): Promise<ICar> => {
  const result = await Car.create(playLoad);
  return result;
};

// all Cars
const allCars = async () => {
  const result = await Car.find();
  return result;
};

// Single Car
const singleCar = async (id: string) => {
  const result = await Car.findById(id);
  return result;
};

// update Car
const updateCar = async (id: string, data: ICar) => {
  const result = await Car.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete Car
const deleteCar = async (id: string) => {
  const result = await Car.findByIdAndDelete(id);
  return result;
};

export const CarService = {
  createCar,
  allCars,
  singleCar,
  updateCar,
  deleteCar,
};
