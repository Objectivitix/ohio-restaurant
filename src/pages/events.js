import { clearElement, createElement, createTitles } from "../utils";

import masFeastImage from "../assets/images/events/mas-feast.jpg";
import annusNovusImage from "../assets/images/events/annus-novus.jpg";
import pteggokrioImage from "../assets/images/events/pteggokrio.jpg";
import odysseyImage from "../assets/images/events/odyssey.jpg";

function createEventInfo(name, time) {
  const info = createElement("div");

  const h2 = createElement("h2", {textContent: name});
  const h3 = createElement("h3", {textContent: time});

  info.appendChild(h2);
  info.appendChild(h3);

  return info;
}

function createEventBody(name, time, description) {
  const eventBody = createElement("div", {className: "body"});

  const info = createEventInfo(name, time);
  const p = createElement("p", {textContent: description});
  const button = createElement("button", {textContent: "Make A Reservation"});

  eventBody.appendChild(info);
  eventBody.appendChild(p);
  eventBody.appendChild(button);

  return eventBody;
}

function createEvent(image, name, time, description) {
  const event = createElement("li");

  const img = createElement("img", {src: image});
  const eventBody = createEventBody(name, time, description);

  event.appendChild(img);
  event.appendChild(eventBody);

  return event;
}

function createEventList(...events) {
  const eventList = createElement("ul", {className: "events-list"});

  events.forEach(event => eventList.appendChild(event));

  return eventList;
}

function populate(element) {
  const masFeast = createEvent(masFeastImage, "'Mas Feast", "December 24, 2022, 17:00~22:30", "An annual tradition at Ohio Restaurant, the 'Mas Feast returns this Christmas Eve grander than ever. Relish fifty delectable courses designed to enlighten the taste buds, and enjoy stunning performances guaranteed to blow you away.");
  const annusNovus = createEvent(annusNovusImage, "Annus Novus", "December 31, 2022 21:00~01:00", "Stride into 2023 with style. Preeminent chefs from around the world converge to serve you the best New Year Eve's dinner you will have ever had. Gastronomy awaits! (And yes, there will be fireworks. Ample fireworks.)");
  const pteggokrio = createEvent(pteggokrioImage, "Pteggokrio's Night", "Februrary 18, 2023, 19:30~01:30", "Pteggokrio's Night is an exclusive otherworldly experience offered when The Eight sacred celestial bodies align. Fourteen fortunate guests will be drawn to participate in this true once-in-a-lifetime spectacle.");
  const odyssey = createEvent(odysseyImage, "Odyssey", "May 3, 2023, 16:00~00:00", "8 hours. 100 courses. 1 surprise. An omakase like no other. Further description would be profanation.");

  const eventList = createEventList(masFeast, annusNovus, pteggokrio, odyssey);

  const wrapper = createElement("div", {className: "vertical-scroll-wrapper"});
  wrapper.appendChild(eventList);

  element.appendChild(createTitles("Major Events", "Special occasions call for special delights"));
  element.appendChild(wrapper);
}

export function set() {
  const main = document.querySelector("main");

  clearElement(main);
  populate(main);
}
