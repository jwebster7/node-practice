const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Numbers must be non-zero!");
            }
            resolve(a + b);
        }, 2000);
    });
};

const doWork = async () => {
    const sum = await add(1, 99);
    const sumTwo = await add(sum, -25);
    const sumThree = await add(sumTwo, 25);
    return sumThree;
};

doWork()
    .then((result) => {
        console.log("result", result);
    })
    .catch((err) => {
        console.log(err);
    });
