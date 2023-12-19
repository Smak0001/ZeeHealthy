import express from 'express';
import * as driverController from '../controllers/drivers.js';

const router = express.Router();

router.get('/', driverController.getAllDrivers);

router.get('/:id', driverController.getDriverById);

router.get('/:id/orders', driverController.getDriverOrders);

router.post('/:id/orders/:order_id/accept', driverController.acceptOrder);

router.post('/:id/orders/:order_id/decline', driverController.declineOrder);

export default router;