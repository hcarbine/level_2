function gettodo(){
    axios.get("https://api.vschool.io/hollyc/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}

function listData(data){
    cleartodo()
   for(let i = 0; i < data.length; i++){
        const container = document.createElement("div")
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const h3 =document.createElement('h3')
        const image = document.createElement('img') 
        const completeBox = document.createElement("input")
        const deleteButton = document.createElement("button")
    
        image.setAttribute("src", data[i].imgUrl)
        image.setAttribute("height", "100px")
        image.setAttribute("width", "100px")

        completeBox.setAttribute('type', 'checkbox')

        h1.textContent = data[i].title
        deleteButton.textContent = "Delete"

        h2.textContent = data[i].description

        h3.textContent = data[i].price

        const completeDiv = document.createElement("div")    
        const completeLabel = document.createElement("label")
        completeLabel.textContent = "Check if Completed"

        completeDiv.appendChild(completeLabel)
        completeDiv.appendChild(completeBox)

        todoList.appendChild(container)
        container.appendChild(h1)
        container.appendChild(h2)
        container.appendChild(image)
        container.appendChild(h3)
        container.appendChild(completeDiv)
        container.appendChild(deleteButton)
        

        let completed = {
            completed: true
        }
        completeBox.addEventListener("click", function(){
            h1.style.textDecoration = "line-through"
            axios.put(`https://api.vschool.io/hollyc/todo/${data[i]._id}`, completed)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            })

        deleteButton.addEventListener("click", function(){
            todoList.removeChild(container)
            axios.delete(`https://api.vschool.io/hollyc/todo/${data[i]._id}`)
                .then(response => createToDo(response.data))
                .catch(error => console.log (error))
        })
            }
                }

function cleartodo() {
    const oldtodoList =  document.getElementById('todoList')
    while (oldtodoList.firstChild){
        oldtodoList.removeChild(oldtodoList.firstChild)
    }
}

gettodo()

const todoForm = document.todoForm
document.addEventListener ("submit", function(event){
    event.preventDefault()

    const settodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
        }

        todoForm.title.value = ""
        todoForm.price.value = ""
        todoForm.description.value = ""
        todoForm.imgUrl.value = ""

        axios.post("https://api.vschool.io/hollyc/todo", settodo)
        .then(response => gettodo(response.data))
        .catch(error => console.log (error))

for(let i = 0; i < gettodo.length; i++){
    const h1 = document.createElement('h1')
    h1.textContent = response.data[i].title
    document.body.appendChild(h1)
    document.body.appendChild(image)
}
})     





