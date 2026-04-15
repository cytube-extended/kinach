import { mount } from "svelte";
import Counter from "./Counter.svelte";

export const mountSvelteComponent = () => {
  const target = document.createElement("div");
  target.id = "svelte-container";

  const counter = mount(Counter, { target });

  const btn = document.createElement("button");
  btn.textContent = "Add +5";
  btn.addEventListener("click", function () {
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
  });

  document.body.appendChild(target);
  document.body.appendChild(btn);
};
