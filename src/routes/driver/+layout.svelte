<script>
  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);
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
<div class="flex justify-center items-center flex-col mt-5">
  <div class="w-[100%] flex justify-center items-center flex-col flex-wrap">
    <slot />
  </div>
</div>

<style>
  :root {
    --primary-color: #012d78;
    --secondary-color: #012d787a;
    --text-color: #deeade;
  }
</style>
