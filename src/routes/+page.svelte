<script>
	import { goto } from "$app/navigation";
	import { supabase } from "../supabase.js";
	import { onMount } from "svelte";
	import { fetchUser } from "../utils/auth";

	let isLoggedIn = false;

	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			console.log("Logged out");
			goto("/login");
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	onMount(async () => {
		const user = await fetchUser();
		if (user) {
			// console.log(user);
			isLoggedIn = true;
		}
	});
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div
	class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
>
	<div class="ml-4">
		<h1 class="text-4xl font-bold">ZeeHealthy</h1>
	</div>
	<h1 class="text-2xl font-bold">Home</h1>
	<nav class="flex justify-end items-center mr-4">
		<a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
		<a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
		<a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
		<a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
		<button class="text-white hover:text-gray-300" on:click={handleLogout}
			>Logout</button
		>
	</nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="map">
	<iframe
		title="map"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.4005287721525!2d3.6095234738859636!3d51.49455406366892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c490d0a317d04d%3A0xe74a28385302684c!2sHZ%20University%20of%20Applied%20Sciences!5e0!3m2!1sen!2snl!4v1700571979566!5m2!1sen!2snl"
		width="1260"
		height="600"
		style="border:1;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</div>

<style>
	.map {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	iframe {
		border-style: solid;
		border-color: var(--primary-color);
		border-width: 5px;
		border-radius: 20px;
	}
</style>
