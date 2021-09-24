<script>
  import SetName from "./comps/SetName.svelte";
  import SetProps from "./comps/SetProps.svelte";
  import SetStory from "./comps/SetStory.svelte";
  import { state, step } from "./stores/state.js";
</script>

{JSON.stringify($state, null, 2)}
<main>
  {#if $step === 1}
    <SetName />
  {/if}
  {#if $step === 2}
    <SetProps />
  {/if}
  {#if $step === 3}
    <SetStory />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
