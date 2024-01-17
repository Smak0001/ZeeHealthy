import express from 'express';
import * as usersController from '../controller/usersController.js';

const router = express.Router();

router.get('/users', usersController.getAlluserData)
router.delete('/users/:id', usersController.deleteUser)
router.get('/users/:id', usersController.getUserId)
router.put('/users/update/:id', usersController.updateUser)


export default router       