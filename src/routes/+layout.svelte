<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import { invalidate } from "$app/navigation";
    import { onMount } from "svelte";
    import "../app.css";

    export let data;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);

    onMount(() => {
        const { data } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate("supabase:auth");
                location.reload();
            }

        });

        return () => data.subscription.unsubscribe();
    });
</script>

<svelte:head>
    <title>ZeeHealthy</title>
</svelte:head>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<slot />
