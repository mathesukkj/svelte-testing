<script lang="ts">
  let count: number = 0;
  $: doubleCount = count * 2
  $: {
    console.log(count)
  }

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>increment!</button>
<button on:click={() => count--}>decrement!</button>

<h3>count is {count > 0 ? count : "empty!"}</h3>
<h3>doubled: {doubleCount}</h3>

{#if count > 10}
<div>count passou de 10!!!!!!!! insano demais!</div>
{:else}
<div>count nao passou dos 10 ainda kkkkkkkkkkk NEWBAO</div>
{/if}
