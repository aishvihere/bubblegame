var clutter = "";
var rn;
var timer=30;
var hitrn=0;
var score=0;

function makeBubble(){
    for(var i=1;i<=160;i++){
        rn =Math.floor(Math.random()*10);
        
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector(".pnlbtm").innerHTML = clutter;

}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}



function Getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;


}


function runTimer(){
    var timerval=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;

        }
        else{
            clearInterval(timerval);
            document.querySelector(".pnlbtm").innerHTML=`<h1>GAME OVER!`;
        }
        
    },1000)
    

}


document.querySelector(".pnlbtm").addEventListener("click", function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        increaseScore();
        makeBubble();
        Getnewhit();
        
        
    }
})


makeBubble();
Getnewhit();
runTimer();



