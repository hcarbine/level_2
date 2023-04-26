const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


const carrots = ["bright orange", "ripe", "rotten"];

const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }));


const people = [
    {
    name: "Princess Peach",
    friendly: false
    },
    {
    name: "Luigi",
    friendly: true
    },
    {
    name: "Mario",
    friendly: true
    },
    {
    name: "Bowser",
    friendly: false
    }
    ]
    
    const filterForFriendly = arr => arr.filter(person => person.friendly);



const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    return 'Hi ' + firstName +' '+ lastName +', how does it feel to be ' + age + '?'
    }
    
    // Example usage:
    console.log(printString("Kat", "Stark", 40))

    console.log(printString())


    const animals = [
        {
        type: "dog",
        name: "theodore"
        },
        {
        type: "cat",
        name: "whiskers"
        },
        {
        type: "pig",
        name: "piglette"
        },
        {
        type: "dog",
        name: "sparky"
        }
        ];
        
        const filterForDogs = arr => arr.filter(animal => animal.type === "dog")
        
        console.log(filterForDogs(animals))

const travelLocation = "Hawaii"
const travelerName = "Janice"
let text = `Hi  ${travelerName}!\n\nWelcome to ${travelLocation}. \n\nWe hope you enjoy your stay. Please ask the president of Hawaii if you need anything.`
console.log(text)


