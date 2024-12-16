import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (playLoad: IOrder): Promise<IOrder> => {
  const result = await Order.create(playLoad);
  return result;
};

export const OrderService = {
  createOrder,
};
