const square=document.querySelectorAll('.square')
const mole=document.querySelectorAll('.ricardo')
const timeLeft=document.querySelector('#time-left')
let score=document.querySelector('#score')

let result=0
let currentTime=timeLeft.textContent

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('ricardo')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('ricardo')

    //ID assignment
    hitPosition=randomPosition.id
}

square.forEach(id =>{
    id.addEventListener('mouseup', () =>{
       if(id.id === hitPosition){
           result = result + 1
           score.textContent = result
       } 
    })
})

function moveMole(){
    let timerId=null
    timerId=setInterval(randomSquare, 600)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent=currentTime

    if(currentTime===0){
        clearInterval(timerId)
        alert('GAME OVER! You caught Ricardo ' + result + ' times!')
    }
}

let timerId=setInterval(countDown, 1000)