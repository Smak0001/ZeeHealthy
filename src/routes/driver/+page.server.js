export async function load({ locals: { getSession } }) {
  const session = await getSession();
  const USER_ID = session?.user.id;

  const data = await fetch('http://localhost:3003/drivers');
  const drivers = await data.json();

  const driver = drivers.find(driver => driver.id === USER_ID);

  const acceptedOrdersID = new Set(driver.orders.accepted);
  const declinedOrdersID = new Set(driver.orders.declined);

  // if (driver === null || driver.length === 0) {
  //   throw error(404, 'Try again! Driver not found!');
  // }

  const orders = await fetch(`http://localhost:3003/drivers/${USER_ID}/orders`).then(res => res.json());
  const newOrders = orders.filter(order => !declinedOrdersID.has(order.id) && !acceptedOrdersID.has(order.id));
  const acceptedOrders = orders.filter(order => acceptedOrdersID.has(order.id));
  const declinedOrders = orders.filter(order => declinedOrdersID.has(order.id));

  return {
    newOrders: newOrders,
    acceptedOrders: acceptedOrders,
    declinedOrders: declinedOrders
  }
}