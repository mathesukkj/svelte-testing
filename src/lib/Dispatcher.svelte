<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()

  function dispatchFunction() {
    dispatch('dispatched', {
      text: "dispatched successfully!"
    })
  }
</script>

<button on:click={dispatchFunction}>Click to dispatch!!</button>