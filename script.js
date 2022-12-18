let computeChoiceDisplay = document.getElementById('computer-choice')
let yourChoiceDisplay= document.getElementById('your-choice')
let resultDisplay = document.getElementById('result')
let possibleChoice = document.querySelectorAll('button')
let yourChoice
let result
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
   yourChoice = e.target.id
   yourChoiceDisplay.innerHTML= yourChoice
   generateComputerChoice()
   getResult () 
}))
function generateComputerChoice() {
    const randomNumber  = Math.floor(Math.random()*3)+1
    

    if (randomNumber === 1){
        computerChoice='rock'
    }

    if (randomNumber === 2){
        computerChoice='scissor'
    }

    if (randomNumber === 3){
        computerChoice='paper'
    }
    computeChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice ===  yourChoice){
        result =  'its a draw '
    }

    if (computerChoice=== 'rock' && yourChoice== 'paper'){
        result = 'you win'
    }

    if (computerChoice === 'rock' && yourChoice == scissor){
        result =  'you lost'
    }

    if (computerChoice=== 'paper' && yourChoice== 'scissor'){
        result =  'you win'
    }

    if (computerChoice=== 'paper' && yourChoice== 'rock'){
        result =  'you lose'
    }

    if (computerChoice=== 'scissor' && yourChoice== 'rock'){
        result = 'you win'
    }

    if (computerChoice=== 'scissor' && yourChoice== 'paper'){
        result =  'you lose'
    }
    resultDisplay.innerHTML = result
}
