<script>
    import { goto } from "$app/navigation";
    import { supabase } from "../../lib/supabase.js";

    let email = "";
    let password = "";
    let errorMessage = "";

    const handleSignUp = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) throw error;
            goto("/");
        } catch (error) {
            errorMessage = error.message;
        }
    };
</script>

<div class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6">
    <h1 class="text-text font-bold text-4xl">ZeeHealthy</h1>
</div>

<a class="underline ml-2" href="/login">← Back to login</a>

<div class="flex items-center justify-center p-5">
    <form class="w-3/5 h-auto bg-secondary mt-11 border-4 border-primary rounded-3xl" on:submit|preventDefault={handleSignUp}>
    <div class="p-16 mt-4">
        <h1 class="mb-5 font-bold text-lg">Sign up</h1>
        <p class="mb-5">Please fill in this form to create an account!</p>
        <label for="email"><b>Email</b></label>
        <input class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4" type="email" bind:value={email} placeholder="Email" />
        <label for="password"><b>Password</b></label>
        <input class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4" type="password" bind:value={password} placeholder="Password" />
        <button class="bg-primary text-text cursor-pointer w-full py-4 px-7 my-7 border-none rounded-3xl hover:opacity-80" type="submit">Register</button>
        <p class="text-error underline text-lg mt-4">{errorMessage}</p>
    </div>
    </form>
</div>
