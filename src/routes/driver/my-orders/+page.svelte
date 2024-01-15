<script>
/** @type {import('./$types').PageData} */
  export let data;

  let completedOrders = false;
</script>
<div class="back"><a href="/driver">←Back to new orders</a></div>

<h1 class="content-header">My orders</h1>
<div class="content-filter">
  <input
    type="checkbox"
    name="order"
    id="declined-orders"
    bind:checked={completedOrders}
  />
  <label for="declined-orders">Show my completed orders</label>
</div>

  {#if completedOrders}
    {#if data.completedOrders.length === 0}
      <p class="mt-12 text-xl text-center" style="color: var(--primary-color)">
      Seems like you have not completed any order yet...
      <br>Explore the <a class="font-bold" href="/driver">new orders</a> and pick your first one!
      </p>
    {/if}

    {#each data.completedOrders as { id, created_at, completed_at, destination, products }}
    <div class="order">
      <h3 class="content-header">Order #{id}</h3>
      <p><span class="font-bold">Destination: </span>{destination}</p>
      <p><span class="font-bold">Order placed: </span>{new Date(created_at).toLocaleString()}</p>
      <p><span class="font-bold">Order completed: </span>{new Date(completed_at).toLocaleString()}</p>
      <p><span class="font-bold">Products:</span></p>
      <ol style="list-style: circle;">
        {#each products as { product, amount, totalPrice }}
          <li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
        {/each}
      </ol>
      <div class="order-button-container flex-col">
        <a href="{id}/delete" class="self-end" data-sveltekit-preload-data="tap">
          <button class="order-button button-red" type="submit">Delete</button>
        </a>
      </div>
    </div>
    {/each}
  {:else}
    {#if data.acceptedOrders.length === 0}
      <p class="mt-12 text-xl text-center" style="color: var(--primary-color)">
      Seems like you have not picked any order yet...
      <br>Explore the <a class="font-bold" href="/driver">new orders</a> and pick one!
      </p>
    {/if}

    {#each data.acceptedOrders as { id, created_at, destination, products }}
      <div class="order">
        <h3 class="content-header">Order #{id}</h3>
        <p><span class="font-bold">Destination: </span>{destination}</p>
        <p><span class="font-bold">Order placed: </span>{new Date(created_at).toLocaleString()}</p>
        <p><span class="font-bold">Products:</span></p>
        <ol style="list-style: circle;">
          {#each products as { product, amount, totalPrice }}
            <li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
          {/each}
        </ol>
        <div class="order-button-container">
          <a href="{id}/complete" data-sveltekit-preload-data="tap">
            <button class="order-button" type="submit">Complete</button>
          </a>
          <a href="{id}/cancel" data-sveltekit-preload-data="tap">
            <button class="order-button button-red">Cancel</button>
          </a>
        </div>
      </div>
    {/each}
  {/if}

<style>
	.content-header {
		color: var(--primary-color);
		font-size: 2em;
    align-self: center;
	}

	.order {
		display: flex;
		justify-content: center;
		flex-direction: column;
		min-width: 40%;
		max-width: 50%;
		background: var(--secondary-color);
		color: var(--primary-color);
		font-family: Tahoma;
		border: 5px groove var(--primary-color);
		margin: 10px;
		padding: 10px;
		border-radius: 15px;
	}

	.order-button-container {
		margin-top: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.order-button {
		cursor: pointer;
		background: #159b64;
		color: var(--text-color);
		font-family: Tahoma;
		font-size: 1.25em;
		padding: 10px;
		border: none;
		border-radius: 15px;
		transition: 0.2s ease-in-out;
	}

	.order-button:hover {
		transform: scale(1.1);
		background: #188b5b;
	}

	.button-red {
		background: #f23535;
	}

	.button-red:hover {
		background: #a32727;
	}

  .back {
    position: absolute;
    left: 20px;
    top: 100px;
  }

  .back a {
    text-decoration: none;
    color: grey;
  }

  a:hover {
    text-decoration: underline;
    color: black
  }
</style>
