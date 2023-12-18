import express from 'express';
import { getAllDrivers, getDriverById, getDriverOrders, acceptOrder, declineOrder } from '../controllers/drivers.js';

const router = express.Router();

router.get('/', getAllDrivers);

router.get('/:id', getDriverById);

router.get('/:id/orders', getDriverOrders);

router.post('/:id/orders/:order_id/accept', acceptOrder);

router.post('/:id/orders/:order_id/decline', declineOrder);

export default router;