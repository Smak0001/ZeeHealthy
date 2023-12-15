import express from 'express';
import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const router = express.Router();

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);

router.post('/', async (req, res) => {
  const { data } = await supabase.from("drivers").select();

  res.send(data);
});

router.post('/:id', async (req, res) => {
  const driver = (await supabase.from("drivers").select().match({ id: req.params.id })).data || [];

  res.send(driver)
});

router.post('/:id/orders', async (req, res) => {
  const orders = (await supabase.from("orders").select()).data || [];

  res.send(orders);
});

router.post('/:id/orders/:order_id', async (req, res) => {
  const order = (await supabase.from("orders").select().match({ id: req.paramss.order_id })).data || [];
});

export default router;