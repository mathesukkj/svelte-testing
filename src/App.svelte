<script lang="ts">
  import Dispatcher from "./lib/Dispatcher.svelte";

  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";

  function handleDispatch(e: any) {
    alert(e.detail.text)
  }
</script>

<img {src} alt="svelte" />
<h1>{@html text}</h1>

<Dispatcher on:dispatched={handleDispatch} />

<style>
  h1 {
    color: orange;
  }
</style>
