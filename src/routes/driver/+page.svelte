<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let newOrders = true;
  let declinedOrders = false;
</script>

<h1 class="content-header">New orders</h1>
<a href="/driver/my-orders">
  <button class="order-button">My orders</button>
</a>

{#if data.newOrders.length === 0}
  Sorry, no new orders at the moment...
{/if}

<div class="content">
  {#each data.newOrders as { id, destination, products }}
    <div class="order">
      <p><span class="font-bold">Destination: </span>{destination}</p>
      <p><span class="font-bold">Products:</span></p>
      <ul style="list-style: circle; flex: 1 0 auto; min-height: 30%; max-height: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
        {#each products as { product, amount, totalPrice }}
          <li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
        {/each}
      </ul>
      <div class="order-button-container">
        <a href="driver/{id}"
          ><button class="order-button" data-sveltekit-preload-data="tap">Read more...</button></a
        >
      </div>
    </div>
  {/each}
</div>

<style>
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 60vh;
  }

  .content-header {
    color: var(--primary-color);
    font-size: 2.5em;
  }

  .order {
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 30%;
    max-width: 50%;
    max-height: 30vh;
    background: var(--secondary-color);
    font-family: Tahoma;
    border: 5px groove var(--primary-color);
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
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
