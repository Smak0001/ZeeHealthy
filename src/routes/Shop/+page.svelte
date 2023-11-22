<script>
	// @ts-nocheck

	import { onMount } from "svelte";

	/**
	 * @type {any[]}
	 */
	let productsInRows = [];

	let products = [
		{ id: 1, name: "Product 1", price: 20 },
		{ id: 2, name: "Product 2", price: 30 },
		{ id: 3, name: "Product 3", price: 25 },
		{ id: 4, name: "Product 4", price: 15 },
		{ id: 5, name: "Product 5", price: 40 },
		{ id: 6, name: "Product 6", price: 18 },
	];

	const organizeProducts = () => {
		while (products.length > 0) {
			productsInRows.push(products.splice(0, 2));
		}
	};

	onMount(() => {
		organizeProducts();
	});

	const goToProductInfo = (/** @type {number} */ productId) => {
		// TODO change this to actual functionality.
		console.log("Navigating to product info for product ID:", productId);
	};
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="nav-container">
	<h1 class="logo">ZeeHealthy</h1>
	<div class="content-container">
		<div class="content">
			<div class="logo">Shop</div>
		</div>
	</div>
	<nav>
		<a href="/">Home</a>
		<a class="active" href="/Shop">Shop</a>
		<a href="/Chat">Chat</a>
	</nav>
</div>

{#each products as product}
	<div
		class="product"
		on:click={() => goToProductInfo(product.id)}
		role="button"
		tabindex="0"
	>
		<h3>{product.name}</h3>
		<p>Price: ${product.price}</p>
	</div>
{/each}

<style>
	:root {
		--primary-color: #012d78;
		--secondary-color: #012d787a;
		--text-color: #deeade;
	}

	.nav-container {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 0 20px 0 20px;
	}

	.logo {
		color: var(--text-color);
		font-family: Tahoma;
	}

	a {
		color: var(--text-color);
		font-family: Tahoma;
		text-decoration: none;
		margin: 20px;
	}

	.active {
		text-decoration: underline;
	}

	.content {
		display: flex;
		justify-content: center;
	}

	.product {
		border: 3px solid #012d78;
		padding: 20px;
		margin: 10px;
		width: 45%;
		display: inline-block;
		vertical-align: top;
		border-radius: 10px;
	}
</style>
