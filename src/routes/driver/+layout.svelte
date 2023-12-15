<script>
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
  rel="stylesheet"
/>

<div class="header-container">
  <h1 class="header underline">ZeeHealthy</h1>
  <nav>
    <a class="navlink" href="/">Home</a>
    <a class="navlink" href="/shop">Shop</a>
    <a class="navlink" href="/chat">Chat</a>
    <a class="navlink" href="/driver">Orders</a>
  </nav>
</div>
<div class="content-container">
  <div class="content">
    <slot />
  </div>
</div>

<style>
  :root {
    --primary-color: #012d78;
    --secondary-color: #012d787a;
    --text-color: #deeade;
  }

  .header-container {
    background: var(--primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 0 20px 0 20px;
  }

  .header {
    color: var(--text-color);
    font-family: Tahoma;
  }

  .navlink {
    color: var(--text-color);
    font-family: Tahoma;
    text-decoration: none;
    margin: 20px;
  }
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .back {
    position: absolute;
    left: 20px;
    top: 100px;
  }

  .back a {
    text-decoration: none;
    color: grey;
  }
</style>
