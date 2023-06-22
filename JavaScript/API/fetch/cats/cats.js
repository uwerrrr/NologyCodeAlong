import { createCard } from "./dom-utils.js";
import getBreeds from "./data.js";
// capitalized, readonly

// function that fetches the breeds
// return data

// create a function that creates a div with a heading and a paragraph

// heading to be the breed name
// para to be the breed country

// getBreeds is async -> it returns a promise, that's why my Event listener needs another async function so I can await that promise
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector("section").innerHTML = "";
    const input = document.querySelector("#pageNo");
    const breedsData = await getBreeds(input.value);
    console.log(breedsData);
    // I awaited breedData, now I can do something with it
    // I can create a card for every single cat from breedData
    breedsData.forEach((breed) => {
        return createCard(
            document.querySelector("section"),
            breed.breed,
            breed.country
        );
    });

    input.value = "";
});
