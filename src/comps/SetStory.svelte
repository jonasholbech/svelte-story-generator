<script>
  import { state, step } from "../stores/state.js";
  import { next } from "../utils/helpers";
  import PropLabel from "./PropLabel.svelte";
  let name = "";
  let props = [];
  let propList = $state.props;

  function saveStory() {
    let saved = [];
    const propEl = document.querySelectorAll(`input:checked`);
    propEl.forEach((checkbox) => {
      const input =
        checkbox.parentElement.nextElementSibling.querySelector("input");
      saved.push({ prop: checkbox.value, value: input.value });
      checkbox.checked = false;
    });
    props = saved;
    console.log({ name, props });
    state.set({ ...$state, stories: [...$state.stories, { name, props }] });
    name = "";
    props = [];
    propList = $state.props;
  }
</script>

<h1>Define your stories</h1>

<div>
  <input type="text" bind:value={name} />
  <details open>
    <summary>Args</summary>
    {#each propList as prop, i}
      <PropLabel {prop} checked={false} />
    {/each}
  </details>
</div>

<button on:click={saveStory}>Save</button>

<button on:click={next}>Next</button>
