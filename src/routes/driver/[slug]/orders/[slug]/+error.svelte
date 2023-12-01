<script>
  import { page } from "$app/stores";
</script>

<h1 class="error">Error {$page.status}</h1>

<h1 class="message">{$page.error?.message}</h1>

<style>
  .error {
    margin-top: 25vh;
    font-family: Tahoma;
    color: var(--primary-color);
  }

  .message {
    color: var(--secondary-color);
  }
</style>
