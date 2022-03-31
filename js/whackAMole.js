const square=document.querySelectorAll('.square');
const mole=document.querySelectorAll('.mole');
const timeleft=document.querySelector('#time-left');
let score=document.querySelector('#score');

let result=0;
let curTime=timeleft.textContent;
let timerId=null;
let hitPostion;
function randomSquare(){
    square.forEach(className=>{
        className.classList.remove('mole');

    });
    let randomPosition=square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole');

    //assign the id of randomPosition for us to use later
    hitPostion=randomPosition.id;
}

square.forEach(id=>{
    id.addEventListener('click',()=>{
        if(id.id==hitPostion){
            result+=1;
            score.textContent=result;
            hitPosition = null
        }
    });
});

function moveMole(){
    timeId=setInterval(randomSquare,2000);
}
moveMole();
function countDown(){
    curTime-=1;
    timeleft.textContent=curTime;
    if(curTime===0)
    {
        clearInterval(timerId);
        clearInterval(countDowntimerId); 
        alert('Game OVER! Your final score is'+result);
   }
}
let countDowntimerId=setInterval(countDown,2000);