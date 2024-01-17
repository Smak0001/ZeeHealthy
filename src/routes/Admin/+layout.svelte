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
		<a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
		<a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
		<a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a>
		<a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
		<a href="/shoppingCart" class="mr-4"
			><i class="fa fa-shopping-basket" aria-hidden="true"></i></a
		>
		<a href="/profile" class="text-white hover:text-gray-300 mr-4"
			>{session?.user.email}</a
		>
	</nav>
</div>

<div class="grid place-content-center m-5 text-white">
	<h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default">Admin</h1>
</div>

{#if session?.user.email === 'admin@admin.com'}
<slot />
{:else}
<h1 class="text align-center">You dont have access to this page</h1>
{/if}
