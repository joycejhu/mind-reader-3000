let min=1;
let max=100;
let remainTime=6;
let computer =Math.floor((min+max)/2);
const setNum=document.getElementById("setNum");
const setBtn=document.getElementById("setBtn");
const showNum=document.getElementById("showNum");
const guessedNum=document.getElementById("guessedNum");
const high=document.getElementById("high");
const low=document.getElementById("low");
const correct=document.getElementById("correct");
const hintText=document.getElementById("hintText");
const restartSet = document.getElementById("restartSet");
const homePage=document.getElementById("homePage");

restartSet.style.display="none";


setBtn.addEventListener("click",()=>{
    const setNumber =Number(setNum.value);
    
    if(!setNumber || setNumber>100||setNumber<1){
        setNum.value="";
        alert("Please input a number from 1 to 100.");
    }else{
        guessedNum.innerText="🤔...";
        setTimeout(()=>{
            guessedNum.innerText=computer;
        },500)
        remainTime--;
        hintText.innerHTML=remainTime+" guesses left!"
        setNum.disabled=true;
        setBtn.disabled=true;
        window._targetNumber=setNumber;
    }
})

let previousNum = computer;

high.addEventListener("click",()=>{
    if(window._targetNumber > previousNum){
        alert("Are you cheating? 😎 You clicked the wrong button. Let's restart the game!");
        restartSet.click();
        return;
    }
    max=computer-1;
    updatePreviousNum();
    remainTime--;
    
    noMore();
    
    hintText.innerText=remainTime+" guesses left! 😬 Too High!";
})

low.addEventListener("click",()=>{
    if(window._targetNumber<previousNum){
        alert("Are you cheating? 😎 You clicked the wrong button. Let's restart the game!");
        restartSet.click();
        return;
    }
    min=computer+1;
    updatePreviousNum();
    remainTime--;

    noMore();
    hintText.innerText=remainTime+" guesses left! 😬 Too Low! ";
})

correct.addEventListener("click",()=>{
    if(window._targetNumber!=previousNum){
        alert("Are you cheating? 😎 You clicked the wrong button. Let's restart the game!");
        restartSet.click();
        return;
    }

    hintText.innerText="Correct!";
    high.disabled=true;
    low.disabled=true;
    correct.disabled=true;
    restartSet.style.display="inline-block";
    document.body.style.backgroundColor = "#d4edda";  
})

restartSet.addEventListener("click",()=>{
    max=100;
    min=1;
    remainTime=6;
    computer =Math.floor((min+max)/2);
    setNum.value="";
    guessedNum.innerText="?";
    hintText.innerText="Set your number and let the computer guess!";
    setNum.disabled=false;
    setBtn.disabled=false;
    high.disabled=false;
    low.disabled=false;
    correct.disabled=false;
    previousNum=computer;
    document.body.style.backgroundColor = "white";
    restartSet.style.display="none";
})

function updatePreviousNum(){
    guessedNum.innerText="🤔...";
    high.disabled=true;
    low.disabled=true;
    correct.disabled=true;

    setTimeout(()=>{
        computer =Math.floor((min+max)/2);
        previousNum=computer;
        if(min>max){
            alert("Are you cheating? 😎 You clicked the wrong button. Let's restart the game!");
            restartSet.click();
            return;
        }
        guessedNum.innerText=computer;
        high.disabled=false;
        low.disabled=false;
        correct.disabled=false;
    },500)
    
}

function noMore(){
    if(remainTime<=0){
        alert("Out of guesses! ☠️ The computer lose...");
        restartSet.click();
        return;
    }
}

setNum.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        setBtn.click();
    }
})

homePage.addEventListener("click",()=>{
    location.href="index.html";
})
