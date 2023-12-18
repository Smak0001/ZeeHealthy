<script>
	import { onMount } from "svelte";

	/**
	 * @type {any[]}
	 */

	let data = [];

	async function fetchData() {
		const response = await fetch("http://localhost:3002/users");
		data = await response.json();
	}

	onMount(async () => {
		fetchData();
	});

	/**
	 *
	 * @param {any} id
	 */
	async function handleDelete(id) {
		try {
			const response = await fetch(`http://localhost:3002/users/${id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				// Row deleted successfully, update your data
				await fetchData();
			} else {
				console.error("Error deleting row:", response.statusText);
			}
		} catch (error) {
			// @ts-ignore
			console.error("Error deleting row:", error.message);
		}
	}

	/**
	 *
	 * @param {any} id
	 */
	function handleUpdate(id) {
		window.location.href = `/Admin/users/update/${id}`;
		console.log("user updated");
	}
	function handleBLacklist() {
		console.log("user Blacklist");
	}
</script>

<div class="object-center">
	<div>
		<h2>Users</h2>
		{#each data as user}
			<div class="object-center">
				<p>user name: {user.full_name}</p>
				<p>User ID: {user.id}</p>
				<p>User email: {user.email}</p>
				<p>User password: {user.password}</p>
				<button on:click={() => handleDelete(user.id)}>Delete</button>
				<button on:click={() => handleUpdate(user.id)}>Update</button>
				<button on:click={() => handleBLacklist()}>Blacklist</button>
			</div>
		{/each}
	</div>
</div>

<style>
	button {
		background-color: blue;
		color: white;
	}

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
