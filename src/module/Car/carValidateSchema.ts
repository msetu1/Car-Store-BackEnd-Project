import { z } from 'zod';
const currentYear = new Date().getFullYear();
export const carValidateSchema = z.object({
  brand: z
    .string()
    .min(2, { message: 'Brand must have at least 2 characters' })
    .max(50, { message: 'Brand must have at most 50 characters' }),
  model: z
    .string()
    .min(1, { message: 'Model must have at least 1 character' })
    .max(50, { message: 'Model must have at most 50 characters' }),
  year: z
    .number()
    .int({ message: 'Year must be an integer' })
    .gte(1886, { message: 'Year cannot be earlier than 1886' })
    .lte(currentYear, { message: 'Year cannot be in the future' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    errorMap: () => ({
      message:
        'Invalid category. Allowed values are Sedan, SUV, Truck, Coupe, Convertible.',
    }),
  }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' })
    .max(500, { message: 'Description must not exceed 500 characters' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(0, { message: 'Quantity cannot be negative' }),
  inStock: z.boolean({ required_error: 'InStock is required' }),
});
