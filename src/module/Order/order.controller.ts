import { Car } from '../Car/car.model';
import catchAsync from '../utils/catchAsync';
import { Order } from './order.model';
import { OrderService } from './order.servec';

const createOrder = catchAsync(async (req, res) => {
  const { email, car, quantity, totalPrice } = req.body;
  const existingOrder = await Car.findById(car);

  if (!existingOrder) {
    throw new Error('Car not fount');
  }

  if (existingOrder.quantity < quantity) {
    throw new Error('insufficient stock');
  }

  const newOrder = { email, car, quantity, totalPrice };
  const orders = await OrderService.createOrder(newOrder);

  existingOrder.quantity -= quantity;

  if (existingOrder.quantity === 0) {
    existingOrder.inStock = false;
  }
  await existingOrder.save();

  res.status(200).json({
    success: true,
    message: 'Order created successfully',
    data: orders,
  });
});

const calculateRevenue = catchAsync(async (req, res) => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        amount: { $sum: '$totalPrice' },
      },
    },
    { $project: { amount: 1 } },
  ]);

  res.status(200).json({
    success: true,
    message: 'Revenue calculated successfully',
    data: { totalRevenue: revenue[0].amount },
  });
});

export const OrderController = {
  createOrder,
  calculateRevenue,
};
