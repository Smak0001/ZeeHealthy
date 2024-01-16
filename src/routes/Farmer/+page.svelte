<script lang="ts">
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  /**
   * @type {import("@sveltejs/kit").Session}
   */
  let session: typeof import("@sveltejs/kit");
  /**
   * @type {any[]}
   */
  let farmers: any[] = [];
  // $: ({ session } = data);

  let fullName: string;
  let form: any;

  let loading = false;

  const handleSubmit: SubmitFunction = () => {
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
        console.log("Products:", farmers);
      } else {
        console.error("Failed to fetch farmers");
      }
    } catch (error) {
      console.error("Error fetching farmers:", error);
    }
  };
  console.log(farmers);
  const updateFarmer = async (data: any) => {
    try {
      const response = await fetch("http://localhost:3005/api/farmers", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        farmers = await response.json();
        console.log("Products:", farmers);
      } else {
        console.error("Failed to Put farmers");
      }
    } catch (error) {
      console.error("Error updating farmers:", error);
    }
  };
  onMount(() => {
    fetchFarmer();
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
  <h1 class="text-2xl font-bold">Farmers</h1>
  <nav class="flex justify-end items-center mr-4">
    <a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
    <a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
    <a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
    <a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
    <a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a>
    <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
  </nav>
</div>

<div class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6">
  <h1 class="text-text font-bold text-4xl">
    Hello, <span class="underline">{fullName}</span>. If you want to update your
    profile please feel free to do that.
  </h1>
</div>

<button
  class="bg-primary text-text cursor-pointer p-2 m-2 border-none rounded-3xl hover:opacity-80"
  on:click={() => (window.location.href = "/home")}
>
  ← Go back to the Home page
</button>

<div class="flex items-center justify-center p-5">
  <form
    class="w-3/5 h-auto bg-secondary p-10 mt-11 border-4 border-primary rounded-3xl"
    method="post"
    action="?/update"
    use:enhance={handleSubmit}
    bind:this={form}
  >
    <div>
      <label for="name">Name</label>
      <input
        class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4"
        id="name"
        name="name"
        type="text"
      />
    </div>

    <div>
      <label for="fullName">Full Name</label>
      <input
        class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4"
        id="fullName"
        name="fullName"
        type="text"
        value={form?.fullName ?? ""}
      />
    </div>

    <div>
      <label for="password">Password</label>
      <input
        class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4"
        id="password"
        name="password"
        type="password"
        value={form?.password ?? ""}
      />
    </div>

    <div>
      <input
        type="submit"
        class="bg-primary text-text cursor-pointer w-full py-4 px-7 my-7 border-none rounded-3xl hover:opacity-80"
        value={loading ? "Loading..." : "Update"}
        disabled={loading}
      />
    </div>
  </form>
</div>
