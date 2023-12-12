import express from 'express';
import cors from 'cors';
import path from 'path';
import productRouter from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Use product routes
app.use('/', productRouter);

// // Serve static files from the 'public' directory
// app.use(express.static(path.resolve('public')));

// // Catch-all route to index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve('public/index.html'));
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});