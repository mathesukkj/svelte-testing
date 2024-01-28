<script lang="ts">
  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";

  let todos = ["a", "b", "C"];

  $: console.log(todos);

  const addTodo = (todo: string) => {
    todos = [...todos, todo]
  };
</script>

<button on:click={() => addTodo("d")}>Add todo</button>
{#each todos as todo}
<li>{todo}</li>
{/each}


<style>  
  li {
    list-style: none;
  }
</style>