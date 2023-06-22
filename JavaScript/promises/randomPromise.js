// a function that randomly rejects or resolves a promise

// Random dinner generator

const meals = [
    {
        name: "Pizza",
        type: "dinner",
    },
    {
        name: "Oats",
        type: "breakfast",
    },
    {
        name: "Fried eggs",
        type: "breakfast",
    },
    {
        name: "Roast chicken",
        type: "dinner",
    },
    {
        name: "Sandwich",
        type: "lunch",
    },
    {
        name: "Pasta",
        type: "dinner",
    },
];

const randomFood = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // how do I generate numbers that are in bounds for my array?
            const randomIndex = Math.floor(Math.random() * arr.length);
            if (arr[randomIndex].type === "dinner") {
                resolve(arr[randomIndex]);
            } else {
                reject("Sorry, no dinner tonight");
            }
        }, 2000);
    });
};

// randomFood(meals)
//     .then((val) => console.log(val))
//     .catch((e) => console.log(e));

const btn = document.querySelector("button");
const resultDiv = document.querySelector("#result");
const loading = document.querySelector("h2");
// console.log(loading);

btn.addEventListener("click", () => {
    // I want to show the user that things are happening -> I am waiting for a promise to stop pending

    if (document.querySelector("p")) {
        resultDiv.removeChild(document.querySelector("p"));
    }

    if (document.querySelector("h3")) {
        resultDiv.removeChild(document.querySelector("h3"));
    }

    loading.innerText = "Loading...";

    randomFood(meals)
        .then((meal) => {
            console.log(meal);
            // if things go well, I want to add an h3 with the name of dinner

            const heading = document.createElement("h3");
            const textNode = document.createTextNode(meal.name);
            heading.appendChild(textNode);
            resultDiv.appendChild(heading);
        })
        .catch((e) => {
            // add the code that runs when a promise is rejected

            const errorPara = document.createElement("p");
            const errorMsg = document.createTextNode(e);

            errorPara.appendChild(errorMsg);
            resultDiv.appendChild(errorPara);
        })
        .finally(() => {
            loading.innerText = "";
        });
});
