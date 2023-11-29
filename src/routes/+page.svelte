<script>
	import { goto } from "$app/navigation";
	import { onDestroy, onMount } from "svelte";
	import { supabase } from "../supabase.js";

	const hangleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			console.log("Logged out");
			goto("/login");
		} catch (error) {
			// @ts-ignore
			console.error("Logout error:", error.message);
		}
	};
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
		<a class="active" href="/">Home</a>
		<a href="/shop">Shop</a>
		<a href="/chat">Chat</a>
		<button on:click={hangleLogout}>Logout</button>
	</nav>
</div>
<div class="content-container">
	<div class="content">
		<div class="para para-1">Home</div>
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
</style>
