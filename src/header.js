import { createElement } from "./utils";
import * as home from "./pages/home";
import * as menu from "./pages/menu";
import * as events from "./pages/events";

const TAB_BINDING_MAP = {};

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

function unbindTabs(tabs) {
  tabs.forEach(tab => tab.querySelector("button")
    .removeEventListener("click", TAB_BINDING_MAP[tab.classList[0]]));
}

function bindOtherTabs(tabs, selectedTab) {
  tabs.forEach(tab => {
    if (tab.classList[0] !== selectedTab.classList[0])
      tab.querySelector("button")
        .addEventListener("click", TAB_BINDING_MAP[tab.classList[0]]);
  });
}

function bindTab(header, tabName, callbackFn) {
  const tabs = header.querySelectorAll("li");

  const className = tabName.toLowerCase();
  const selectedTab = header.querySelector(`.${className}`);

  TAB_BINDING_MAP[className] = callbackFn;

  selectedTab
    .querySelector("button")
    .addEventListener("click", () => {
      callbackFn();
      unbindTabs(tabs);
      bindOtherTabs(tabs, selectedTab);
    });
}

export function populate() {
  const header = document.querySelector("header");

  header.appendChild(createTabs("Home", "Menu", "Events"));

  bindTab(header, "Home", home.populate);
  bindTab(header, "Menu", menu.populate);
  bindTab(header, "Events", events.populate);
}
