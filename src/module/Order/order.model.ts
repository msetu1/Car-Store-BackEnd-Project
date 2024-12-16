import { Schema } from 'mongoose';
import { IOrder } from './order.interface';
import { model } from 'mongoose';

const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  car: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

export const Order = model<IOrder>('Order', orderSchema);
