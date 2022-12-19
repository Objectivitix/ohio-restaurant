import { clearElement, createElement, createTitles } from "../utils";
import * as menu from "./menu";

import homeImage from "../assets/images/restaurant.jpg";

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

function populate(element) {
  element.appendChild(createTitles("Ohio Restaurant", "Serving excellence since 1969"));
  element.appendChild(createHomeImage(homeImage));
  element.appendChild(createCTAButton("Experience Greatness"));
}

function bind(element) {
  const button = element.querySelector(".cta-button");

  button.addEventListener("click", menu.set);
}

export function set() {
  const main = document.querySelector("main");

  clearElement(main);
  populate(main);
  bind(main);
}
