let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara  = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissior"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  console.log("Game was Draw.");
  msg.innerText = "Game was draw.";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userScore += 1;
    userScorePara.innerText = userScore;
    console.log("You win!.");
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore += 1;
    compScorePara.innerText = compScore;
    console.log("You lose.");
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("user Choice = ",userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ",compChoice);

  if(userChoice === compChoice) {
    //draw game.
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userWin = compChoice === "scissior" ? false : true ;
    }else{
      userWin = compChoice ==="rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

  });
});
