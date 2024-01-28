<script lang="ts">
  import getFakeFetch from "./api/getFakeFetch";

  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";

  let response = getFakeFetch()
</script>

<img {src} alt="svelte" />
<h1>{@html text}</h1>

{#await response}
...loading
{:then response}
<p>The response is: {response}</p>
{:catch error}
<p>Error! {error}</p>
{/await}

<style>
  h1 {
    color: orange;
  }
</style>
