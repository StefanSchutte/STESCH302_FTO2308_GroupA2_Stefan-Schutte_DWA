const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// iterates over the names array
names.forEach(name => console.log(name));

// iterates over the names array also accesses the province using the index parameter.
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// creates a new array where each province name is converted to uppercase
const uppercase = provinces.map(province => province.toUpperCase());
console.log(uppercase);

//creates a new array where each element represents the length of the corresponding name
const newCharactersAmount = names.map(name => name.length);
console.log(newCharactersAmount);

// create a sorted copy of the provinces array. toSorted??
const sortedProvinces = provinces.toSorted()
console.log(sortedProvinces);

// filters out provinces that include the word 'Cape'
const filtered = provinces.filter(province => !province.includes('Cape'));
console.log(filtered.length);

// checks if each name contains the letter 'S' and returns an array of boolean values.
const hasS = names.map(name => name.split('').some(char => char === 'S' && 's'));
console.log(hasS)

// creates an object where each name from the names array is a key, and the corresponding province from the provinces array is the value.
const provinceObject = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(provinceObject);



const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log('p2')
console.log(

  // iterates over the products array
  products.forEach(product => console.log(product.product)),

  //filters out products whose names have more than 5 characters.
  products.filter(product => product.product.length > 5),

  //products.filter(product => product.price !== '' && ' ' && !isNaN(product.price)).map(product => ({ ...product, price: Number(product.price) })),

  // filters out products with valid prices, converts their prices to numbers, and then calculates the total price
  products
    .filter(product => product.price !== '' && !isNaN(Number(product.price)))
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0),

  //products.reduce((concatNames, product) => concatNames + (concatNames !== '' ? ',' : '') + product.product, ''),

  // concatenate product names into a comma-separated string
  products.reduce((result, product, index) => {
    if (index === 0) {
      return product.product;
    } else if (index === products.length - 1) {
      return `${result} and ${product.product}.`;
    } else {
      return `${result}, ${product.product}`;
    }
  }, ''),

// find the highest and lowest priced products
  products.reduce((result, product) => {
    if (result.highest === undefined || product.price > result.highest.price){
      result.highest = product;
    }
    if (result.lowest === undefined || product.price < result.lowest.price){
      result.lowest = product;
    }
  return result;
  }, {highest: undefined, lowest: undefined}),

// renaming the product and price keys to name and cost,
products.reduce((newArray, product) => {
  const { product: name, price: cost, ...rest } = product;
  newArray.push({ name, cost, ...rest });
  return newArray;
}, []),

)


