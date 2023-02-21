const form1 = document.add1
const form2 = document.sub1
const form3 = document.mult1

form1.addEventListener("submit", function(event){
    event.preventDefault()

    const num1 = parseInt(form1.addbox1.value)
    form1.addbox1.value = ""

    const num2 = parseInt(form1.addbox2.value)
    form1.addbox2.value = ""

    const sum = num1+num2

    const h1 = document.getElementById('additionresults')
    h1.textContent = sum

})

form2.addEventListener("submit", function(event){
    event.preventDefault()

    const num3 = parseInt(form2.minusbox1.value)
    form2.minusbox1.value = ""

    const num4 = parseInt(form2.minusbox2.value)
    form2.minusbox2.value = ""

    const difference = num3-num4

    const h1 = document.getElementById('subtractionresults')
    h1.textContent = difference
})

form3.addEventListener("submit", function(event){
    event.preventDefault()

    const num5 = parseInt(form3.multbox1.value)
    form3.multbox1.value = ""

    const num6 = parseInt(form3.multbox2.value)
    form3.multbox2.value = ""

    const product = num5 * num6

    const h1 = document.getElementById('multiplicationresults')
    h1.textContent = product
    document.getElementsByClassName("column3")[0].append(h1)
})








