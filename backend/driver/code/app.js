import express from 'express';
import cors from 'cors';

import driversRouter from './routes/drivers.js';
import ordersRouter from './routes/orders.js';

const app = express();
const PORT = 3003;

app.use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors());

app.use('/drivers', driversRouter);
app.use('/orders', ordersRouter);

export default app;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
