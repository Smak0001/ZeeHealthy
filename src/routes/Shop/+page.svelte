<!-- Import data to file -->
<script>
  import { onMount } from "svelte";
	import { fetchUser } from "../../utils/auth";
	import { goto } from "$app/navigation";
	import { supabase } from "../../supabase.js";
  
	let isLoggedIn = false;

	const hangleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			console.log("Logged out");
			goto("/login");
		} catch (error) {
			// @ts-ignore
			console.error("Logout error:", error.message);
		}
	};

	onMount(async () => {
		const user = await fetchUser();
		if (user) {
			console.log(user);
			isLoggedIn = true;
		}
	});

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


<div class="header-container">
	<h1 class="header">ZeeHealthy</h1>
	<h1 class="header">Shop</h1>
	<nav>
		<a href="/">Home</a>
		<a class="active" href="/shop">Shop</a>
		<a href="/chat">Chat</a>
		<button on:click={hangleLogout}>Logout</button>
	</nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap" rel="stylesheet" />

<div class="products-container">
  {#each products as product}
    <div class="product">
      <a href={`/shopDetail/${product.id}`}>
        <h3>{product.name}</h3>
      </a>

      <p>Type: {product.type}</p>
      <p>Weight: {product.weight} kg</p>
      <p>Price: €{Number(product.price).toFixed(2)}</p>
    </div>
  {/each}
</div>

<!-- Style sheet -->
<style>
	:root {
		--primary-color: #012d78;
		--secondary-color: #012d787a;
		--text-color: #deeade;
	}

	.header-container {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 0 20px 0 20px;
	}

	.product {
		border: 3px solid #012d78;
		padding: 20px;
		margin: 10px;
		width: 45%;
		display: inline-block;
		vertical-align: top;
		border-radius: 10px;
	}

	.products-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.header {
		color: var(--text-color);
		font-family: Tahoma;
	}

	a {
		color: var(--text-color);
		font-family: Tahoma;
		text-decoration: none;
		margin: 20px;
	}

	button {
		background-color: var(--primary-color);
		color: var(--text-color);
		border: solid var(--text-color);
		border-radius: 20px;
		cursor: pointer;
	}

	.active {
		text-decoration: underline;
	}

	.content {
		display: flex;
		justify-content: center;
	}

	.para {
		text-align: center;
		width: 30%;
		font-size: 2em;
		background: var(--secondary-color);
		padding: 30px;
		color: var(--text-color);
		font-family: "Agbalumo";
		margin-bottom: 30px;
		border-radius: 50px;
	}
</style>