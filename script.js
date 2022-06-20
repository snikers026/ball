const ball= document.getElementById("ball");
const cactus= document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
})
function jump(){
    if (ball.classList !="jump"){
        ball.classList.add("jump")
    }
    setTimeout( function() {
        ball.classList.remove("jump")
    }, 600)
}
let isAlive = setInterval(function(){
    let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft <10 && cactusLeft > 0 && ballTop >= 150){
        alert("GAME OVER")
    }
}, 10)