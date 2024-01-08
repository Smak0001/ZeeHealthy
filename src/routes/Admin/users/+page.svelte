<script>
	import { onMount } from "svelte";

	/**
	 * @type {any[]}
	 */

	let data = [];

	async function fetchData() {
		const response = await fetch("http://localhost:1914/users");
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
			const response = await fetch(`http://localhost:1914/users/${id}`, {
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
			<div class="object-center" >
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

	button {
		background-color: var(--primary-color);
		color: var(--text-color);
		border: solid var(--text-color);
		border-radius: 20px;
		cursor: pointer;
	}

</style>
