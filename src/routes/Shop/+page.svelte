<script>
  import { onMount } from "svelte";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  let isLoggedIn = false;

  /**
   * @type {boolean[]}
   */
  let showPopup = [];

  /**
   * @type {any[]}
   */
  let products = [];

  /**
   * @param {any} newProduct
   * @param {any} newAmount
   * @param {any} newTotalPrice
   * @param {number} index
   */
  async function addToCart(newProduct, newAmount, newTotalPrice, index) {
    showPopup[index] = true;
    let data = {
      product: newProduct,
      amount: newAmount,
      totalPrice: newTotalPrice,
    };
    try {
      const response = await fetch(
        "http://localhost:3002/api/shoppingCart/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Added to cart:", result);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }

    // Set a timeout to hide the notification after 5 seconds
    setTimeout(() => {
      showPopup[index] = false;
    }, 2000);
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      if (response.ok) {
        products = await response.json();
        // Adding a quantity property to each product
        products = products.map((product) => ({
          ...product,
          quantity: 1,
        }));
        // Initialize showPopup array with false values for each product
        showPopup = new Array(products.length).fill(false);
        console.log("Products:", products);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  onMount(() => {
    fetchProducts();
  });
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
		<!-- <a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a> -->
		<!-- <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a> -->
		<a href="/shoppingCart" class="mr-4"
			><i class="fa fa-shopping-basket" aria-hidden="true"></i></a
		>
		<a href="/profile" class="text-white hover:text-gray-300 mr-4"
			>{session?.user.email}</a
		>
	</nav>
</div>

<div class="grid place-content-center m-5 text-white">
  <h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default">Shop</h1>
</div>

<div
  class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 p-4"
>
  {#each products as product (product.id)}
    <div
      class="product bg-white rounded-lg shadow-lg p-4 transform transition duration-500 ease-in-out hover:scale-105"
    >
      <a href={`/shopDetail/${product.id}`} class="flex flex-col items-center">
        <img
          src={product.pictures}
          alt={product.name}
          class="w-full h-48 object-cover mb-2 rounded-lg shadow-md"
        />
        <h3 class="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
      </a>
      <p class="mb-2">Type: {product.type}</p>
      <p class="mb-2">Weight: {product.weight} kg</p>
      <p class="mb-2">Price: €{Number(product.price).toFixed(2)}</p>
      <div class="flex items-center mt-2">
        <input
          type="number"
          min="1"
          max="99"
          bind:value={product.quantity}
          class="mr-2 w-16 py-2 px-3 border border-gray-300 rounded text-center"
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          on:click={() =>
            addToCart(
              product.name,
              product.quantity,
              Number(product.price) * Number(product.quantity),
              product.id, // Pass the product index
            )}
        >
          Add to Cart
        </button>
        {#if showPopup[product.id]}
          <div class="popup">
            <span class="popuptext" id="myPopup">Added to cart</span>
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  .product,
  .grid {
    animation: product-entry 1s ease-out;
  }

  @keyframes product-entry {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .product img {
    margin-bottom: 2px;
    transition: transform 0.3s ease-in-out;
  }

  .product img:hover {
    transform: scale(1.05);
  }
</style>
