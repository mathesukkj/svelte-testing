<script lang="ts">
  import type { ShowPropsProps } from "../@types/ShowProps";

  export let props: ShowPropsProps = {
    number: 0,
    text: "default-text"
  }
</script> 

<p>text: {props.text}; number: {props.number}</p>