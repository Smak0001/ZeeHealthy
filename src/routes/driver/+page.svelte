<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let newOrders = true;
  let declinedOrders = false;
</script>

<h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default mt-5 text-white">New orders</h1>

<a href="/driver/my-orders">
          <button class="mt-5 bg-[var(--secondary-color)] text-[color:var(--text-color)] font-[Tahoma] p-[10px] border-none rounded-[15px] transition-[0.2s] duration-[ease-in-out] hover:bg-[var(--primary-color)] hover:scale-110" data-sveltekit-preload-data="tap">My orders</button>
</a>

{#if data.newOrders.length === 0}
  <p class="mt-12 text-xl text-center text-[color:var(--primary-color)]">Sorry, no new orders at the moment...</p>
{/if}

<div class="w-[100%] flex justify-center flex-wrap h-[60vh]">
  {#each data.newOrders as { id, destination, products }}
    <div class="min-w-[30%] max-w-[50%] max-h-[30vh] m-[10px] p-[10px] flex justify-center flex-col bg-[var(--secondary-color)] text-[color:var(--primary-color)] font-[Tahoma] border-4 border-[var(--primary-color)] rounded-[15px]">
      <p><span class="font-bold">Destination: </span>{destination}</p>
      <p><span class="font-bold">Products:</span></p>
      <ul class="flex-[1_0_auto] min-h-[30%] max-h-[50%] list-[circle] whitespace-nowrap overflow-hidden text-ellipsis;">
        {#each products as { product, amount, totalPrice }}
          <li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
        {/each}
      </ul>
      <div class="self-center">
        <a href="driver/{id}"
          ><button class="bg-[var(--secondary-color)] text-[color:var(--text-color)] font-[Tahoma] p-[10px] border-none rounded-[15px] transition-[0.2s] duration-[ease-in-out] hover:bg-[var(--primary-color)] hover:scale-110" data-sveltekit-preload-data="tap">Read more...</button></a
        >
      </div>
    </div>
  {/each}
</div>
