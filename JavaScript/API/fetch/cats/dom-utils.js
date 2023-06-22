export const createCard = (parent, catName, catCountry) => {
    const div = document.createElement("div");
    div.className = "card";
    const heading = document.createElement("h3");
    const nameText = document.createTextNode(catName);
    heading.appendChild(nameText);
    const para = document.createElement("p");
    const countryText = document.createTextNode(catCountry);
    para.appendChild(countryText);
    div.appendChild(heading);
    div.appendChild(para);
    parent.appendChild(div);
};
