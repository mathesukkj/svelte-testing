<script lang="ts">
  import Lifecycle from "./lib/Lifecycle.svelte";

  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";
</script>

<img {src} alt="svelte" />
<h1>{@html text}</h1>

<Lifecycle />

<style>
  h1 {
    color: orange;
  }
</style>
