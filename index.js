const generateRandomWord = document.createElement("button")
generateRandomWord.setAttribute("id", "generateRandomWord")
const body = document.getElementsByTagName("body")
body.append(generateRandomWord)
generateRandomWord.addEventListener("click", function(e){
    e.preventDefault()
})