<script>
  export let prop;
  export let checked = false;
</script>

<label><input type="checkbox" bind:checked value={prop} /> {prop}</label>
{#if checked}
  <label>Default Value <input type="text" /></label>
{/if}
