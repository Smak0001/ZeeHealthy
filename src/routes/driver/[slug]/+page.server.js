import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals: {getSession} }) {
  const session = await getSession();
  const USER_ID = session?.user.id;
  
  const data = await fetch('http://localhost:3003/drivers');
  const drivers = await data.json();
  
  const driver = drivers.find(driver => driver.id === USER_ID);
  
  if (driver === undefined) {
    throw error(403, 'You need to register as a driver first!');
  }

  const order = await fetch(`http://localhost:3003/drivers/${USER_ID}/orders/${params.slug}`).then(res => res.json());
  // Object.values(driver.orders).flat()
  if ([...driver.orders.accepted, ...driver.orders.declined, ...driver.orders.completed].includes(order[0].id)) {
    throw error(403, "You do not have access here!");
  }

  return {
    order: order[0] || []
  }
}