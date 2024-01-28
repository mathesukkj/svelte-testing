<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Todos from "./lib/Todos.svelte";


  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";
</script>

<img {src} alt="svelte" />
<h1>{@html text}</h1>

<Todos />
<style>
  h1 {
    color: orange;
  }
</style>
