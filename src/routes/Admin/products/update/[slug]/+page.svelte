<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  export let data;

  /**
   * @type {any[]}
   */
  let currentProduct = 0;

  async function fetchdata() {
    try {
      const response = await fetch(
        `http://localhost:3001/api/products/${data.slug}`,
        {
          method: "GET",
        },
      );
      currentProduct = await response.json();
      console.log(currentProduct);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  }

  async function handleUpdate(
    newProductName,
    newProductPrice,
    newProductPictures,
    newProductWeight,
    newProductStock,
  ) {
    const productData = {
      name: newProductName,
      price: newProductPrice,
      // description: newProductDescription,
      pictures: newProductPictures,
      weight: newProductWeight,
      stock: newProductStock,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/products/${data.slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        },
      );
      if (response.ok) {
        fetchdata();
        setTimeout(() => {
          window.location.href = "../";
        }, 500);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  onMount(async () => {
    await fetchdata();
  });
</script>

<a
  class="text-text cursor-pointer p-2 m-2 border-none rounded-3xl hover:opacity-80"
  href="../">← Go back</a
>

<div class="flex items-center justify-center p-5">
  <form
    action="PUT"
    class="w-3/5 h-auto p-10 mt-11 rounded-3xl bg-blue-100 shadow-lg"
  >
    <div>
      <label class="font-bold" for="name">Product name:</label><br />
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        type="text"
        id="name"
        name="name"
        bind:value={currentProduct.name}
      /><br />

      <label class="font-bold" for="id">Product ID:</label><br />
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        type="text"
        id="id"
        name="id"
        value={currentProduct.id}
      /><br />

      <label class="font-bold" for="price">Product price:</label><br />
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        type="text"
        id="price"
        name="price"
        bind:value={currentProduct.price}
      /><br />

      <label class="font-bold" for="pictures">Product image:</label><br />
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        type="text"
        id="pictures"
        name="pictures"
        bind:value={currentProduct.pictures}
      /><br />

      <label class="font-bold" for="weight">Product weight:</label><br />
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        type="text"
        id="weight"
        name="weight"
        bind:value={currentProduct.weight}
      /><br />

      <label class="font-bold" for="stock">Current stock:</label><br />
      <input
        class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
        type="text"
        id="stock"
        name="stock"
        bind:value={currentProduct.stock}
      /><br />

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        on:click={() =>
          handleUpdate(
            currentProduct.name,
            currentProduct.price,
            currentProduct.pictures,
            currentProduct.weight,
            currentProduct.stock,
          )}>Update</button
      >
    </div>
  </form>
</div>

<!-- <label for="description">Product description:</label>
    <input
      type="text"
      id="description"
      name="description"
      bind:value={products.description}
    /> -->
