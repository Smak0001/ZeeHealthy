<script>
    import { goto } from "$app/navigation";
    import { supabase } from "../../supabase.js";

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

<div class="header-container">
    <h1 class="header">ZeeHealthy</h1>
</div>

<a href="/login">← Back to login</a>

<form class="modal-content" on:submit|preventDefault={handleSignUp}>
    <div class="container">
        <h1>Sign up</h1>
        <p>Please fill in this form to create an account!</p>
        <label for="email"><b>Email</b></label>
        <input type="email" bind:value={email} placeholder="Email" />
        <label for="password"><b>Password</b></label>
        <input type="password" bind:value={password} placeholder="Password" />
        <button type="submit">Register</button>
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

    .header-container {
        background: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        margin-bottom: 20px;
        padding: 0 20px 0 20px;
    }

    .header {
        color: var(--text-color);
    }

    a {
        color: #012d78;
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

    button {
        background-color: var(--primary-color);
        color: var(--text-color);
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
        margin: 5% auto;
        border: 2px solid var(--primary-color);
        border-radius: 20px;
        width: 60%;
        height: auto;
    }

    .errorMessage {
        color: rgb(148, 42, 42);
        text-decoration: underline;
        font-weight: bolder;
        font-size: larger;
    }
</style>
