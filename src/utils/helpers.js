import { state, step } from "../stores/state.js";
export function next() {
  step.update((n) => n + 1);
}
