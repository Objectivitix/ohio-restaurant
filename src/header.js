import { createElement, capitalize } from "./utils";
import * as home from "./pages/home";
import * as menu from "./pages/menu";
import * as events from "./pages/events";

const tabBindings = {};
let currentTab;

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

function unbindTabs(tabs) {
  tabs.forEach(tab => tab.querySelector("button")
    .removeEventListener("click", tabBindings[tab.dataset.name]));
}

function bindTabs(tabs) {
  tabs.forEach(tab => {
    const name = tab.dataset.name;

    if (name === currentTab) return;

    tab.querySelector("button")
      .addEventListener("click", tabBindings[name]);
  });
}

function addTabBinding(tabs, name, callbackFn) {
  tabBindings[name] = function() {
    currentTab = name;
    callbackFn();
    unbindTabs(tabs);
    bindTabs(tabs);
  }
}

export function populate() {
  const header = document.querySelector("header");

  header.appendChild(createTabs("home", "menu", "events"));
}

export function bind() {
  const header = document.querySelector("header");
  const tabs = header.querySelectorAll("li");

  addTabBinding(tabs, "home", home.populate);
  addTabBinding(tabs, "menu", menu.populate);
  addTabBinding(tabs, "events", events.populate);

  bindTabs(tabs);
}
