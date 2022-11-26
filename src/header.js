import { createElement } from "./utils";

function createTab(name) {
  const tab = createElement("li", {className: name.toLowerCase()});
  const button = createElement("button", {className: "link-like"});
  const text = createElement("p", {textContent: name});

  button.appendChild(text);
  tab.appendChild(button);

  return tab;
}

function createTabs(...names) {
  const tabs = createElement("ul", {className: "tabs"});
  names.forEach(title => tabs.appendChild(createTab(title)));

  return tabs;
}

export function populate() {
  const header = document.querySelector("header");

  header.appendChild(createTabs("Home", "Menu", "Events"));
}
