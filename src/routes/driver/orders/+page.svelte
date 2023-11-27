<script context="module">
	export const orders = [
		{
			name: "Luc",
			destination: "APV",
			products: [
				{ productName: "Potato", quantity: "5kg" },
				{ productName: "Tomato", quantity: "1kg" },
				{ productName: "Apple", quantity: "1.5kg" },
			],
		},
		{
			name: "Tijn",
			destination: "Kanaalweg",
			products: [
				{ productName: "Tomato", quantity: "2kg" },
				{ productName: "Cucumber", quantity: "1kg" },
				{ productName: "Onion", quantity: "1kg" },
			],
		},
		{
			name: "Luc",
			destination: "APV",
			products: [
				{ productName: "Potato", quantity: "5kg" },
				{ productName: "Tomato", quantity: "1kg" },
				{ productName: "Apple", quantity: "1.5kg" },
			],
		},
		{
			name: "Tijn",
			destination: "Kanaalweg",
			products: [
				{ productName: "Tomato", quantity: "2kg" },
				{ productName: "Cucumber", quantity: "1kg" },
				{ productName: "Onion", quantity: "1kg" },
			],
		},
		{
			name: "Luc",
			destination: "APV",
			products: [
				{ productName: "Potato", quantity: "5kg" },
				{ productName: "Tomato", quantity: "1kg" },
				{ productName: "Apple", quantity: "1.5kg" },
			],
		},
		{
			name: "Tijn",
			destination: "Kanaalweg",
			products: [
				{ productName: "Tomato", quantity: "2kg" },
				{ productName: "Cucumber", quantity: "1kg" },
				{ productName: "Onion", quantity: "1kg" },
			],
		},
		{
			name: "Luc",
			destination: "APV",
			products: [
				{ productName: "Potato", quantity: "5kg" },
				{ productName: "Tomato", quantity: "1kg" },
				{ productName: "Apple", quantity: "1.5kg" },
			],
		},
	];
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
		<a class="" href="/">Home</a>
		<a href="/shop">Shop</a>
		<a href="/chat">Chat</a>
	</nav>
</div>
<div class="content-container">
	<h1 class="content-header">Orders</h1>
	<div class="content">
		{#each orders as { name, destination, products }, i}
			<!-- {Object.keys(order).map((key) => `${key}: ${order[key]}`)} -->
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
					<a href="orders/{i}"
						><button class="order-button">Read more...</button></a
					>
				</div>
			</div>
		{/each}
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

	a {
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
	}
</style>
