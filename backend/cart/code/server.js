import express from 'express';
import cors from 'cors';
import productRouter from './routes/shoppingCartRoutes.js';

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use product routes
app.use('/', productRouter);
app.use((req, res, next) => {
  try {
    // set header before response
    res.status(404).send("Sorry can't find that!");
  } catch (err) {
    next(err);
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});