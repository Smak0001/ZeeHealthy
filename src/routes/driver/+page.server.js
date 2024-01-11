import { error } from '@sveltejs/kit';

export async function load({ locals: { getSession } }) {
  const session = await getSession();
  const USER_ID = session?.user.id;

  const data = await fetch('http://localhost:3003/drivers');
  const drivers = await data.json();

  const driver = drivers.find(driver => driver.id === USER_ID);

  
  if (driver === undefined) {
    throw error(403, 'You need to register as a driver first!');
  }

  const acceptedOrdersID = new Set(driver.orders.accepted);
  const declinedOrdersID = new Set(driver.orders.declined);

  const orders = await fetch(`http://localhost:3003/drivers/${USER_ID}/orders`).then(res => res.json());
  const newOrders = orders.filter(order => !declinedOrdersID.has(order.id) && !acceptedOrdersID.has(order.id) && order.driver_id === null);
  const acceptedOrders = orders.filter(order => acceptedOrdersID.has(order.id));
  const declinedOrders = orders.filter(order => declinedOrdersID.has(order.id));

  return {
    newOrders: newOrders,
    acceptedOrders: acceptedOrders,
    declinedOrders: declinedOrders
  }
}