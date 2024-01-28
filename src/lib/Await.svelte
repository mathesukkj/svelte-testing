<script lang="ts">
  import getFakeFetch from "../api/getFakeFetch";

  let response = getFakeFetch()
</script>


{#await response}
...loading
{:then response}
<p>The response is: {response}</p>
{:catch error}
<p>Error! {error}</p>
{/await}