var buttonLeft = document.getElementById('left')
var buttonRigth = document.getElementById('rigth')
var cards = document.getElementsByClassName('card')
var p = 0
var timeL
var timeR
buttonRigth.addEventListener('click', function(){
    clearInterval(timeL)
    timeR = setInterval(function(){
        if(p < -100){
            clearInterval(timeR)
        }
        p -= 1
        for(let i = 0;i < cards.length; i++){
            cards[i].style.left = p + '%'
        }
    }, 25);
})

buttonLeft.addEventListener('click', function(){
    clearInterval(timeR)
    timeL = setInterval(function(){
        if(p >= 100){
            clearInterval(timeL)
        }
        p += 1
        for(let i = 0;i < cards.length; i++){
            cards[i].style.left = p + '%'
        }
    }, 25);
})