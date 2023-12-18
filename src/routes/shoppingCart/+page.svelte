<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  // import { fetchUser } from "../../utils/auth";
  // import { supabase } from "../../supabase.js";

  // let isLoggedIn = false;

  // const handleLogout = async () => {
  //   try {
  //     const { error } = await supabase.auth.signOut();
  //     if (error) throw error;
  //     console.log("Logged out");
  //     goto("/login");
  //   } catch (error) {
  //     // @ts-ignore
  //     console.error("Logout error:", error.message);
  //   }
  // };

  // onMount(async () => {
  //   const user = await fetchUser();
  //   if (user) {
  //     // console.log(user);
  //     isLoggedIn = true;
  //   }
  // });

  /**
   * @type {any[]}
   */
  let shoppingCart = [];

  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/shoppingCart");
      if (response.ok) {
        shoppingCart = await response.json();
        console.log("cart:", shoppingCart);
      } else {
        console.error("Failed to fetch cart");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

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
    <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
    <a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
    <!-- <button class="text-white hover:text-gray-300" on:click={handleLogout}
      >Logout</button
    > -->
  </nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
  rel="stylesheet"
/>
`
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
{/each}`
