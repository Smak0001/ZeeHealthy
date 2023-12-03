<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="content">
  <h1 class="content-header">Choose driver (test)</h1>
  {#each data.drivers as { id }}
    <div class="driver" {id}>
      <div class="driver-button-container">
        <a href="driver/{id}/orders"
          ><button class="driver-button">{id}</button></a
        >
      </div>
    </div>
  {/each}
</div>

<style>
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  .content-header {
    color: var(--primary-color);
    font-size: 2.5em;
  }

  .driver {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 30%;
    max-width: 50%;
    background: var(--secondary-color);
    color: var(--text-color);
    font-family: Tahoma;
    border: 5px groove var(--primary-color);
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
  }

  .driver-button-container {
    width: 100%;
    align-self: center;
    display: flex;
    justify-content: center;
  }

  .driver-button {
    width: 80px;
    cursor: pointer;
    background: var(--secondary-color);
    color: var(--text-color);
    font-family: Tahoma;
    padding: 10px;
    border: none;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
    align-self: center;
  }

  .driver-button:hover {
    background: var(--primary-color);
    transform: scale(1.1);
  }
</style>
