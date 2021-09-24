<script>
  import { state, step } from "../stores/state.js";

  function next() {
    step.update((n) => n + 1);
  }
  function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  }
  function sanitizeComponentName(str) {
    str = upperCaseFirst(str);
    return str
      .split(" ")
      .map((part) => upperCaseFirst(part))
      .join("");
  }
  function input(e) {
    state.set({ ...$state, name: sanitizeComponentName(e.target.value) });
  }
</script>

<h1>Name your component</h1>
<h2>&lt;{$state.name != undefined ? $state.name : ""}&nbsp;/&gt;</h2>
<input type="text" on:input={input} />
<button on:click={next}>Next</button>
