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
  let showProduct = false;
  let loading = false;

  let productName: string = "";
  let productType: string = "";
  let productWeight: any = 0;
  let productPrice: any = 0;
  let productKcal: any = 0;
  let productNutriScore: string = "";
  let productPictures: string = "";
  let productFarmerId: string = "";
  let productStock: any = 0;

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

  const toggleVisibility = () => {
    showProduct = !showProduct;
  };

  let usersData: any = [];

  async function fetchAllUserData() {
    const response = await fetch("http://localhost:3004/users");
    usersData = await response.json();
  }

  async function addProduct(
    newProductName: string,
    newProductType: string,
    newProductWeight: number,
    newProductPrice: number,
    newProductKcal: number,
    newProductNutriScore: string,
    newProductPictures: string,
    newProductFarmer_id: string,
    newProductStock: number,
  ) {
    if (
      !(
        newProductName &&
        newProductType &&
        newProductWeight &&
        newProductPrice &&
        newProductKcal &&
        newProductNutriScore &&
        newProductPictures &&
        newProductFarmer_id &&
        newProductStock
      )
    ) {
      console.error("Error adding product: All fields must be filled");
      return;
    }

    const productData = {
      name: newProductName,
      type: newProductType,
      weight: newProductWeight,
      price: newProductPrice,
      kcal: newProductKcal,
      NutriScore: newProductNutriScore,
      pictures: newProductPictures,
      farmer_id: newProductFarmer_id,
      stock: newProductStock,
    };

    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log("Product added successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  let productBtn;
  const getproductBtn = () => {
    productBtn = document.getElementById("productBtn");
    productBtn?.addEventListener("click", toggleVisibility);
  };

  onMount(() => {
    getproductBtn();
    fetchAllUserData();
  });
</script>

<div
  class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6 bg-blue-500 text-white py-4"
>
  <h1 class="text-text font-bold text-2xl">
    Hello, <span class="underline">{fullName}</span>. If you want to update your
    profile please feel free to do that.
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

{#if session.user.role === "authenticated" || session.user.role === "farmer"}
  <div class="flex items-center justify-center p-5">
    <div
      class="bg-blue-500 hover:bg-blue-700 w-full cursor-pointer text-white font-bold py-2 px-4 rounded-xl"
      id="productBtn"
    >
      add product
    </div>
  </div>
{/if}

{#if showProduct}
  <form id="productForm">
    <label for="productName">Product Name:</label>
    <input
      type="text"
      id="productName"
      name="productName"
      required
      bind:value={productName}
    />

    <label for="productType">Product Type:</label>
    <input
      type="text"
      id="productType"
      name="productType"
      required
      bind:value={productType}
    />

    <label for="productWeight">Product Weight:</label>
    <input
      type="text"
      id="productWeight"
      name="productWeight"
      required
      bind:value={productWeight}
    />

    <label for="productPrice">Product Price:</label>
    <input
      type="text"
      id="productPrice"
      name="productPrice"
      required
      bind:value={productPrice}
    />

    <label for="productKcal">Product Kcal:</label>
    <input
      type="text"
      id="productKcal"
      name="productKcal"
      required
      bind:value={productKcal}
    />

    <label for="productNutriScore">Product Nutri-Score:</label>
    <input
      type="text"
      id="productNutriScore"
      name="productNutriScore"
      required
      bind:value={productNutriScore}
    />

    <label for="productPictures">Product Pictures (URL):</label>
    <input
      type="url"
      id="productPictures"
      name="productPictures"
      required
      bind:value={productPictures}
    />

    <label for="productFarmerId">Farmer ID:</label>
    <input
      type="text"
      id="productFarmerId"
      name="productFarmerId"
      required
      bind:value={productFarmerId}
    />

    <label for="productStock">Stock:</label>
    <input
      type="text"
      id="productStock"
      name="productStock"
      required
      bind:value={productStock}
    />

    <button
      type="submit"
      on:click={() =>
        addProduct(
          productName,
          productType,
          parseInt(productWeight),
          parseInt(productPrice),
          parseInt(productKcal),
          productNutriScore,
          productPictures,
          productFarmerId,
          parseInt(productStock),
        )}>Submit Product</button
    >
  </form>
{/if}
