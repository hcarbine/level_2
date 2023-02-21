const form = document.getElementById("airline-form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("submitted")
  var fName = document.getElementById("fName").value;
  console.log(fName)
  var lName = document.getElementById("lName").value;
  console.log(lName)
  var age = document.getElementById("age").value;
  console.log(age)
  var gender = document.getElementsByName("gender");
    for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        var gender = gender[i].value;
    }
      }
  console.log(gender)
var select = document.getElementById("where");
var location = select.value;
console.log(location);


const diet = [];
const checkboxes = document.querySelectorAll('input[name="diet"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
      diet.push(checkboxes[i].value);
    }
    console.log(diet)
        
alert("First Name: " + fName + "\nLast Name: " + lName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nWelcome Aboard!");  
})