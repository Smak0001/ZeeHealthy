import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals: { getSession } }) {
  const session = await getSession();
  const USER_ID = session?.user.id;

  const data = fetch(`http://localhost:3003/drivers/${USER_ID}/orders/${params.slug}/complete`, { method: 'POST' }).then(data => data.text());

  throw redirect(308, '../')
};