const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach(name => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

const uppercase = provinces.map(province => province.toUpperCase());
console.log(uppercase);

const newCharactersAmount = names.map(name => name.length);
console.log(newCharactersAmount);

const sortedProvinces = provinces.slice().toSorted();
console.log(sortedProvinces);

const filtered = provinces.filter(province => !province.includes('Cape'));
console.log(filtered.length);

const hasS = names.map(name => name.split('').some(char => char === 'S' && 's'));
console.log(hasS)

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


console.log(

  products.forEach(product => console.log(product.product)),

  products.filter(product => product.product.length > 5),

  //products.filter(product => product.price !== '' && ' ' && !isNaN(product.price)).map(product => ({ ...product, price: Number(product.price) })),

  products
    .filter(product => product.price !== '' && !isNaN(Number(product.price)))
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0),

  //products.reduce((concatNames, product) => concatNames + (concatNames !== '' ? ',' : '') + product.product, ''),

  products.reduce((result, product, index) => {
    if (index === 0) {
      return product.product;
    } else if (index === products.length - 1) {
      return `${result} and ${product.product}.`;
    } else {
      return `${result}, ${product.product}`;
    }
  }, ''),


  products.reduce((result, product) => {
    if (result.highest === undefined || product.price > result.highest.price){
      result.highest = product;
    }
    if (result.lowest === undefined || product.price < result.lowest.price){
      result.lowest = product;
    }
  return result;
  }, {highest: undefined, lowest: undefined}),


products.reduce((newArray, product) => {
  const { product: name, price: cost, ...rest } = product;
  newArray.push({ name, cost, ...rest });
  return newArray;
}, []),

)


