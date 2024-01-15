<script>
	export let data;

	const { id, created_at, destination, products } = data.order;
	const date = new Date(created_at).toLocaleString();
</script>

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
		<a href="{id}/accept" data-sveltekit-preload-data="tap">
			<button class="order-button" type="submit">Accept</button>
		</a>
		<a href="{id}/decline" data-sveltekit-preload-data="tap">
			<button class="order-button button-red">Decline</button>
		</a>
	</div>
</div>

<style>
	.content-header {
		color: var(--primary-color);
		font-size: 2.5em;
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
</style>
