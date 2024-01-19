import express from 'express';
import * as productController from '../controller/productController.js';

const router = express.Router();

// Route to get all products
router.get('/api/products', productController.getAllProducts);

// Route to get a product by ID
router.get('/api/products/:id', productController.getProductById);

// Route to add a new product
router.post('/api/products', productController.addProduct);

export default router;
