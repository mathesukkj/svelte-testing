<script lang="ts">
  let mousePosition = {x: 0, y: 0}

  const pointerMove = ({x, y}: {x: number, y: number}) => {
    mousePosition = {x, y}
  }
</script>

<p>The mouse is at x: {mousePosition.x} y: {mousePosition.y}</p>

<div on:mousemove|once={pointerMove} aria-hidden="true" />

<style>
  div {
    min-height: 100vh;
    min-width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
</style>