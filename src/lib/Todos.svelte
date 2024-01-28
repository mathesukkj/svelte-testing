<script lang="ts">
  let src = "./src/assets/svelte.svg";
  let text = "<h2>state</h2>";

  let todos: string[] = [];

  $: console.log(todos);

  const addTodo = (todo: string) => {
    todos = [...todos, todo]
  };
</script>

<button on:click={() => addTodo(Math.random().toFixed(4))}>Add todo</button>
{#each todos as todo (todo)}
<li>{todo}</li>
{/each}

<style>  
  li {
    list-style: none;
  }
</style>