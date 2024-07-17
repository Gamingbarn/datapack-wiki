import { browser } from "$app/environment";
import { readable, writable } from "svelte/store";

// place files you want to import through the `$lib` alias in this folder.
export const sidebarExpanded = writable(browser ? window.innerWidth > 768 : true);

export const windowWidth = readable(1920, set => {
  if (browser) {
    set(window.innerWidth);
    addEventListener("resize", () => set(window.innerWidth));
  }
});
