const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // If resolve is called, the promise is fulfilled.
        // resolve([1, 4, 7]);
        // If reject is called, the promise is rejected.
        reject("Error!");
    }, 2000);
});

// .then() only runs if the promise is fulfilled.
// .catch() only runs if the promise is rejected.
doWorkPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
