import { clearElement, createElement, createTitles } from "../utils";
import versImage from "../assets/images/menu/00-vers.jpg";
import melancholyImage from "../assets/images/menu/01-melancholy.jpg";
import soupImage from "../assets/images/menu/02-soup.png";
import boatImage from "../assets/images/menu/03-boat.png";
import sorbetImage from "../assets/images/menu/04-sorbet.jpg";
import neveritaImage from "../assets/images/menu/05-neverita.png";
import nocturneImage from "../assets/images/menu/06-nocturne.jpg";
import ratatouilleImage from "../assets/images/menu/07-ratatouille.png";
import kraftImage from "../assets/images/menu/08-kraft.png";
import messImage from "../assets/images/menu/09-mess.png";
import webdevImage from "../assets/images/menu/10-webdev.gif";
import desertsImage from "../assets/images/menu/11-deserts.gif";

function createCourse(title, image, name, description) {
  const course = createElement("li");

  const img = createElement("img", {src: image});
  const h3 = createElement("h3", {textContent: name});
  const p = createElement("p", {textContent: description});

  course.appendChild(img);
  course.appendChild(h3);
  course.appendChild(p);

  return course;
}

function createMenu(...courseGroups) {
  const menu = createElement("ul", {className: "tasting-menu"});

  courseGroups.forEach(courseGroup => {
    courseGroup.forEach(course => menu.appendChild(course));
    menu.appendChild(createElement("hr"));
  });

  menu.lastElementChild.remove();

  return menu;
}

function populate(element) {
  const vers = createCourse("Amuse-bouche", versImage, "Vers et Mer", "Island Creek oysters, Sterling white sturgeon caviar, lime scented crème fraîche, French breakfast radishes, lumbricus terrestris, taenia saginata, eisenia fetida, triple-smoked turnip cream");
  const melancholy = createCourse("First Course", melancholyImage, "Melancholy", "Salt baked yams, 168-hour dry-aged lamb, sungold tomatoes, shishito peppers, squash blossom pesto, smoked balsamic demiglaze, tears of shattered dreams");
  const soup = createCourse("Second Course", soupImage, "Good Soup", "Bonito gelée, cauliflower flourettes, compressed summer melon, Santa Barbara sea urchin, navel orange, Italian parsley, butter milk biscuits, scarlett peppers, Chef's Secret Sauce™");
  const boat = createCourse("Third Course", boatImage, "On a Boat, Underground", "English walnuts, celery branch, locust grove apricot compote, flowering thyme, serrano ham, essence of the multiversal plane, toasted sunflower seeds, champagne granité");
  const sorbet = createCourse("Palate Cleanser", sorbetImage, "Mint Sorbet", "Spanish mint, mineralised brown sugar, uranium-235");
  const neverita = createCourse("Fourth Course", neveritaImage, "Yo Estoy Puesto Pa Ti", "Y tú te me quita' / Diablo, qué piquete la chamaquita / El corazón lo puso en la neverita / Dice que este verano se queda solita...");
  const nocturne = createCourse("Fifth Course", nocturneImage, "Nocturne", "Tellicherry shortbread, poached rhubarb, Granny Smith apples, wagyu filet mignon, vanilla custard, blis maple syrup gelée, charred eggplants, Croatian truffle reduction");
  const ratatouille = createCourse("Sixth Course", ratatouilleImage, "Ratatouille on Steroids", "Frogs Hollow Farm's peaches, picholine olive, greenmarket soy beans, wilted spinach, toasted oats, ris de veau, pickled quail egg, Ossetra caviar");
  const kraft = createCourse("Palate Cleanser", kraftImage, "Kraft Singles", "just Kraft Singles");
  const mess = createCourse("Seventh Course", messImage, "Sous-Chef Jeremy's \"The Mess\"", "Roasted Italian bone marrow, Ohio beef, ketchup, black garlic emulsion, microgreens, assorted blood, bird of Twitter, desalinated air, time itself");
  const webdev = createCourse("Supplemental Course", webdevImage, "Average Web Development W", "[object Object], \"How do I center a div?\", position: gtfo, this, <marquee>");
  const deserts = createCourse("Final Course", desertsImage, "Assorted Deserts", "fruit, ice cream, chocolate, French macarons, whiskey caramel, Ramsay's Lamb Sauce™, Pythagorean theorem, sun, Æ, life, everything");

  const menu = createMenu(
    [vers],
    [melancholy, soup, boat, sorbet],
    [neverita, nocturne, ratatouille, kraft],
    [mess, webdev, deserts],
  );

  const wrapper = createElement("div", {className: "menu-wrapper"});
  wrapper.appendChild(menu);

  element.appendChild(createTitles("Chef's Tasting Menu", "Do not eat; savour."));
  element.appendChild(wrapper);
}

export function set() {
  const main = document.querySelector("main");

  clearElement(main);
  populate(main);
}
