<script lang="ts">
  import { onMount } from "svelte";

  $: arr = ["1", "dois", "three", "ntyhjgiujojniotjynoitjnoitj skyrim"]

  onMount(() => {
    console.log(arr)  
  })

  function addToArray() {
    arr = [...arr, "quaaatro"]
  }
</script>

<button on:click={addToArray}>BOTAO</button>