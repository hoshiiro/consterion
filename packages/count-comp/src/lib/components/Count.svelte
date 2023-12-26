<script>
  let count = 0;

  function addCount() {
    count += 1;
  }
</script>

<p>Count is {count}</p>

<button on:click={addCount}>Add count</button>

<style>
  p { color: goldenrod; }
</style>
