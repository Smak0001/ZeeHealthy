import express from 'express';
import * as ShoppingCartController from '../controller/shoppingCartController.js';

const router = express.Router();

// Route to get all products
router.get('/api/shoppingCart', ShoppingCartController.getCart);

// Route to get a product by ID
router.get('/api/shoppingCart/:id', ShoppingCartController.getCartById);

// Route to add a new product
router.post('/api/shoppingCart/cart', ShoppingCartController.upsertNewProduct)

export default router;
