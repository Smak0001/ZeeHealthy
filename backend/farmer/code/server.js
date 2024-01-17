import express from 'express';
import cors from 'cors';
import router from './adapters/routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());

// Use product routes
app.use('/', router);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});