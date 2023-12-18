import express from 'express';
import cors from 'cors';
import path from 'path';
import productRouter from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Use product routes
app.use('/', productRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});