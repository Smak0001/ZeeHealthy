<!-- Import data to file -->
<script>
	import { onMount } from "svelte";
	import { fetchUser } from "../../../utils/auth";
	import { goto } from "$app/navigation";
	import { supabase } from "../../../supabase.js";

	export let data;

	let isLoggedIn = false;

	const hangleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			goto("/login");
		} catch (error) {
			// @ts-ignore
			console.error("Logout error:", error.message);
		}
	};

	onMount(async () => {
		const user = await fetchUser();
		if (user) {
			isLoggedIn = true;
		}
	});

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
		<div class="product">
		<h3>${products[data.slug - 1].name}</h3>	
		<p>Type: ${products[data.slug - 1].type}</p>
		<p>Weight: ${products[data.slug - 1].weight} kg</p>
		<p>Price: €${Number(products[data.slug - 1].price).toFixed(2)}</p>
		<p>kcal: ${products[data.slug - 1].kcal}</p>
		<p>Nutri-Score: ${products[data.slug - 1].NutriScore}</p>
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

<div class="header-container bg-blue-500 text-white py-4 flex justify-between items-center">
  <div class="ml-4">
    <h1 class="text-4xl font-bold">ZeeHealthy</h1>
  </div>
  <h1 class="text-2xl font-bold">Shop</h1>
  <nav class="flex justify-end items-center mr-4">
    <a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
    <a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
    <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
    <button class="text-white hover:text-gray-300" on:click={hangleLogout}>Logout</button>
  </nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"></div>