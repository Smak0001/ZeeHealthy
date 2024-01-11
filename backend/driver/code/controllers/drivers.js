import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);

async function getAllDrivers(req, res) {
  const { data, error } = await supabase
    .from("drivers")
    .select();

  res.send(data);
}

async function getDriverById(req, res) {
  const { data, error } = await supabase
    .from("drivers")
    .select()
    .match({ id: req.params.id });

  res.send(data);
}

async function getDriverOrders(req, res) {
  const { data, error } = await supabase
    .from("orders")
    .select();

  res.send(data);
}

async function acceptOrder(req, res) {
  const driver = (await supabase.from("drivers")
    .select()
    .match({ id: req.params.id })).data;

  const acceptedOrders = driver[0].orders.accepted;
  const declinedOrders = driver[0].orders.declined;
  const ORDER_ID = +req.params.order_id;

  await supabase
  .from('orders')
  .update({ driver_id: driver[0].id})
  .eq('id', ORDER_ID)

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
}

async function declineOrder(req, res) {
  const driver = (await supabase
    .from("drivers")
    .select()
    .match({ id: req.params.id })).data;

  const acceptedOrders = driver[0].orders.accepted;
  const declinedOrders = driver[0].orders.declined;
  const ORDER_ID = +req.params.order_id;

  await supabase
  .from('orders')
  .update({ driver_id: null})
  .eq('id', ORDER_ID)

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
}

export { getAllDrivers, getDriverById, getDriverOrders, acceptOrder, declineOrder }