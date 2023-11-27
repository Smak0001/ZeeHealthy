<script>
  import { onMount } from "svelte";
  import { useParams } from "svelte-routing"; // To extract parameters from the URL

  let product;

  const fetchProductDetails = async () => {
    const { id } = useParams(); // Get the product ID from the URL
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      if (response.ok) {
        product = await response.json();
        console.log("Product Details:", product);
      } else {
        console.error("Failed to fetch product details");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  onMount(() => {
    fetchProductDetails();
  });
</script>

<style>
  /* Add styles if needed */
</style>

<div>
  <!-- Display product details here -->
  {#if product}
    <h2>{product.name}</h2>
    <p>Type: {product.type}</p>
    <p>Weight: {product.weight} kg</p>
    <p>Price: €{Number(product.price).toFixed(2)}</p>
    <!-- Add more details if needed -->
  {:else}
    <p>Loading...</p>
  {/if}
</div>
