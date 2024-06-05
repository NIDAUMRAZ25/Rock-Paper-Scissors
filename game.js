let userScore=0;
let compScore=0;

const options = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const generateCompChoice = () =>{
   const options = ["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random() *3);
   return options[randIdx];
  //rock paper scisssors
}

const drawGame = () => {
    msg.innerText = "game was draw play again";
    msg.style.backgroundColor="#081b31";

}
 const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lose! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }}

 
const playGame=(userChoice) => {
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = generateCompChoice();
    console.log("computer choice = " , compChoice);

    if(userChoice===compChoice){
        //draw condition
        drawGame();
    } else{
        let userWin= true;
        if(userChoice==="rock"){
            //computer can generate either scissors or paper
            userWin = compChoice==="paper" ?false :true;
        }else if(userChoice ==="paper"){
            //rock or scissors
            userWin= compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
options.forEach((choice)  => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    })
})  