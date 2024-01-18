<script>
    import { onMount } from "svelte";
    /**
     * @type {any[]}
     */
    let products = [];
    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:3001/api/products`, {
                method: "GET",
            });
            products = await response.json();
        } catch {}
    }
    onMount(async () => {
        fetchData();
    });
    /**
     *
     * @param {any} id
     */
    async function handleDelete(id) {
        try {
            const response = await fetch(
                `http://localhost:3001/products/:${id}`,
                {
                    method: "DELETE",
                },
            );
            if (response.ok) {
                // Row deleted successfully, update your data
                await fetchData();
            } else {
                console.error("Error deleting row:", response.statusText);
            }
        } catch (error) {
            // @ts-ignore
            console.error("Error deleting row:", error.message);
        }
    }
    /**
     * @param {any} id
     */
    function handleUpdate(id) {
        window.location.href = `/Admin/products/update/${id}`;
        console.log("product updated");
    }
</script>

<div
    class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 p-4"
>
    {#each products as product}
        <div
            class="bg-white rounded-lg shadow-lg p-4 transform transition duration-500 ease-in-out hover:scale-105"
        >
            <p class="text-lg"><span class="font-bold">Product name:</span> {product.name}</p>
            <p><span class="font-bold">Product ID:</span> {product.id}</p>
            <p><span class="font-bold">Product price:</span> {product.price}€</p>
            <p><span class="font-bold">Product description:</span> {product.description}</p>
            <p class="text-sm"><span class="font-bold">Product image:</span> {product.pictures}</p>
            <p><span class="font-bold">Product weight:</span> {product.weight}kg</p>
            <button
                class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                on:click={() => handleDelete(product.id)}>Delete</button
            >
            <button
                class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                on:click={() => handleUpdate(product.id)}>Update</button
            >
        </div>
    {/each}
</div>
