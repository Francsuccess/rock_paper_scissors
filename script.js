let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
    let choices = ["r", "p", "s"];
    let compRandomNumber = Math.floor(Math.random() * 3);
    return choices[compRandomNumber];
}

function wordConverter (word) {
    if (word === "r") {
        return "Rock";
    } else if (word === "p") {
        return "Paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice ());
function win (userChoice, computerChoice) {
    //console.log("win")
    userScore +=1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let userWord = "user".fontsize(4).sub();
    let computerWord = "comp".fontsize(4).sub();
   // result_div.innerHTML = wordConverter(userChoice) +  " beats " +  wordConverter(computerChoice) +  ". You win!"
    result_div.innerHTML = `${wordConverter(userChoice)}${userWord} beats ${wordConverter(computerChoice)}${computerWord}. You win!`; //es6
    document.getElementById(userChoice).classList.add('green-glow');
    setInterval( function () {document.getElementById(userChoice).classList.remove('green-glow')}, 500);
   // console.log(userChoice);
   // console.log(userScore);
   //console.log(user);
   //console.log(computerScore);
}

function lose (userChoice, computerChoice) {
    computerScore +=1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let userWord = "user".fontsize(4).sub();
    let computerWord = "comp".fontsize(4).sub();
    result_div.innerHTML = `${wordConverter(userChoice)}${userWord} loses to ${wordConverter(computerChoice)}${computerWord}. You Lost...... `; //es6
    document.getElementById(userChoice).classList.add('red-glow');
    setInterval( function () {document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

function draw (userChoice, computerChoice) {
   // userScore_span.innerHTML = userScore;
   // computerScore_span.innerHTML = computerScore;
    let userWord = "user".fontsize(4).sub();
    let computerWord = "comp".fontsize(4).sub();
    result_div.innerHTML = `${wordConverter(userChoice)}${userWord} equals ${wordConverter(computerChoice)}${computerWord}. it's a draw!`; //es6
    document.getElementById(userChoice).classList.add('grey-glow');
    setInterval( function () {document.getElementById(userChoice).classList.remove('grey-glow')}, 500);
}  

function game(userChoice) {
    let computerChoice = getComputerChoice();
   // console.log( "user choice =>" + userChoice);
   // console.log("computer choice =>" + computerChoice);
   
   switch (userChoice + computerChoice) {
       case "rs":
       case "pr": 
       case "sp":   
        win (userChoice, computerChoice);
           break;
        case "rp":
        case "ps":
        case "sr":
         lose (userChoice, computerChoice);
           break;
         case "rr":
         case "pp":
         case "ss":
          draw (userChoice, computerChoice);
           break;
          default:
   }
   // i wand to try replace this switch statement with conditional statement
   
   // win functin affresh
  /* function win (userChoice, computerChoice) {
        if (userChoice==="r" && computerChoice==="s" )
        if (userChoice==="p" && computerChoice==="r")
        if (userChoice==="s" && computerChoice==="p") {
            return win (userChoice, computerChoice);
        }
   }

   // lose function
   function lose (userChoice, computerChoice) {
    if (userChoice==="r" && computerChoice==="p" )
    if (userChoice==="p" && computerChoice==="s")
    if (userChoice==="s" && computerChoice==="r") {
        return lose (userChoice, computerChoice);
    }
  }

  function draw (userChoice, computerChoice) {
    if (userChoice==="r" && computerChoice==="r" )
    if (userChoice==="p" && computerChoice==="p")
    if (userChoice==="s" && computerChoice==="s") {
        return draw (userChoice, computerChoice);
    }
  } */
}

// trying to call the three functions here!!
//win ();
//lose ();
//draw ();

//game("f");

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();