<script lang="ts">
  import { count } from "../stores/stores"

  let count_value: number;

  count.subscribe((value: number) => count_value = value)

  let doubleCount: number;
  $: {
    doubleCount = count_value * 2
    console.log(count_value)
  }

  const increment = () => {
    count.update(n => n + 1)
  };
</script>

<button on:click={increment}>increment!</button>
<button on:click={() => count_value--}>decrement!</button>

<h3>count is {count_value > 0 ? count_value : "empty!"}</h3>
<h3>doubled: {doubleCount}</h3>

{#if count_value > 10}
<div>count passou de 10!!!!!!!! insano demais!</div>
{:else}
<div>count nao passou dos 10 ainda kkkkkkkkkkk NEWBAO</div>
{/if}
