<script>
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
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="header-container">
	<h1 class="header">ZeeHealthy</h1>
	<h1 class="header">Home</h1>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="/shop">Shop</a>
		<a href="/chat">Chat</a>
		<a href="/Farmer">Farmers</a>
		<button on:click={hangleLogout}>Logout</button>
	</nav>
</div>

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

	button {
		background-color: var(--primary-color);
		color: var(--text-color);
		border: solid var(--text-color);
		border-radius: 20px;
		cursor: pointer;
	}

	.active {
		text-decoration: underline;
	}

	.content {
		display: flex;
		justify-content: center;
	}

	.para {
		text-align: center;
		width: 30%;
		font-size: 2em;
		background: var(--secondary-color);
		padding: 30px;
		color: var(--text-color);
		font-family: "Agbalumo";
		margin-bottom: 30px;
		border-radius: 50px;
	}

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
