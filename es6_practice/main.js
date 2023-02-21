const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
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







