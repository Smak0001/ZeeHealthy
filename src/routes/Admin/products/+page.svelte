<script>
    import { onMount } from "svelte";
    /**
     * @type {any[]}
     */
    let products = [];
    async function fetchData() {
        try {
            const response = await fetch(
                `http://localhost:3001/api/products`,
                {
                    method: "GET",
                },
            );
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
            const response = await fetch(`http://localhost:3001/products/:${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Row deleted successfully, update your data
                await fetchData();
            }else {
                console.error('Error deleting row:', response.statusText);
            }
        }catch (error) {
            // @ts-ignore
            console.error('Error deleting row:', error.message);
        }
    }
    /**
     * @param {any} id
     */
    function handleUpdate(id) {
        window.location.href = `/Admin/products/update/${id}`;
        console.log('product updated');
    }
</script>
<div class="object-center">
    <div>
        <h2>Products</h2>
        {#each products as product}
            <div class="object-center">
                <p>product name: {product.name}</p>
                <p>product ID: {product.id}</p>
                <p>product price: {product.price}</p>
                <p>product description: {product.description}</p>
                <p>product image: {product.pictures}</p>
                <p>product weight: {product.weight}</p>
                <button on:click={() => handleDelete(product.id)}>Delete</button>
                <button on:click={() => handleUpdate(product.id)}>Update</button>
            </div>
        {/each}
    </div>
</div>