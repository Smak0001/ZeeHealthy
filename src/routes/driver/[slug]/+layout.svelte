<script>
</script>

<div class="back"><a href="/driver">←Back to orders</a></div>
<slot />

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
</style>
