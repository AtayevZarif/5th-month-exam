let header = document.querySelector("header")
let form = document.querySelector("form")
let login = document.querySelector("#loginInp")
let password = document.querySelector("#passwordInp")
let checkbox = document.querySelector("#checkbox")
let submit = document.querySelector("#submitBtn")


let signFunction = (event) =>{
    event.preventDefault()

    if (password.value == "sbkd0045" && login.value == "MARS_IT_school_2024") {
        form.remove()
        let text = document.createElement("h1")
        text.innerHTML = "Savol qo'shish uchun ushbu tugmani bosing"
        header.appendChild(text)
        
        let button = document.createElement("button")
        button.innerText = "Add questions!"
        button.classList.add("input")
        button.classList.add("buttons")
        header.appendChild(button)


        let questionFunction = () =>{
            let promt = prompt("Savolni yozing")
            let container = document.createElement("div")
            header.appendChild(container)

            let question = document.createElement("h2")
            question.innerText = promt
            container.appendChild(question)

            let trashBtn = document.createElement("button")
            trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
            trashBtn.classList.add("button")
            container.appendChild(trashBtn)


            let deleteFunction = () =>{
                container.remove()
            }

            trashBtn.addEventListener("click", deleteFunction)
        }

        button.addEventListener("click", questionFunction)


        alert("Dasturga xush kelibsiz")
    }
    else {
        alert("ID yoki parol notog'ri kiritilgan")
    }
}

form.addEventListener("submit", signFunction)


let visibility = () =>{
    if (password.type == "password") {
        password.type = "text"
    }
    else if (password.type == "text"){
        password.type = "password"
    }
}

checkbox.addEventListener("change", visibility)