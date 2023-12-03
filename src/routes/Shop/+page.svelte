<script>
	import { onMount } from "svelte";

	/**
	 * @type {any[]}
	 */
	let products = [];

	const fetchProducts = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/products");
			if (response.ok) {
				products = await response.json();
				console.log("Products:", products);
			} else {
				console.error("Failed to fetch products");
			}
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	onMount(() => {
		fetchProducts();
	});

	const goToProductInfo = (product) => {
		console.log("Navigating to product info for product ID:", product);
		navigate(`/product/${product.id}`);
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
		<a class="active" href="/shop">Shop</a>
		<a href="/chat">Chat</a>
	</nav>
</div>

<div class="products-container">
	{#each products as product}
		<div
			class="product"
			on:click={() => goToProductInfo(product)}
			on:keydown={(event) => {
				if (event.key === "Enter") {
					goToProductInfo(product);
				}
			}}
			role="button"
			tabindex="0"
		>
			<h3>{product.name}</h3>
			<p>Type: {product.type}</p>
			<p>Weight: {product.weight} kg</p>
			<p>Price: €{Number(product.price).toFixed(2)}</p>
		</div>
	{/each}
</div>

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

	.products-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
