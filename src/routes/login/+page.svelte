<script>
    import { goto } from "$app/navigation";
    import { supabase } from "../../lib/supabase.js";
    import "../../app.css"

    let email = "";
    let password = "";
    let errorMessage = "";

    const handleSignIn = async () => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;
            console.log("Logged in:", email);
            goto('/');
        } catch (error) {
            errorMessage = error.message;
        }
    };
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
    href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
    rel="stylesheet"
/>

<div class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6">
    <h1 class="text-text font-bold text-4xl">ZeeHealthy</h1>
</div>
<div class="flex items-center justify-center p-5">
    <form class="w-3/5 h-auto bg-secondary mt-11 border-4 border-primary rounded-3xl" on:submit|preventDefault={handleSignIn}>
    <div class="p-16 mt-4">
        <h3 class="mb-5 font-bold text-lg">Please fill in this form to sign in!</h3>
        <label for="email"><b>Email</b></label>
        <input class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4" type="email" bind:value={email} placeholder="Enter your email" />
        <label for="email"><b>Password</b></label>
        <input class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4" type="password" bind:value={password} placeholder="Enter your password" />
        <div class="flex justify-between gap-2.5">
            <button class="bg-primary text-text cursor-pointer w-full py-4 px-7 my-7 border-none rounded-3xl hover:opacity-80" type="submit">Login</button>
            <button class="bg-primary text-text cursor-pointer w-full py-4 px-7 my-7 border-none rounded-3xl hover:opacity-80" type="button" onclick="window.location.href = '/register';">Register</button>
        </div>
        <a class="text-primary underline text-base" href="">Forgot your password? Click here.</a>
        <p class="text-error underline text-lg mt-4">{errorMessage}</p>
    </div>
    </form>
</div>
