const background = document.createElement("div")
background.style.backgroundColor = "black"


//Heading title
const heading = document.createElement("h1")
heading.innerText = "Who wants to play WHEEL OF FORTUNE!"
heading.style.textAlign = "center"
heading.style.color = "white"
background.appendChild(heading)
document.body.append(background)



const generateWord = document.createElement("button")
//const buttonText = document.createTextNode("LET'S PLAY")
//buttonText.style.
generateWord.innerText = "GO!"
generateWord.style.fontSize = "50px"
generateWord.style.fontWeight = "900"
generateWord.style.height ="300px"
generateWord.style.width ="300px"
generateWord.style.borderRadius ="300px"
generateWord.style.backgroundColor = "red"
generateWord.style.display = "block"
generateWord.style.marginLeft = "auto"
generateWord.style.marginRight = "auto"
document.body.appendChild(generateWord)

const regex = /[a-zA-Z]/ig

const word = document.createElement("p")
word.style.fontSize = "50px"
word.style.textAlign = "center"
let start = document.createElement("button")
start.innerText = "START"
start.style.marginLeft = "auto"
start.style.marginRight = "auto"
start.style.display = "block"

//VARIABLES FOR RANDOM WORD MANIPULATION
let randomWord = ""
let replacedWord = ""
const consVowel = /[^rstlneRSTLNE]/ig
let newReplacedWord
//USER INPUT 

const guesses = document.createElement("input")
guesses.setAttribute("id", "guesses")
guesses.setAttribute("minLength", "4")
guesses.setAttribute("maxLength", "4")
guesses.style.display = "block"
guesses.style.marginLeft = "auto"
guesses.style.marginRight = "auto"


let submitGuesses = document.createElement("button")
submitGuesses.innerText = "ENTER"
submitGuesses.setAttribute("disabled", "true")
submitGuesses.style.display = "block"
submitGuesses.style.marginLeft = "auto"
submitGuesses.style.marginRight = "auto"
submitGuesses.style.marginTop = "5px"

let instructions = document.createElement("p")
instructions.innerText = "Please enter 3 consonants and 1 vowel."
instructions.style.textAlign = "center"

generateWord.addEventListener("click", function(e){
    e.preventDefault()
    randomWord = getRandomWord()
    replacedWord = randomWord.replaceAll(regex, "-")
    word.innerText = replacedWord
    document.body.append(word)
    document.body.append(start) 
    console.log(randomWord)
    document.body.append(instructions)
    document.body.append(guesses)
    document.body.append(submitGuesses)
        
})

start.addEventListener("click", function(event){
    newReplacedWord = randomWord.replaceAll(consVowel,"\\_")
    event.preventDefault()
    //console.log(randomWord)
    word.innerText = newReplacedWord
})

let alert = document.createElement("p")
alert.innerText = "Sorry you must enter at least 4 guesses"
guesses.addEventListener("keydown", function(e){
    let guessesInput = document.getElementById("guesses").value
    if(guessesInput.length === guesses.minLength){
        submitGuesses.removeAttribute("disabled")
    }
    
})

const vowels = /[aeiou]/ig
let askToGuessWord = document.createElement("p")
askToGuessWord.innerText = "Guess the word"
askToGuessWord.style.textAlign ="center"
let guess = document.createElement("input")
guess.setAttribute("id", "guess")
guess.style.display = "block"
guess.style.marginLeft = "auto"
guess.style.marginRight = "auto"
let submitGuess = document.createElement("button")
submitGuess.innerText = "ENTER"
submitGuess.setAttribute("disabled", "true")
submitGuess.style.display = "block"
submitGuess.style.marginLeft = "auto"
submitGuess.style.marginRight = "auto"
submitGuess.style.marginTop = "5px"

submitGuesses.addEventListener("click", function(e){
    e.preventDefault()
    let guessesInput = document.getElementById("guesses").value
    let guessesArr = guessesInput.split("")
    let guessesObj = {"consonant": 0, "vowel": 0}
    for(let i = 0; i < guessesInput.length; i++){
        if(vowels.test(guessesInput[i])){
            guessesObj["vowel"]+=1
        }else if(!vowels.test(guessesInput[i])){
            guessesObj["consonant"]+=1
        }
    }
    
    let afterGuesses
    const regexGuesses = new RegExp(`[^${guessesInput}rstlneRSTLNE]`,"g")
    const nConsVowel = /[rstlne]/ig
    if(guessesObj["consonant"]===3 && guessesObj["vowel"]===1){
        afterGuesses = randomWord.replaceAll(regexGuesses, "\\_") 
        word.innerText = afterGuesses
        
    }else{
       
        window.alert("sorry you must enter 3 consonants and 1 vowel")
    }

    document.body.append(askToGuessWord)
    document.body.append(guess)
    document.body.append(submitGuess)

    //console.log(randomWord)
    console.log(regexGuesses)
    console.log(consVowel)
    console.log(guessesArr)
    console.log(guessesObj)
    
})
guess.addEventListener("keydown", function(e){
    submitGuess.removeAttribute("disabled")
})


submitGuess.addEventListener("click", function(e) {
   
    let submission = guess.value
    if(submission === randomWord) {
        word.innerText = randomWord
        setTimeout(function(){
            window.confirm("YOU WON! Would you like to play again?")
            if(window.confirm){
                location.reload()
            }
        }  
        , 3000)
          
    }else {
        word.innerText = randomWord
        setTimeout(function() {
            window.confirm(`So sorry you didn't get it this time. :(  Would you like to play again?`)
            if(window.confirm){
                location.reload()
            }
        }
        , 3000)
    }


})