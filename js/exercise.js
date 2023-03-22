const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let array = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (Object.keys(product).includes(propName)) {
      array.push(product[propName]);
      // console.log(product[propName]);
    }
  }
  return array;
  // Change code above this line
}

console.log("Hello world");
console.log(getAllPropValues("name"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("vlad"));
