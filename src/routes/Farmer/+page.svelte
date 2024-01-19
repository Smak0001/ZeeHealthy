<!-- src/routes/account/+page.svelte -->
<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { onMount } from "svelte";

  export let data;
  export let form;

  let { session, supabase, profile } = data;
  $: ({ session, supabase, profile } = data);

  let profileForm: HTMLFormElement;
  let loadingUpdate = false;
  let loadingSignOut = false;
  let email: string = profile?.email ?? "";
  let fullName: string = profile?.full_name ?? "";
  let password: string = profile?.password ?? "";
  let farmers: any[] = [];
  let showProduct = false;
  let loading = false;

  
  const handleSubmit: SubmitFunction = () => {
    loadingUpdate = true;
    return async () => {
      loadingUpdate = false;
    };
  };

  const handleSignOut: SubmitFunction = () => {
    loadingSignOut = true;
    return async ({ update }) => {
      loadingSignOut = false;
      update();
    };
  };
  
  const handleProductSubmit: SubmitFunction = () => {
    loading = true;
    return async () => {
      loading = false;
    };
  };
  
  const fetchFarmer = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/farmers");
      if (response.ok) {
        farmers = await response.json();
        console.log("Farmers:", farmers);
      } else {
        console.error("Failed to fetch farmers");
      }
    } catch (error) {
      console.error("Error fetching farmers:", error);
    }
  };
  
  const toggleVisibility = () => {
    showProduct = !showProduct;
  };

  let productBtn;
  const getproductBtn = () => {
    productBtn = document.getElementById("productBtn");
    productBtn?.addEventListener("click", toggleVisibility);
  };

  onMount(() => {
    fetchFarmer();
    getproductBtn();
  });
</script>

<div
  class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6 bg-blue-500 text-white py-4"
>
  <h1 class="text-text font-bold text-2xl">
    Hello, <span class="underline">{fullName}</span>. If you want to update your
    profile plese feel free to do that.
  </h1>
</div>

<a
  class="bg-primary text-text cursor-pointer p-2 m-2 border-none rounded-3xl hover:opacity-80"
  href="/">← Go back to the Home page</a
>

<div class="flex items-center justify-center p-5">
  <form
    class="w-3/5 h-auto p-10 mt-11 rounded-3xl bg-blue-100 shadow-lg"
    method="post"
    action="?/update"
    use:enhance={handleSubmit}
    bind:this={profileForm}
  >
    <div>
      <label class="font-bold" for="email">Email</label>
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        id="email"
        name="email"
        type="text"
        value={session.user.email ?? email}
      />
    </div>

    <div>
      <label class="font-bold" for="fullName">Full Name</label>
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        id="fullName"
        name="fullName"
        type="text"
        value={form?.fullName ?? fullName}
      />
    </div>

    <div>
      <label class="font-bold" for="password">Password</label>
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        id="password"
        name="password"
        type="password"
        value={form?.password ?? password}
      />
    </div>

    <div class="flex justify-center">
      <input
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 w-full cursor-pointer text-white font-bold py-2 px-4 rounded-xl my-8"
        value={loadingUpdate ? "Loading..." : "Update"}
        disabled={loadingUpdate}
      />
    </div>

    <form method="post" action="?/signout" use:enhance={handleSignOut}>
      <div class="flex justify-center">
        <input
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 w-full cursor-pointer text-white font-bold py-2 px-4 rounded-xl"
          value={loadingSignOut ? "Loading..." : "Sing Out"}
          disabled={loadingSignOut}
        />
      </div>
    </form>
  </form>
</div>

<div class="flex items-center justify-center p-5">
  <div
    class="bg-blue-500 hover:bg-blue-700 w-full cursor-pointer text-white font-bold py-2 px-4 rounded-xl"
    id="productBtn"
  >
    add product
  </div>
</div>

{#if showProduct}
  <form action="post">
    <label class="font-bold" for="productName">Product name</label>
    <input placeholder="name..." class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2" type="text" />
    <label class="font-bold" for="productPrice">Product price</label>
    <input placeholder="price..." class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2" type="text" />
  </form>
{/if}
