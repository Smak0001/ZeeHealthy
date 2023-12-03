import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const orders = (await supabase.from("orders").select().match({ id: Number(params.slug) })).data;

  if (orders === null || orders.length === 0) {
    throw error(404, 'Try again! Order not found!');
  }

  return {
    order: orders[0]
  }
}