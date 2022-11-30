import { clearElement } from "../utils";

function populate(element) {
  element.textContent = "hi from events";
}

export function set() {
  const main = document.querySelector("main");

  clearElement(main);
  populate(main);
}
