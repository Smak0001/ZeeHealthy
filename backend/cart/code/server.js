import express from 'express';
import cors from 'cors';
import path from 'path';
import productRouter from './routes/shoppingCartRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Use product routes
app.use('/', productRouter);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});