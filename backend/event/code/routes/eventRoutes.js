import express from 'express';
import * as eventController from '../controller/eventController.js';

const router = express.Router();

// Route to get all event.
router.get('/api/events/', eventController.getAllEventData);
router.post('/api/events/', eventController.createEvent);
router.delete('/api/events/:id', eventController.deleteEvent);

  
export default router;