import { error, redirect } from '@sveltejs/kit';
import { page } from '$app/stores';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const order = await fetch(`http://localhost:3030/orders/${params.slug}`, { method: 'POST' }).then(res => res.json());

  return {
    order: order[0] || []
  }
}