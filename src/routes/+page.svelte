<!-- src/routes/+page.svelte -->
<script lang="ts">
    import { Auth } from "@supabase/auth-ui-svelte";
    import { ThemeSupa } from "@supabase/auth-ui-shared";

    export let data;
</script>
<svelte:head>
    <title>ZeeHealthy</title>
</svelte:head>

<div class="h-screen flex items-center justify-center">
    <div class="w-3/5 h-auto p-10 mt-11 font-bold">
        <Auth
            supabaseClient={data.supabase}
            view="sign_in"
            redirectTo={`${data.url}/auth/callback`}
            showLinks={true}
            appearance={{
                theme: ThemeSupa,
                style: {
                    button: "background-color: #012d78; border: #012d78; border-radius: 16px",
                    input: "color: black; border-radius: 16px",
                },
            }}
        />
    </div>
</div>
