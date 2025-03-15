let gameSeq =[];
let userSeq =[];
let btn=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*btn.length);
    let randColor=btn[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(idx){
    //console.log("curr level :",level);
   // let idx=level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000)
        }
    }else{
        h2.innerHTML=`Game Over! You score is <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){document.querySelector("body").style.backgroundColor="white"},150);
        reset();
    }
}
function btnPress(){
   // console.log(this);
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
   //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(let Btn of allbtns){
    Btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}