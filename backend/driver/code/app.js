import express from 'express';

import driversRouter from './routes/drivers.js';
import ordersRouter from './routes/orders.js';

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.use('/drivers', driversRouter);
app.use('/orders', ordersRouter);

app.listen(3030);


export default app;
