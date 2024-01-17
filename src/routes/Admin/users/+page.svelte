<script lang="ts">
	import { onMount } from "svelte";

	//   import { createSearchStore, searchHandler } from "$lib/stores/search";
	//   import { onDestroy, onMount, } from "svelte";
	//   import type { PageData } from './$types';
	//   import { writable } from "svelte/store";
	// export let data: PageData;

	// 	export const createSearchStore = (data:any) => {

	// 		const { subscribe, set , update } = writable({
	// 			data: data,
	// 			filtered: data,
	// 			search: '',
	// 		})

	// 		return {
	// 			subscribe,
	// 			set,
	// 			update,
	// 		}
	// 	};

	// 	type User = {
	// 	  email: any;
	// 	  password: any;
	// 	  full_name: any;
	// 	  id: string;
	// 	};
	// export const searchHandler = (store: { data: any; filtered: any; search: any; }) => {
	// const searchTerm = (store.search || "").toLowerCase();
	// store.filtered = store.data.filter((item: { searchTerm: string; }) => {
	// 	return item.searchTerm?.toLowerCase().includes(searchTerm);
	// });
	// };

	// console.log(data.users)
	// const users: User[] = data.users
	// const searchUser: User[] = users.map((user: User) => ({
	//   ...user,
	//   searchTerms: `${user.id} ${user.full_name} ${user.email} ${user.password}`,
	// }));
	// console.log(searchUser)
	// const searchStore = createSearchStore(searchUser);

	// let unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	// console.log($searchStore.filtered)
	// onDestroy(() => {
	//   unsubscribe();
	// });

	// import { createSearchStore, searchHandler } from "$lib/stores/search";
	// import { onDestroy, onMount } from "svelte";
	// import type { PageData } from './$types';

	// export let data: PageData;

	// // type Users = {
	// // 	id: string;
	// // 	full_name:string;
	// // 	email:stringify;
	// // 	password:string;
	// // }

	// /**
	//  * @type {any[]}
	//  */

	let usersData: any = [];

	async function fetchData() {
		const response = await fetch("http://localhost:3004/users");
		usersData = await response.json();
	}

	onMount(async () => {
		await fetchData(); // Wait for fetchData to complete
		console.log(usersData); // Now it should contain the fetched data
		// orderdList()
	});

	// const searchUser: any[] = data.users.map((user) => ({
	// 	...user,
	// 	searchTerms: `${user.id} ${user.full_name} ${user.email} ${user.password}`,
	// }));
	// const searchStore = createSearchStore(searchUser);

	// const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	// onDestroy(() => {
	// 	unsubscribe();
	// });

	/**
	 *
	 * @param {any} id
	 */
	async function handleDelete(id: any) {
		try {
			const response = await fetch(`http://localhost:3004/users/${id}`, {
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
	function handleUpdate(id: any) {
		window.location.href = `/Admin/users/update/${id}`;
		console.log("user updated");
	}
	function handleBLacklist() {
		console.log("user Blacklist");
	}
</script>

<!-- <div class="container">
	<h1>Search/Filter</h1>
	<input type="search" placeholder="Search..." bind:value={$searchStore.search} />
</div>
<pre>{JSON.stringify($searchStore.filtered, null, 2)}</pre>
<div class="product-grid">
	{#each $searchStore.filtered as user}
		<div class="product">
			<h2>{user.full_name}</h2>
			<p>{user.id}</p>
			<p>{user.email}</p>
			<p>{user.password}</p>
		</div>
	{/each}
</div> -->
<!-- <div class="container">
	<h1>Search/filter</h1>
	<input
		type="search"
		placeholder="Search..."
		bind:value={$searchStore.search}
	/>
	<pre>{JSON.stringify($searchStore.filtered, null, 2)}</pre>
</div> -->

<div
	class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 p-4"
>
	{#each usersData as user}
		<div
			class="bg-white rounded-lg shadow-lg p-4 transform transition duration-500 ease-in-out hover:scale-105"
		>
			<p class="text-lg"><span class="font-bold">Name:</span> {user.full_name}</p>
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
