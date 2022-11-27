import { createElement } from "../utils";
import homeImage from "../assets/images/restaurant.jpg";

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

export function populate() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  main.appendChild(createTitles("Ohio Restaurant", "Serving excellence since 1969"));
  main.appendChild(createHomeImage(homeImage));
  main.appendChild(createCTAButton("Experience Greatness"));
}
