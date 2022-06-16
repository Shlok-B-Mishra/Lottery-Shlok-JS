let userList = document.querySelectorAll('.userBall')
let actualList = document.querySelectorAll('.actualBall')
let button = document.querySelectorAll('.btn')
let index = 0

function displayActuals(){
    actualList.forEach(ball=> {
        ball.innerHTML = random_num_actual()
    })
}
function  random_num(){
   return Math.floor(Math.random()*50)+1
}
function  random_num(){
   return Math.floor(Math.random()*50)+1
}
function  random_num_actual(){
   return Math.floor(Math.random()*50)+1
}
function  opacity(min,max){
   return Math.random()*(max-min) + min
}
function  randDeg(min,max){
   return Math.random()*(max-min) + min
}

button[0].addEventListener('click', () => {
    let rgbColor = `rgba(0,0,0,${opacity(0.4,1)})`
    let bgColor = `linear-gradient(${randDeg(0,360)}deg, ${rgbColor}, ${rgbColor})`
    let randomNumber = random_num()
    userList[index].innerHTML = randomNumber
    userList[index].style.background = `${bgColor}`
    userList[index].style.background = `${bgColor}`

    index ++ // increment index for every button click so it will update each ball with it's newly generater #

    if(index == 6){
        displayActuals() // once you have click the buttton 6 times, it will reveal the actual lottery
        setTimeout(() => {
            alert('Reloading Page')
            location.reload()
        }, 500) // reload page after 5000 millisecond aka 5 second after the displayActuals() function has been invoke
    }
})