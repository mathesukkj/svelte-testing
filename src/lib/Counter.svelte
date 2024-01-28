<script lang="ts">
  let count: number = 0;
  $: doubleCount = count * 2
  $: {
    if(count > 20) {
      console.log("passou de 20 kkkkkkkkkkk ce ta doooido")
    }
    console.log(count)
  }

  const increment = () => {
    count += 1;
  };
</script>

<h3>count is {count > 0 ? count : "empty!"}</h3>
<h3>{doubleCount}</h3>
<button on:click={increment}>increment!</button>
<button on:click={() => count--}>decrement!</button>
<br/>
<br/>