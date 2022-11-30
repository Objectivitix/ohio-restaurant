import { capitalize, clearElement, createElement } from "./utils";
import * as home from "./pages/home";
import * as menu from "./pages/menu";
import * as events from "./pages/events";

function createTab(name) {
  const tab = createElement("li", {dataset: {name}});
  const button = createElement("button", {className: "link-like"});
  const text = createElement("p", {textContent: capitalize(name)});

  button.appendChild(text);
  tab.appendChild(button);

  return tab;
}

function createTabs(...names) {
  const tabs = createElement("ul", {className: "tabs"});
  names.forEach(title => tabs.appendChild(createTab(title)));

  return tabs;
}

function bindTab(container, name, callbackFn) {
  const tabButton =
    container.querySelector(`[data-name="${name}"] > button`);

  tabButton.addEventListener("click", callbackFn);
}

function populate(element) {
  element.appendChild(createTabs("home", "menu", "events"));
}

function bind(element) {
  bindTab(element, "home", home.set);
  bindTab(element, "menu", menu.set);
  bindTab(element, "events", events.set);
}

export function set() {
  const header = document.querySelector("header");

  clearElement(header);
  populate(header);
  bind(header);
}
