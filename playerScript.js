let number=Math.floor(Math.random()*100)+1;
let countTime =10;
console.log(number);
const input =document.getElementById("inputNum");
const submit=document.getElementById("submitBtn")
const restTime=document.getElementById("warningText");
const remainNum = document.getElementById("remainTime");
const opportunity=document.getElementById("opportunity");
const restartGame=document.getElementById("restartGuess");


restartGame.style.display="none";


submit.addEventListener('click',()=>{
    let inputNum = Number(input.value);
    
    if(!inputNum||inputNum>100 || inputNum<1){
    input.value="";
    alert("Please input a number from 1 to 100.")
    }else{
        if(inputNum==number){
            input.value="";
        restTime.innerText="Congratulations!👏 You got it!";
        endGame();
        restartGame.style.display="inline-block";
        }else if(inputNum>number){
            restTime.innerText="That's too large! You still have "+(countTime-1)+" opportunities.";
            input.value="";
        }else if(inputNum<number && Number(countTime-1)>=2){
            restTime.innerText="That's too small! 😖 You still have "+(countTime-1)+" opportunities.";
            input.value="";
        }else if(inputNum<number && Number(countTime-1)<2){
            restTime.innerText="That's too small! 😖 You still have "+(countTime-1)+" opportunity.";
            input.value="";
        }
    
        countTime--;
        remainNum.textContent=countTime;

        console.log(countTime);


        if(countTime==0){
            restTime.innerText="No more chances!"
            endGame();
            restartGame.style.display="inline-block";
        }
    }    
})

restartGame.addEventListener('click',()=>{
    input.value="";
    input.disabled=false;
    submit.disabled=false;
    number=Math.floor(Math.random()*100)+1;
    console.log(number);
    countTime=10;
    restTime.innerText="You still have 10 opportunities."
    remainNum.textContent=countTime;
    restartGame.style.display="none";
})

function endGame(){
    input.disabled=true;
    submit.disabled=true;
}

input.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        submit.click();
    }
})