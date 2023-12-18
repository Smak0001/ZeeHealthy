import express from 'express';
import { getAllProducts, getProductById } from '../controller/productController.js';

const router = express.Router();

// Route to get all products
router.get('/api/products', getAllProducts);

// Route to get a product by ID
router.get('/api/products/:id', getProductById);

export default router;
