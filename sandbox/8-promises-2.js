const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

// add(1, 2)
//     .then((sum) => {
//         console.log(sum);
//         add(sum, 2)
//             .then((sumTwo) => {
//                 console.log(sumTwo);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

add(1, 2)
    .then((sum) => {
        console.log(sum);
        return add(sum, 4);
    })
    .then((sumTwo) => {
        console.log(sumTwo);
    })
    .catch((err) => {
        console.log(err);
    });
