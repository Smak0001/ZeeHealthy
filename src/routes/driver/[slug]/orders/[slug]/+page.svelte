<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { id, created_at, user_name, destination, user_order } = data.order;
	const date = new Date(created_at).toLocaleString();
</script>

<h1 class="content-header">Order #{id}</h1>
<div class="order">
	<p>Name: {user_name}</p>
	<p>Destination: {destination}</p>
	<p>Order placed: {date}</p>
	<p>Products:</p>
	<ul>
		{#each user_order.products as { productName, quantity }}
			<li>{`${productName} -- ${quantity}`}</li>
		{/each}
	</ul>
	<div class="order-button-container">
		<button class="order-button">Accept</button>
		<button class="order-button button-red">Decline</button>
	</div>
</div>

<style>
	.content-header {
		color: var(--primary-color);
		font-size: 2.5em;
	}

	.order {
		display: flex;
		justify-content: center;
		flex-direction: column;
		min-width: 40%;
		max-width: 50%;
		background: var(--secondary-color);
		color: var(--text-color);
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
