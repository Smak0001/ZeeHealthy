import express from 'express';
import cors from 'cors';
import  usersRouter from './routes/usersRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Use product routes
app.use('/', usersRouter);

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});