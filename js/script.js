const buttonplay = document.querySelector('.play')
const buttonstop = document.querySelector('.stop')
const buttonmais = document.querySelector('.mais')
const buttonmenos = document.querySelector('.menos')

const card1 = document.querySelector('.card1')
const card1b = document.querySelector('.card1b')
const card2 = document.querySelector('.card2')
const card2b = document.querySelector('.card2b')
const card3 = document.querySelector('.card3')
const card3b = document.querySelector('.card3b')
const card4 = document.querySelector('.card4')
const card4b = document.querySelector('.card4b')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const cafeteria = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Cafeteria.wav?raw=true")
const chuva = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Chuva.wav?raw=true")
const floresta = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Floresta.wav?raw=true")
const fire = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Lareira.wav?raw=true")

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    secondsDisplay.textContent = "00"
    if(minutes <= 0){
      return
    }
    
  if (seconds <= 0){
    seconds = 60
    minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
  }
  secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
      
    countdown()
  }, 1000);
  
}
buttonplay.addEventListener('click', function() {
    countdown()
    })

buttonstop.addEventListener('click', () => {
 clearTimeout(timerTimeOut)
})

buttonmais.addEventListener('click', () =>{
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
})

buttonmenos.addEventListener('click', () =>{
     minutesDisplay.textContent = String(minutesDisplay.textContent - 5).padStart(2, '0') 
     if(minutesDisplay <= 0){
      return countdown()
    }
    })

card1.addEventListener('click', () =>{
  card1.classList.add('hide')
  card1b.classList.remove('hide')
  floresta.play()
  
})
card1b.addEventListener('click', () =>{
  card1.classList.remove('hide')
  card1b.classList.add('hide')
  floresta.pause()
})
card2.addEventListener('click', () =>{
  card2.classList.add('hide')
  card2b.classList.remove('hide')
  chuva.play()
})
card2b.addEventListener('click', () =>{
  card2.classList.remove('hide')
  card2b.classList.add('hide')
  chuva.pause()
})
card3.addEventListener('click', () =>{
  card3.classList.add('hide')
  card3b.classList.remove('hide')
  cafeteria.play()
})
card3b.addEventListener('click', () =>{
  card3.classList.remove('hide')
  card3b.classList.add('hide')
  cafeteria.pause()
})
card4.addEventListener('click', () =>{
  card4.classList.add('hide')
  card4b.classList.remove('hide')
  fire.play()
})
card4b.addEventListener('click', () =>{
  card4.classList.remove('hide')
  card4b.classList.add('hide')
  fire.pause()
})


