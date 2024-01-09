<!-- Import data to file -->
<script>
  import { onMount } from "svelte";
  import { FunctionsHttpError } from "@supabase/supabase-js";

  let isLoggedIn = false;

  /**
   * @param {any} newProduct
   * @param {any} newAmount
   */
  async function addToCart(newProduct, newAmount) {
    let data = {
      product: newProduct,
      amount: newAmount,
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
      alert(`Added ${newAmount} ${newProduct} to cart`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Added to cart:", result);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  /**
   * @type {any[]}
   */
  let products = [];

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      if (response.ok) {
        products = await response.json();
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
    <h1 class="text-4xl font-bold">ZeeHealthy</h1>
  </div>
  <h1 class="text-2xl font-bold">Shop</h1>
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

<div
  class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4"
>
  {#each products as product}
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
      <p>
        <button
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          on:click={() => addToCart(product.name, 1)}
        >
          Add to Cart
        </button>
      </p>
    </div>
  {/each}
</div>

<style>
  .product {
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
