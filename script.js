var time = 1000;
var score;
var realval = 0 ;

function bubbleGenerate(){
    var bubble = "";
    for(var i=1; i<1800; i++){
    var fn = Math.floor(Math.random()*10) 
    bubble += `<div class="bubble center">${fn}</div>`
    }
document.querySelector("section").innerHTML = bubble;
}
function timer(){
        setInterval(function(){
            if(time>0){
                time--;
                document.querySelector("#time").innerHTML = time;
            }else{
                clearInterval(time)
                document.querySelector("section").innerHTML = "";
                document.querySelector(".button").style.display = "flex";
                document.querySelector(".sc").innerHTML = `Score: ${score}`;

            }
        },1000)
}
function scoreinc(){
    score += 10;
    document.querySelector("#score").textContent = score;

}
function hit(){
    realval = Number(Math.floor(Math.random()*10)) 
    document.querySelector("#hit").textContent = realval;
}
function events(){
    document.querySelector("section").addEventListener("click",function(details){
        var click = Number(details.target.textContent);
        if(click === realval){
            scoreinc();
            bubbleGenerate();
            hit();
        }
    })
}
function restart(){
    score = 0;
    time = 60;
    document.querySelector("#score").textContent = score;
    document.querySelector(".button").style.display = "none";
    hit();
    bubbleGenerate();
}




events();
bubbleGenerate();
timer();
hit();
restart();