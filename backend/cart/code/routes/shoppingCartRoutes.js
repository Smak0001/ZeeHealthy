import express from 'express';
import { getCart, getCartById } from '../controller/shoppingCartController.js';

const router = express.Router();

// Route to get all products
router.get('/api/shoppingCart', getCart);

// Route to get a product by ID
router.get('/api/shoppingCart/:id', getCartById);

export default router;
