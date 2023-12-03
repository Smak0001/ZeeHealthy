<script>
  import { page } from "$app/stores";
</script>

<div class="back"><a href="/driver/">←Back to drivers</a></div>

<h1 class="error">Error {$page.status}</h1>

<h1 class="message">{$page.error?.message}</h1>

<style>
  .back {
    position: absolute;
    left: 20px;
    top: 100px;
  }

  .back a {
    text-decoration: none;
    color: grey;
  }

  .back a:hover {
    text-decoration: underline;
  }
  .error {
    margin-top: 25vh;
    font-family: Tahoma;
    color: var(--primary-color);
  }

  .message {
    color: var(--secondary-color);
  }
</style>
