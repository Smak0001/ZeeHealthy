<script lang="ts">
	import { onMount } from "svelte";

	let usersData: any = [];

	async function fetchData() {
		const response = await fetch("http://localhost:3004/users");
		usersData = await response.json();
	}

	onMount(async () => {
		await fetchData();
	});

	/**
	 * @param {any} id
	 */
	async function handleDelete(id: any) {
		try {
			const response = await fetch(`http://localhost:3004/users/${id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				await fetchData();
			} else {
				console.error("Error deleting row:", response.statusText);
			}
		} catch (error) {
			console.error("Error deleting row:", error);
		}
	}

	/**
	 *
	 * @param {any} id
	 */
	function handleUpdate(id: any) {
		window.location.href = `/admin/users/update/${id}`;
	}

	function handleBLacklist() {
		console.log("user Blacklist");
	}
</script>

<div
	class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 p-4"
>
	{#each usersData as user}
		<div
			class="bg-white rounded-lg shadow-lg p-4 transform transition duration-500 ease-in-out hover:scale-105"
		>
			<p class="text-lg">
				<span class="font-bold">Name:</span>
				{user.full_name}
			</p>
			<p><span class="font-bold">User ID:</span> {user.id}</p>
			<p><span class="font-bold">User email:</span> {user.email}</p>
			<button
				type="button"
				class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
				on:click={() => handleDelete(user.id)}>Delete</button
			>
			<button
				class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
				on:click={() => handleUpdate(user.id)}>Update</button
			>
			<button
				class="h-10 px-5 m-2 text-white transition-colors duration-150 bg-slate-950 rounded-lg focus:shadow-outline hover:bg-slate-700"
				on:click={() => handleBLacklist()}>Blacklist</button
			>
		</div>
	{/each}
</div>
