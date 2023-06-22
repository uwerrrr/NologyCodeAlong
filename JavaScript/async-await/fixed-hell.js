const rememberName = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input === "string") {
                resolve(input);
            } else {
                reject("That's not a name!");
            }
        }, 2000);
    });
};

const rememberLocation = (name) => {
    const locations = {
        martyna: "VIC",
        remi: "NSW",
        alex: "SA",
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (locations[name.toLowerCase()]) {
                resolve(locations[name.toLowerCase()]);
            } else {
                reject(new Error("I don't know where you live..."));
            }
        }, 4000);
    });
};

async function letTalk(input) {
    console.log("Hello...");
    const name = await rememberName(input);
    console.log(`Hi ${name}, how are you?`);
    const location = await rememberLocation(name);
    console.log(location);
    console.log(`What's the weather in ${location}`);
}

// letTalk("Martyna");

// what if we want to catch errors?

async function letsTalkWithErros(input) {
    // I can put try catch block here
    try {
        // a function that could throw an error
        console.log("Hello...");
        const name = await rememberName(input);
        console.log(`Hi ${name}, how are you?`);
        const location = await rememberLocation(name);

        if (location === "NSW") {
            throw new Error("I prefer VIC");
        }
        console.log(`What's the weather in ${location}`);
    } catch (e) {
        console.log(e, "error");
    } finally {
        console.log("Great chat");
    }
}

letsTalkWithErros("Remi");
