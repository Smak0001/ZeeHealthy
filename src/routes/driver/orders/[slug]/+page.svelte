<script>
	import { orders } from "../+page.svelte";

	const { name, destination, products } =
		orders[window.location.href.split("/").at(-1)];
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="header-container">
	<h1 class="header">ZeeHealthy</h1>
	<nav>
		<a class="navlink" href="/">Home</a>
		<a class="navlink" href="/shop">Shop</a>
		<a class="navlink" href="/chat">Chat</a>
	</nav>
</div>
<div class="content-container">
	<div class="back"><a href="/driver/orders">←Back to orders</a></div>
	<h1 class="content-header">Order</h1>
	<div class="content">
		<div class="order">
			<p>Name: {name}</p>
			<p>Destination: {destination}</p>
			<p>Products:</p>
			<ul>
				{#each products as { productName, quantity }}
					<li>{`${productName} -- ${quantity}`}</li>
				{/each}
			</ul>
			<div class="order-button-container">
				<button class="order-button" style="background: rgb(225,15,15);"
					>Decline</button
				>
				<button class="order-button" style="background: rgb(25,155,75)"
					>Accept</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--primary-color: #012d78;
		--secondary-color: #012d787a;
		--text-color: #deeade;
	}

	.header-container {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 0 20px 0 20px;
	}

	.header {
		color: var(--text-color);
		font-family: Tahoma;
	}

	.navlink {
		color: var(--text-color);
		font-family: Tahoma;
		text-decoration: none;
		margin: 20px;
	}

	.content-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
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

	.order-button-container {
		margin-top: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.order-button {
		cursor: pointer;
		background: var(--secondary-color);
		color: var(--text-color);
		font-family: Tahoma;
		font-size: 1.25em;
		padding: 10px;
		border: none;
		border-radius: 15px;
	}
</style>
