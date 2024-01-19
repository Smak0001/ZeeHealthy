<script lang="ts">
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

<div
	class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
>
	<div class="ml-4">
		<a href="/home" class="text-4xl font-bold">ZeeHealthy</a>
	</div>
	<nav class="flex justify-end items-center mr-4">
		<a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
		<a href="/profile" class="text-white hover:text-gray-300 mr-4"
			>{session?.user.email}</a
		>
	</nav>
</div>

<div class="grid place-content-center m-5 text-white">
	<a href="/admin" class="bg-blue-500 rounded-xl p-4 text-2xl">Admin</a>
</div>

{#if session?.user.email === "admin@admin.com"}
	<slot />
{:else}
	<div class="flex items-center justify-center mt-20">
		<div
			class="bg-white p-8 rounded-2xl shadow-md max-w-md w-full border-4 border-red-500"
		>
			<h1 class="text-4xl font-bold text-red-500 mb-4 text-center">
				You dont have access to this page!
			</h1>
			<p class="text-red-500 text-center">Go back to the home page</p>
		</div>
	</div>
{/if}
