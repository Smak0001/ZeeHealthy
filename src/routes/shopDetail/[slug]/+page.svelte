<script>
	import { onMount } from "svelte";
	/**
	 * @type {any[]}
	 */
	export let data;

	/**
	 * @type {any[]}
	 */
	let products = [];

	const fetchProducts = async () => {
		try {
			const response = await fetch("http://localhost:3001/api/products");
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

	function loadProduct() {
		document.querySelector(".products-container").innerHTML = `
        <div class="product bg-white shadow-lg rounded-lg p-6 transform:scale-105">
            <div>
                <img src=${products[data.slug - 1].pictures} alt=${
									products[data.slug - 1].name
								} class="w-full h-48 object-cover mb-2 rounded-lg shadow-md"/>
                <div>
                    <h3 class="text-2xl font-semibold mb-2 text-gray-800">${
											products[data.slug - 1].name
										}</h3>
                    <p>Type: ${products[data.slug - 1].type}</p>
                    <p>Weight: ${products[data.slug - 1].weight} kg</p>
                    <p>Price: €${Number(products[data.slug - 1].price).toFixed(
											2,
										)}</p>
                    <p>kcal: ${products[data.slug - 1].kcal}</p>
                    <p>Nutri-Score: ${products[data.slug - 1].NutriScore}</p>
                    <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
	}

	onMount(() => {
		fetchProducts();
		setTimeout(() => {
			loadProduct();
		}, 500);
	});
</script>

<div
	class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
>
	<div class="ml-4">
		<h1 class="text-4xl font-bold">ZeeHealthy</h1>
	</div>
	<h1 class="text-2xl font-bold">Shop</h1>
	<nav class="flex justify-end items-center mr-4">
		<a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
		<a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
		<a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
		<a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
		<a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a>
		<a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>

		<!-- <button class="text-white hover:text-gray-300" on:click={handleLogout}
    >Logout</button> -->
	</nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="products-container grid mt-8 p-4"></div>
