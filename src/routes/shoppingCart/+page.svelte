<script>
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let shoppingCart = [];
  console.log(localStorage.getItem('userId'));

  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/shoppingCart");
      if (response.ok) {
        shoppingCart = await response.json();
      } else {
        console.error("Failed to fetch cart");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  /**
   * @param {any} product
   * @param {number} amount
   */
  function deleteFromCart(product, amount) {
    // TODO actualy implement this feature
    console.log(`deleted ${amount} ${product} from cart`);
  }

  onMount(() => {
    fetchCart();
  });
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
  rel="stylesheet"
/>

<div
  class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
>
  <div class="ml-4">
    <h1 class="text-4xl font-bold">ZeeHealthy</h1>
  </div>
  <h1 class="text-2xl font-bold">Shopping cart</h1>
  <nav class="flex justify-end items-center mr-4">
    <a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
    <a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
    <a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
    <a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
    <a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a>
    <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
  </nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
  rel="stylesheet"
/>
{#each shoppingCart as product}
  <div class="product bg-white rounded-lg shadow-md p-4">
    <h3 class="text-lg font-semibold mb-2">{product.product}</h3>
    <h3 class="text-lg font-semibold mb-2">{product.amount}</h3>
    <p>
      <button
        class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => deleteFromCart(product.product, 1)}
      >
        Remove from Cart
      </button>
    </p>
  </div>
{/each}
