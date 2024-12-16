import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import catchAsync from './module/utils/catchAsync';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use();
export default app;
