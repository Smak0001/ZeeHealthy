<script>
	export let data;

	const { id, created_at, destination, products } = data.order;
	const date = new Date(created_at).toLocaleString();
</script>

<div class="min-w-[40%] max-w-[50%] m-[10px] p-[10px] flex justify-center flex-col bg-[var(--secondary-color)] text-[color:var(--primary-color)] font-[Tahoma] border-4 border-[var(--primary-color)] rounded-[15px]">
	<h3 class="text-[2em] text-[color:var(--primary-color)]">Order #{id}</h3>
	<p><span class="font-bold">Destination: </span>{destination}</p>
	<p><span class="font-bold">Order placed: </span>{new Date(created_at).toLocaleString()}</p>
	<p><span class="font-bold">Products:</span></p>
	<ul class="list-[circle]">
		{#each products as { product, amount, totalPrice }}
		<li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
		{/each}
 	 </ul>
	<div class="mt-[30px] flex justify-between items-center">
		<a href="{id}/accept" data-sveltekit-preload-data="tap">
			<button class="text-[color:var(--text-color)] text-[1.25em] transition-[0.2s] duration-[ease-in-out] p-[10px] rounded-[15px] border-none bg-[#159b64] font-[Tahoma] hover:scale-110 hover:bg-[#188b5b]" type="submit">Accept</button>
		</a>
		<a href="{id}/decline" data-sveltekit-preload-data="tap">
			<button class="text-[color:var(--text-color)] text-[1.25em] transition-[0.2s] duration-[ease-in-out] p-[10px] rounded-[15px] border-none bg-[#f23535] font-[Tahoma] hover:scale-110 hover:bg-[#a32727]">Decline</button>
		</a>
	</div>
</div>

