import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoute } from './module/Car/car.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/cars', CarRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

export default app;
