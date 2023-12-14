<!-- <script>
	import { goto } from "$app/navigation";
	import { supabase } from "../supabase.js";
	import { onMount } from "svelte";
	import { fetchUser } from "../utils/auth";

	let isLoggedIn = false;

	const hangleLogout = async () => {
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
			console.log(user);
			isLoggedIn = true;
		}
	});
</script> -->

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="nav-container">
	<h1 class="logo">ZeeHealthy</h1>
	<h1 class="logo">Chat</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/shop">Shop</a>
		<a class="active" href="/chat">Chat</a>
		<!-- <button on:click={hangleLogout}>Logout</button> -->
	</nav>
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
</style>
