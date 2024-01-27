<script lang="ts">
  import Counter from "./lib/Counter.svelte";

  let src = "./src/assets/svelte.svg"
  let text = "<h2>state</h2>"
</script>


<img {src} alt="svelte" />
<h1>{@html text}</h1>
<Counter />

<style>
  h1 {
    color: orange
  }
</style>