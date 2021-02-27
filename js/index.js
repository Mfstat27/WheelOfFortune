const generateRandomWord = document.createElement("button")
generateRandomWord.setAttribute("id", "generateRandomWord")
generateRandomWord.innerText("Generate A Word")
const body = document.querySelector("body")
body.append(generateRandomWord)
generateRandomWord.addEventListener("click", function(e){
    e.preventDefault()
})