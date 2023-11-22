<script>
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

<form class="modal-content" action="/action_page.php">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter name" name="name" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

      <div class="clearfix">
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
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
</style>
