<script>
	import { onMount } from "svelte";
	// import { fetchUser } from "../../utils/auth";
	// import { goto } from "$app/navigation";
	// import { supabase } from "../../supabase.js";
	import Chat from './Scheduler.svelte';
	import BouncingDots from './BouncingDots.svelte'

	// let isLoggedIn = false;

	// const handleLogout = async () => {
	// 	try {
	// 		const { error } = await supabase.auth.signOut();
	// 		if (error) throw error;
	// 		console.log("Logged out");
	// 		goto("/login");
	// 	} catch (error) {
	// 		// @ts-ignore
	// 		console.error("Logout error:", error.message);
	// 	}
	// };

	// onMount(async () => {
	// 	const user = await fetchUser();
	// 	if (user) {
	// 		// console.log(user);
	// 		isLoggedIn = true;
	// 	}
	// });
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
	<h1 class="text-2xl font-bold">Chat</h1>
	<nav class="flex justify-end items-center mr-4">
		<a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
		<a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
		<a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
		<a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
		<!-- <button class="text-white hover:text-gray-300" on:click={handleLogout}>Logout</button> -->
	</nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>
<main>
	<Chat />
</main> 