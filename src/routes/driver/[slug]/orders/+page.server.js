
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const driver = await fetch(`http://localhost:3030/drivers/${params.slug}`, { method: 'POST' }).then(res => res.json());

  const acceptedOrdersID = new Set((driver[0]['accepted_orders'] || '').split(' '));
  const declinedOrdersID = new Set((driver[0]['declined_orders'] || '').split(' '));

  // if (driver === null || driver.length === 0) {
  //   throw error(404, 'Try again! Driver not found!');
  // }
  const orders = await fetch(`http://localhost:3030/drivers/${params.slug}/orders`, { method: 'POST' }).then(res => res.json());

  const newOrders = orders.filter(order => !declinedOrdersID.has(order.id) && !acceptedOrdersID.has(order.id));
  const acceptedOrders = orders.filter(order => acceptedOrdersID.has(order.id));
  const declinedOrders = orders.filter(order => declinedOrdersID.has(order.id));

  return {
    newOrders: newOrders,
    acceptedOrders: acceptedOrders,
    declinedOrders: declinedOrders
  };
}