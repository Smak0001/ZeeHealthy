<script>
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let shoppingCart = [];

  let destination = "";

  let totalCost = 0;

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
   * @param {any} id
   */
  async function deleteFromCart(id) {
    try {
      const response = await fetch(
        `http://localhost:3002/api/shoppingCart/${id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        await fetchCart();
      } else {
        console.error("Error deleting row:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  }

  function getTotalCost() {
    shoppingCart.forEach((product) => {
      totalCost += product.totalPrice;
    });
    return totalCost;
  }

  const placeOrder = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: shoppingCart,
          destination: destination,
        }),
      });
      if (response.ok) {
        console.log("Order placed successfully!");
        destination = "";
        fetchCart(); // Fetch cart again to update the view
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
    shoppingCart.forEach((product) => {
      deleteFromCart(product.id);
    });
  };

  onMount(() => {
    fetchCart();
  });
</script>

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

<div class="w-full flex items-center justify-center p-4">
  {#if shoppingCart.length === 0}
    <h3 class="text-xl font-semibold text-gray-800">
      Your shopping cart is empty
    </h3>
  {/if}
</div>

<div class="flex">
  <div class="w-1/2 p-4">
    {#each shoppingCart as product}
      <div class="product bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {product.product}
        </h3>
        <h3 class="text-lg font-semibold text-gray-600 mb-2">
          Amount: {product.amount}
        </h3>
        <h3 class="text-lg font-semibold text-gray-600 mb-2">
          price: €{product.totalPrice}
        </h3>
        <p>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none"
            on:click={() => deleteFromCart(product.id)}
          >
            Remove from Cart
          </button>
        </p>
      </div>
    {/each}
  </div>

  {#if shoppingCart.length > 0}
    <div class="w-1/2 p-4">
      <div class="destination-input mb-4">
        <label for="destination" class="text-lg font-semibold text-gray-700"
          >Destination:</label
        >
        <input
          type="text"
          id="destination"
          bind:value={destination}
          placeholder="Enter destination"
          class="border rounded-md p-2 mt-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <div class="additional-inputs mb-4">
        <label for="Name" class="text-lg font-semibold text-gray-700"
          >Name:</label
        >
        <input
          type="text"
          id="Name"
          placeholder="Enter name"
          class="border rounded-md p-2 mt-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <div class="place-order">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          on:click={placeOrder}
        >
          Place Order
        </button>
      </div>
      <div class="total-cost">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          Total Cost: €{getTotalCost()}
        </h3>
      </div>
    </div>
  {/if}
</div>