<script>
  export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ul>
  {#each data.clientes as {nombre, dni}}
    <li>Nombre: {nombre}, DNI: {dni}</li>
  {/each}
</ul>