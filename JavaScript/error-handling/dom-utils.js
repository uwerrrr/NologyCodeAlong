export const createTextEl = (elType, textVal, parent, classes = []) => {
    const newEl = document.createElement(elType);
    classes.forEach((c) => newEl.classList.add(c));
    const text = document.createTextNode(textVal);
    newEl.appendChild(text);
    parent.appendChild(newEl);
};
