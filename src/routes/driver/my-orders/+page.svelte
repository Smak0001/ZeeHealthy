<script>
/** @type {import('./$types').PageData} */
  export let data;

  let completedOrders = false;
</script>

<div class="absolute left-[20px] top-[100px]"><a href="/driver" class="no-underline text-[grey] hover:underline hover:text-black">←Back to new orders</a></div>


<h1 class="text-[2.5em] text-[color:var(--primary-color)]">My orders</h1>
<div>
  <input
    type="checkbox"
    name="order"
    id="declined-orders"
    bind:checked={completedOrders}
  />
  <label for="declined-orders">Show my completed orders</label>
</div>

  {#if completedOrders}
    {#if data.completedOrders.length === 0}
      <p class="mt-12 text-xl text-center text-[color:var(--primary-color)]">
      Seems like you have not completed any order yet...
      <br>Explore the <a class="font-bold" href="/driver">new orders</a> and pick your first one!
      </p>
    {/if}

    {#each data.completedOrders as { id, created_at, completed_at, destination, products }}
    <div class="min-w-[40%] max-w-[50%] m-[10px] p-[10px] flex justify-center flex-col bg-[var(--secondary-color)] text-[color:var(--primary-color)] font-[Tahoma] border-4 border-[var(--primary-color)] rounded-[15px]">
      <h3 class="text-[2em] text-[color:var(--primary-color)]">Order #{id}</h3>
      <p><span class="font-bold">Destination: </span>{destination}</p>
      <p><span class="font-bold">Order placed: </span>{new Date(created_at).toLocaleString()}</p>
      <p><span class="font-bold">Order completed: </span>{new Date(completed_at).toLocaleString()}</p>
      <p><span class="font-bold">Products:</span></p>
      <ul class="list-[circle]">
        {#each products as { product, amount, totalPrice }}
          <li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
        {/each}
      </ul>
      <div class="mt-[30px] flex flex-col items-center">
        <a href="{id}/delete" class="self-end" data-sveltekit-preload-data="tap">
          <button class="text-[color:var(--text-color)] text-[1.25em] transition-[0.2s] duration-[ease-in-out] p-[10px] rounded-[15px] border-none bg-[#f23535] font-[Tahoma] hover:scale-110 hover:bg-[#a32727]" type="submit">Delete</button>
        </a>
      </div>
    </div>
    {/each}
  {:else}
    {#if data.acceptedOrders.length === 0}
      <p class="mt-12 text-xl text-center text-[color:var(--primary-color)]">
      Seems like you have not picked any order yet...
      <br>Explore the <a class="font-bold" href="/driver">new orders</a> and pick one!
      </p>
    {/if}

    {#each data.acceptedOrders as { id, created_at, destination, products }}
      <div class="min-w-[40%] max-w-[50%] m-[10px] p-[10px] flex justify-center flex-col bg-[var(--secondary-color)] text-[color:var(--primary-color)] font-[Tahoma] border-4 border-[var(--primary-color)] rounded-[15px]">
        <h3 class="text-[2em] text-[color:var(--primary-color)]">Order #{id}</h3>
        <p><span class="font-bold">Destination: </span>{destination}</p>
        <p><span class="font-bold">Order placed: </span>{new Date(created_at).toLocaleString()}</p>
        <p><span class="font-bold">Products:</span></p>
        <ol class="list-[circle]">
          {#each products as { product, amount, totalPrice }}
            <li class="ml-8">{`${product}: ${amount} (€${totalPrice})`}</li>
          {/each}
        </ol>
        <div class="mt-[30px] flex items-center justify-between">
          <a href="{id}/complete" data-sveltekit-preload-data="tap">
            <button class="text-[color:var(--text-color)] text-[1.25em] transition-[0.2s] duration-[ease-in-out] p-[10px] rounded-[15px] border-none bg-[#159b64] font-[Tahoma] hover:scale-110 hover:bg-[#188b5b]" type="submit">Complete</button>
          </a>
          <a href="{id}/cancel" data-sveltekit-preload-data="tap">
            <button class="text-[color:var(--text-color)] text-[1.25em] transition-[0.2s] duration-[ease-in-out] p-[10px] rounded-[15px] border-none bg-[#f23535] font-[Tahoma] hover:scale-110 hover:bg-[#a32727]">Cancel</button>
          </a>
        </div>
      </div>
    {/each}
  {/if}

