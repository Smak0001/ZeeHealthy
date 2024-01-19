import express from 'express';
import * as productController from '../controller/productController.js';

const router = express.Router();

// Route to get all products
router.get('/api/products', productController.getAllProducts);

// Route to get a product by ID
router.get('/api/products/:id', productController.getProductById);

// Route to update a product
router.put('/api/products/:id', productController.updateProduct);

export default router;
