export function createElement(tagName, attributes) {
  const el = document.createElement(tagName);

  for (const attribute in attributes) {
    el[attribute] = attributes[attribute];
  }

  const className = attributes?.className;
  const classList = attributes?.classList;

  if (className)
    el.classList.add(className);
  else if (classList)
    classList.forEach(klass => el.classList.add(klass));

  return el;
}
