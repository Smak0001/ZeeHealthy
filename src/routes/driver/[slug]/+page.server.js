import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const order = await fetch(`http://localhost:3003/orders/${params.slug}`).then(res => res.json());

  return {
    order: order[0] || []
  }
}