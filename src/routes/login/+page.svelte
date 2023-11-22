<script>
// @ts-nocheck

</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
    href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
    rel="stylesheet"
/>

<div class="header-container">
    <h1 class="header">ZeeHealthy</h1>
</div>

<div class="login-form">
    <form class="modal-content" method="post">
        <div class="container">
            <label for="name"><b>Name</b></label>
            <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
            />

            <label for="psw"><b>Password</b></label>
            <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
            />
            <div class="login-register">
                <button class="login" type="submit">Login</button>
                <button type="button" onclick="window.location.href = '/register';">Register</button>
            </div>
            <div class="remember-forgotten">
                <label>
                    <input type="checkbox" name="remember" /> Remember me
                </label>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <span class="forgotten-password"
                    ><a href="">Forgot password?</a></span
                >
            </div>
        </div>
    </form>
</div>

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

    input[type="text"],
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

    .remember-forgotten {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
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
</style>
