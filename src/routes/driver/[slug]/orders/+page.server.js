import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const driver = (await supabase.from("drivers").select().match({ id: Number(params.slug) })).data || [];
  const declinedOrdersID = new Set(Object.values(driver[0]['declined_orders'] || {}).map(Number));
  const acceptedOrdersID = new Set(Object.values(driver[0]['accepted_orders'] || {}).map(Number));

  if (driver === null || driver.length === 0) {
    throw error(404, 'Try again! Driver not found!');
  }

  const orders = (await supabase.from("orders").select()).data || [];

  const newOrders = orders.filter(order => !declinedOrdersID.has(order.id) && !acceptedOrdersID.has(order.id));
  const acceptedOrders = orders.filter(order => acceptedOrdersID.has(order.id));
  const declinedOrders = orders.filter(order => declinedOrdersID.has(order.id));

  return {
    newOrders: newOrders,
    acceptedOrders: acceptedOrders,
    declinedOrders: declinedOrders
  };
}