function collectAnimals(...animals) {
    return animals;
  }
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));


function combineFruit(fruit, sweets, vegetables){
    return { fruit, sweets, vegetables };
}
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));


function returnFirst([firstItem]) {
  return firstItem;
}


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav]) {
  return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}
returnFavorites(favoriteActivities)
 console.log(returnFavorites(favoriteActivities))

 function combineAnimals(...arrays) {
  return [...arrays.flat()];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
// ["dog", "cat", "mouse", "jackolope", "platypus"]



function product(...numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
}


function unshift(array, ...values) {
  return [...values, ...array];
}


function populatePeople(names) {
  return names.map(function(name) {
    const [firstName, lastName] = name.split(" ");
    return { firstName, lastName };
  });
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
// [
//   { firstName: "Frank", lastName: "Peterson" },
//   { firstName: "Suzy", lastName: "Degual" },
//   { firstName: "Liza", lastName: "Jones" }
// ]

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

