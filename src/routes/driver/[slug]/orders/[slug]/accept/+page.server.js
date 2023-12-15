import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const data = fetch(`http://localhost:3030/orders/${params.slug}/accept`, { method: 'POST' }).then(data => data.text());

  // throw redirect(302, './')
};