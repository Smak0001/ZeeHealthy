<!-- src/routes/+page.svelte -->
<script lang="ts">
    import { Auth } from "@supabase/auth-ui-svelte";
    import { ThemeSupa } from "@supabase/auth-ui-shared";

    export let data;
</script>

<svelte:head>
    <title>ZeeHealthy</title>
</svelte:head>

<div class="row flex-center flex">
    <div class="col-6 form-widget">
        <Auth
            supabaseClient={data.supabase}
            view="sign_in"
            redirectTo={`${data.url}/auth/callback`}
            showLinks={true}
            appearance={{ theme: ThemeSupa, style: { button: "background-color: blue", input: "color: black" } }}
        />
    </div>
</div>
