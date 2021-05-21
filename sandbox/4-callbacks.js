// setTimeout(() => {
//     console.log("This is a callback");
// }, 1500);

// const names = ["Joe", "Andy", "Charlie"];
// const shortNames = names.filter((name) => name.length <= 4);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         };

//         callback(data);
//     }, 2000);
// };

// geocode("Los Angeles", (data) => {
//     console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    setTimeout(() => {
        const sum = x + y;
        callback(sum);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum); // Should print: 5
});

const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback("Error", undefined);
        callback(undefined, [1, 4, 7]);
    }, 2000);
};

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error);
    }

    console.log(result);
});
