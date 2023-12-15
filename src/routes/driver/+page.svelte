<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let newOrders = true;
  let acceptedOrders = false;
  let declinedOrders = false;
</script>

<h1 class="content-header">Orders</h1>
<div class="content-filter">
  <input
    type="checkbox"
    name="order"
    id="new-orders"
    bind:checked={newOrders}
  />
  <label for="new-orders">New orders</label>
  <input
    type="checkbox"
    name="order"
    id="accepted-orders"
    bind:checked={acceptedOrders}
  />
  <label for="accepted-orders">Accepted orders</label>
  <input
    type="checkbox"
    name="order"
    id="declined-orders"
    bind:checked={declinedOrders}
  />
  <label for="declined-orders">Declined orders</label>
</div>
<div class="content">
  {#if newOrders}
    {#each data.newOrders as { id, destination, products }}
      <div class="order">
        <p>Destination: {destination}</p>
        <p>Products:</p>
        <ul>
          {#each products.products as { product_name, quantity }}
            <li>{`${product_name} -- ${quantity}`}</li>
          {/each}
        </ul>
        <div class="order-button-container">
          <a href="driver/{id}"
            ><button class="order-button">Read more...</button></a
          >
        </div>
      </div>
    {/each}
  {/if}
  {#if acceptedOrders}
    {#each data.acceptedOrders as { id, destination, products }}
      <div class="order accepted">
        <p>Destination: {destination}</p>
        <p>Products:</p>
        <ul>
          {#each products.products as { product_name, quantity }}
            <li>{`${product_name} -- ${quantity}`}</li>
          {/each}
        </ul>
        <div class="order-button-container">
          <a href="driver/{id}"
            ><button class="order-button">Read more...</button></a
          >
        </div>
      </div>
    {/each}
  {/if}
  {#if declinedOrders}
    {#each data.declinedOrders as { id, destination, products }}
      <div class="order declined">
        <p>Destination: {destination}</p>
        <p>Products:</p>
        <ul>
          {#each products.products as { product_name, quantity }}
            <li>{`${product_name} -- ${quantity}`}</li>
          {/each}
        </ul>
        <div class="order-button-container">
          <a href="driver/{id}"
            ><button class="order-button">Read more...</button></a
          >
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .content-header {
    color: var(--primary-color);
    font-size: 2.5em;
  }

  .content-filter {
    color: var(--primary-color);
    font-family: Tahoma;
    margin-bottom: 20px;
  }

  .order {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 30%;
    max-width: 50%;
    background: var(--secondary-color);
    color: var(--text-color);
    font-family: Tahoma;
    border: 5px groove var(--primary-color);
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
  }

  .declined {
    background: grey;
    border: 5px groove #333;
  }

  .declined button {
    background: #333;
  }

  .declined button:hover {
    background: #222;
  }

  .accepted {
    border: 5px groove #1da90d;
    background: #24c424;
  }

  .accepted button {
    background: #1da90d;
  }

  .accepted button:hover {
    background: #116d07;
  }

  .order-button-container {
    align-self: center;
  }

  .order-button {
    cursor: pointer;
    background: var(--secondary-color);
    color: var(--text-color);
    font-family: Tahoma;
    padding: 10px;
    border: none;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
  }

  .order-button:hover {
    background: var(--primary-color);
    transform: scale(1.1);
  }
</style>
