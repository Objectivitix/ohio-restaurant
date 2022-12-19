function popProperty(obj, prop) {
  const value = obj?.[prop];

  delete obj?.[prop];

  return value;
}

export function createElement(tagName, attributes) {
  const el = document.createElement(tagName);

  const className = popProperty(attributes, "className");
  const classList = popProperty(attributes, "classList");
  const dataset = popProperty(attributes, "dataset");

  if (className)
    el.classList.add(className);
  else if (classList)
    classList.forEach(klass => el.classList.add(klass));

  if (dataset)
    for (const key in dataset)
      el.dataset[key] = dataset[key];

  for (const attribute in attributes) {
    el[attribute] = attributes[attribute];
  }

  return el;
}

export function createTitles(title, slogan) {
  const titles = createElement("div", {className: "page-titles"});
  const h1 = createElement("h1", {textContent: title});
  const p = createElement("p", {textContent: slogan});

  titles.appendChild(h1);
  titles.appendChild(p);

  return titles;
}

export function capitalize(string) {
  return string[0].toUpperCase()
    + string.slice(1).toLowerCase();
}

export function clearElement(el) {
  el.innerHTML = "";
}
