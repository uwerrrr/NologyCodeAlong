const createEl = (el, textVal, parent) => {
    const newEl = document.createElement(el);
    const textNode = document.createTextNode(textVal);
    newEl.appendChild(textNode);
    parent.appendChild(newEl);
};

export const changeColour = () => {};

// only one default export per file
export default createEl;
