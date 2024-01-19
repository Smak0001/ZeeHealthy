<script>
  import { onMount } from "svelte";

  export let data;

  /**
   * @type {any[]}
   */
  let products = [];

  let showPopup = false;

  /**
   * @param {any} newProduct
   */
  async function addToCart(newProduct) {
    let newAmount = parseInt(
      prompt("How many do you want to add to your cart?") ?? "",
    );
    if (!newAmount) {
      newAmount = 1;
    }
    const newTotalPrice = getNewTotalPrice(newAmount);
    let data = {
      product: newProduct,
      amount: newAmount,
      totalPrice: newTotalPrice,
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
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Added to cart:", result);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }

    showPopup = true;

    // Set a timeout to hide the notification after 5 seconds
    setTimeout(() => {
      showPopup = false;
    }, 5000);
  }

  /**
   * @param {number} newAmount
   */
  function getNewTotalPrice(newAmount) {
    return products[Number(data.slug) - 1].price * newAmount;
  }

  /**
   * @type {HTMLButtonElement | null}
   */
  let addToCartBtn = null;
  setTimeout(() => {
    addToCartBtn = document.querySelector("button");
    getButton();
  }, 1000);

  function getButton() {
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        addToCart(products[Number(data.slug) - 1].name);
      });
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      if (response.ok) {
        products = await response.json();
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  function loadProduct() {
    const productsContainer = document.querySelector(".products-container");
    if (productsContainer) {
      productsContainer.innerHTML = `
        <div class="product bg-white shadow-lg rounded-lg p-6 transform:scale-105">
            <div>
                <img src=${products[Number(data.slug) - 1].pictures} alt=${
                  products[Number(data.slug) - 1].name
                } class="w-full h-48 object-cover mb-2 rounded-lg shadow-md"/>
                <div>
                    <h3 class="text-2xl font-semibold mb-2 text-gray-800">${
                      products[Number(data.slug) - 1].name
                    }</h3>
                    <p>Type: ${products[Number(data.slug) - 1].type}</p>
                    <p>Weight: ${products[Number(data.slug) - 1].weight} kg</p>
                    <p>Price: €${Number(
                      products[Number(data.slug) - 1].price,
                    ).toFixed(2)}</p>
                    <p>kcal: ${products[Number(data.slug) - 1].kcal}</p>
                    <p>Nutri-Score: ${
                      products[Number(data.slug) - 1].NutriScore
                    }</p>
                    <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    }
  }

  onMount(() => {
    fetchProducts();
    setTimeout(() => {
      loadProduct();
      getButton();
    }, 500);
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
    <!-- <a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a> -->
    <!-- <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a> -->
  </nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
  rel="stylesheet"
/>

<div class="products-container grid mt-8 p-4"></div>
{#if showPopup}
  <div class="popup">
    <span class="popuptext" id="myPopup">Added to cart</span>
  </div>
{/if}

<style>
  /* Popup container */
  .popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  /* The actual popup (appears on top) */
  .popup .popuptext {
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: 0px;
  }

  /* Popup arrow */
  .popup .popuptext::after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
  }
</style>
