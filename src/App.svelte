<script lang="ts">
  import type { ShowPropsProps } from "./@types/ShowProps";
import ShowProps from "./lib/ShowProps.svelte";

  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";

  let propsToShow: ShowPropsProps = {
    number: 10,
    text: "hii"
  }
</script>

<img {src} alt="svelte" />
<h1>{@html text}</h1>
<ShowProps props={propsToShow} />

<style>
  h1 {
    color: orange;
  }
</style>
