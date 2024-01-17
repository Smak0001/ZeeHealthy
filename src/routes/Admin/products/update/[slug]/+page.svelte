<script>
    import { onMount } from "svelte";
    export let data;
    let products = [];
async function fetchdata() {
    try {
        // @ts-ignore
        const response = await fetch(`http://localhost:3001/products/:${data.slug}`, {
            method: `GET`,
        });
        products = await response.json();
    }catch {}
    
}
onMount(async () => {
    fetchdata();
});
</script>
<form action="">
</form>