<script>
    let farmers = [
    { name: 'Oest Farm & Stay', location: 'Zuidweg 6, 4389 VG Ritthem', specialization: 'Vegetables', rating: 4.5 },
    { name: 'Zorg- en Kaasboerderij Pitteperk', location: 'Breeweg 21, 4371 SB Koudekerke', specialization: 'Livestock', rating: 3.8 },
    { name: 'Kippenboerderij Sturm', location: 'Frederik Barbarossaweg 1, 4364 SG Grijpskerke', specialization: 'Livestock', rating: 4.2 },
    { name: 'Tuinenburg', location: 'Wilgenhoekweg 37, 4333 RG Middelburg', specialization: 'Vegetables', rating: 4.7 },
    { name: 'Alpaca Care', location: 'Koestraat 35, 4331 KX Middelburg', specialization: 'Livestock', rating: 3.2 },
    { name: 'J. van Wallenburg', location: 'Oude Veerseweg 128, 4332 SJ Middelburg', specialization: 'Meat', rating: 4.1 },
  ];
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
  rel="stylesheet"
/>

<div
  class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
>
<div class="ml-4">
  <h1 class="text-4xl font-bold">ZeeHealthy</h1>
</div>
<h1 class="text-2xl font-bold">Shop</h1>
<nav class="flex justify-end items-center mr-4">
  <a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
  <a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
  <a href="/shoppingCart" class="text-white hover:text-gray-300 mr-4">Cart</a>
  <a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
  <a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a>
  <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
  
  <!-- <button class="text-white hover:text-gray-300" on:click={handleLogout}
    >Logout</button> -->
</nav>
</div>
<div class="content-container">
  <div class="header-container">
    <h1>List of ZeeHealthy Farmers</h1>
    <button><i class="fa-regular fa-floppy-disk"></i><p>Save</button>
    <!-- <slot/> -->
  </div>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th>Farmer Name</th>
          <th>Farmer Location</th>
          <th>Specialization</th>
          <th>AVG Consumer Rating</th>
        </tr>
      </thead>
      <tbody>
        {#each farmers as farmer}
          <tr>
            <td>{farmer.name}</td>
            <td>{farmer.location}</td>
            <td>{farmer.specialization}</td>
            <td>{farmer.rating}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <main>

  </main>
  <div class="enterFarmer">
    <button>Add</button>
  </div>
</div>

<style>
  :root {
    --primary-color: #012d78;
    --secondary-color: #012d787a;
    --text-color: #deeade;
  }

  .navbar-container {
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
    flex-direction: column;
    min-height: 100vh;
    gap: 24px;
    padding: 24px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

    .header-container button {
        background: var(--secondary-color);
        color: var(--text-color);
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .header-container button i {
        font-size: 1.1rem;
    }

    .header-container button:hover {
        opacity: 0.8;
        background: var(--primary-color);
    }

  main{
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  /* .enterFarmer{
    display: flex;
    align-items: stretch;
    border: 1px solid #012d78;
    border-radius: 5px;
    overflow: hidden;
  }

  .enterFarmer input{
    background: transparent;
    border: none;
    padding: 14px;
    color: black;
    flex: 1;
  }

  .enterFarmer input:focus{
    outline: none;
  } */

  .enterFarmer button{
    padding: 0 14px;
    background: white;
    border: none;
    color: white;
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;
  }

  .enterFarmer button:hover{
    background: var(--secondary-color);
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

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #012d78;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  tr:nth-child(even) {
    background-color: var(--secondary-color);
  }
</style>
