// object property shorthand

const name = "Joe";
const age = "28";

const user = {
    name,
    age,
    location: "Los Angeles"
};

console.log(user);

// object destructuring

const product = {
    label: "book",
    price: 3.0,
    stock: 201,
    salePrice: 0
};

// const { label: productLabel, price, stock, salePrice, rating = 3 } = product;

// console.log(productLabel, price, stock, salePrice, rating);

const transaction = (type, { label, price, stock } = {}) => {
    console.log(label, price, stock);
};

transaction("order", product);
