<script>
  import { state, step } from "../stores/state.js";
  let value = "";
  function next() {
    state.set({ ...$state, props: value.split("\n") });
    console.log($state);
    step.update((n) => n + 1);
  }
</script>

<h1>Will your component receive props?</h1>
<p>Add one per line</p>
<textarea bind:value />

<button on:click={next}>Next</button>
