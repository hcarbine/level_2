let arr = [1, 2, 3, 4, 5];
let doubleNumbers = arr.map(function(element) {
  return element * 2;
});
console.log(doubleNumbers);



let numbersArray = [1, 2, 3, 4, 5];
let stringArray = numbersArray.map(function(element) {
  return element.toString();
});
console.log(stringArray);


let names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
let capitalizedNames = names.map(function(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
});
console.log(capitalizedNames);


let namesOnly = ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kanye West", "Bob Ziroll"];
let ages = [80, 2, 5, 16, 100];
let namesOnlyArray = namesOnly.map(function(name) {
  return name;
});
console.log(namesOnlyArray);

function makeStrings(arr) {
  return arr.map(person => {
      if (person.age >= 18) {
          return `${person.name} can go to The Matrix`;
      } else {
          return `${person.name} is under age!!`;
      }
  });
}
console.log(makeStrings([
  {
  name: "Angelina Jolie",
  age: 80
  },
  {
  name: "Eric Jones",
  age: 2
  },
  {
  name: "Paris Hilton",
  age: 5
  },
  {
  name: "Kayne West",
  age: 16
  },
  {
  name: "Bob Ziroll",
  age: 100
  }
  ]));

  function readyToPutInTheDOM(arr) {
    return arr.map(person => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
    });
}

console.log(readyToPutInTheDOM([
  {
  name: "Angelina Jolie",
  age: 80
  },
  {
  name: "Eric Jones",
  age: 2
  },
  {
  name: "Paris Hilton",
  age: 5
  },
  {
  name: "Kayne West",
  age: 16
  },
  {
  name: "Bob Ziroll",
  age: 100
  }
  ]));
  
