import express from 'express';
import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const router = express.Router();

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);

router.get('/', async (req, res) => {
  const { data } = await supabase.from("drivers").select();

  res.send(data);
});

router.get('/:id', async (req, res) => {
  const driver = (await supabase.from("drivers").select().match({ id: req.params.id })).data || [];

  res.send(driver)
});

router.get('/:id/orders', async (req, res) => {
  const orders = (await supabase.from("orders").select()).data || [];

  res.send(orders);
});

router.post('/:id/orders/:order_id/accept', async (req, res) => {
  const driver = (await supabase.from("drivers").select().match({ id: req.params.id })).data;
  const acceptedOrders = driver[0].orders.accepted;
  const declinedOrders = driver[0].orders.declined;
  const ORDER_ID = +req.params.order_id;

  const { data, error } = await supabase
    .from('drivers')
    .update({
      orders: {
        accepted: (() => {
          if (!acceptedOrders.includes(ORDER_ID)) {
            return [...acceptedOrders, ORDER_ID];
          } return acceptedOrders;
        })(), declined: [...declinedOrders.filter(ID => ID !== ORDER_ID)]
      }
    })
    .eq('id', req.params.id)
    .select();

  res.send(data)
});

router.post('/:id/orders/:order_id/decline', async (req, res) => {
  const driver = (await supabase.from("drivers").select().match({ id: req.params.id })).data;
  const acceptedOrders = driver[0].orders.accepted;
  const declinedOrders = driver[0].orders.declined;
  const ORDER_ID = +req.params.order_id;

  const { data, error } = await supabase
    .from('drivers')
    .update({
      orders: {
        accepted: [...acceptedOrders.filter(ID => ID !== ORDER_ID)], declined: (() => {
          if (!declinedOrders.includes(ORDER_ID)) {
            return [...declinedOrders, ORDER_ID];
          } return declinedOrders;
        })()
      }
    })
    .eq('id', req.params.id)
    .select();

  res.send(data)
});

export default router;