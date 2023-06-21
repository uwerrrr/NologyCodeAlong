// promise hell
// we end up with some kind of computation where one result depends on some previous result
// we have a async process that relies on the result of another async process

// .then is the only place to access the value

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

// rememberName(2372264)
//     .then((name) => console.log(name))
//     .catch((e) => console.log(e));

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
        }, 1500);
    });
};

// we will re-write this with async await

rememberName("Cal")
    .then((name) => {
        console.log(`Hi ${name}, how are you?`);
        rememberLocation(name)
            .then((location) => {
                console.log(`What's the weather in ${location}`);
                /// call it here if the functon eeds location
                // someOtherFunction(location).then(() => {})
            })
            .catch((e) => console.log(e, "error from inner .then"));
    })
    .catch((e) => console.log(e));
