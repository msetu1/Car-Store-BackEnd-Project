import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoute } from './module/Car/car.route';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { notFound } from './middlewares/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/cars', CarRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

// error handling
app.use(globalErrorHandler);

// not found error
app.use(notFound);
export default app;
