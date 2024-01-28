<script lang="ts">
  import Input from "./lib/Input.svelte";

  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";

</script>

<img {src} alt="svelte" />
<h1>{@html text}</h1>

<Input/>

<style>
  h1 {
    color: orange;
  }
</style>
