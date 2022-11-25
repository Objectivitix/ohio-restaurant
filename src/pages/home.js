import { createElement } from "../utils";
import homeImage from "../assets/images/restaurant.jpg";

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

function createTitles(title, slogan) {
  const titles = createElement("div", {className: "titles"});
  const h1 = createElement("h1", {textContent: title});
  const p = createElement("p", {textContent: slogan});

  titles.appendChild(h1);
  titles.appendChild(p);

  return titles;
}

function createHomeImage(image) {
  const img = createElement("img",
    {className: "home-image", src: image});

  return img;
}

function createCTAButton(phrase) {
  const button = createElement("button",
    {classList: ["cta-button", "link-like"], textContent: phrase});

  return button;
}

export default function createHomePage() {
  const container = document.querySelector(".content");

  container.appendChild(createTabs("Home", "Menu", "Events"));
  container.appendChild(createTitles("Ohio Restaurant", "Serving excellence since 1969"));
  container.appendChild(createHomeImage(homeImage));
  container.appendChild(createCTAButton("Experience Greatness"));
}