<script>
    import { goto } from "$app/navigation";
    import { supabase } from "../../supabase.js";

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
            // console.log("Logged in:", user);
            console.log("Logged in");
            goto("/");
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

<div
    class="header-container bg-blue-500 text-white py-4 flex justify-center items-center"
>
    <div class="ml-4 flex items-center">
        <h1 class="text-4xl font-bold">ZeeHealthy</h1>
    </div>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
    href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
    rel="stylesheet"
/>

<form class="modal-content" on:submit|preventDefault={handleSignIn}>
    <div class="container">
        <label for="email"><b>Email</b></label>
        <input type="email" bind:value={email} placeholder="Enter your email" />
        <label for="email"><b>Password</b></label>
        <input
            type="password"
            bind:value={password}
            placeholder="Enter your password"
        />
        <div class="login-register">
            <button type="submit">Login</button>
            <button type="button" onclick="window.location.href = '/register';"
                >Register</button
            >
        </div>
        <a href="placeholder">Forgot your password? Click here.</a>
        <p class="errorMessage">{errorMessage}</p>
    </div>
</form>

<style>
    :root {
        --primary-color: #012d78;
        --secondary-color: #012d787a;
        --text-color: #deeade;
        font-family: Tahoma;
    }

    input[type="email"],
    input[type="password"] {
        width: 100%;
        padding: 12px 20px;
        margin: 20px 0;
        display: inline-block;
        border: 2px solid var(--primary-color);
        border-radius: 20px;
        box-sizing: border-box;
    }

    .login-register {
        display: flex;
        justify-content: space-between;
        gap: 100px;
    }

    button {
        background-color: var(--primary-color);
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        opacity: 0.8;
    }

    .container {
        padding: 16px;
    }

    .modal-content {
        background-color: var(--secondary-color);
        margin: 5% auto 15% auto;
        border: 2px solid var(--primary-color);
        border-radius: 20px;
        width: 60%;
        height: auto;
    }

    .errorMessage {
        color: rgb(148, 42, 42);
        text-decoration: underline;
        font-size: larger;
    }
</style>
