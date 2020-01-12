let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

rock_div.addEventListener("click", () => startGameSession("r"));
paper_div.addEventListener("click", () => startGameSession("p"));
scissors_div.addEventListener("click", () => startGameSession("s"));

userScore_span.innerText = userScore;

const startGameSession = userChoice => {
    const generateChoice = Math.random() * 10;
    const pcChoice = (function() {
        if (generateChoice <= 3.33) return "r";
        else if (generateChoice <= 6.66) return "p";
        else return "s";
    })();
    console.log(pcChoice);
    const result = battleResult(userChoice, pcChoice);
    console.log(result);
    if (result === "win") {
        userScore++;
    } else if (result === "loss") {
        pcScore++;
    }
    changeScore();
    changeResultLabel(userChoice, pcChoice, result);
};

const battleResult = (userChoice, pcChoice) => {
    if (userChoice === "r") {
        if (pcChoice === "p") {
            return "loss";
        } else if (pcChoice === "s") {
            return "win";
        } else return "draw";
    } else if (userChoice === "p") {
        if (pcChoice === "s") {
            return "loss";
        } else if (pcChoice === "r") {
            return "win";
        } else return "draw";
    } else if (userChoice === "s") {
        if (pcChoice === "r") {
            return "loss";
        } else if (pcChoice === "p") {
            return "win";
        } else return "draw";
    }
};

const changeScore = () => {
    if (userScore !== +userScore_span.innerText) {
        userScore_span.innerHTML = userScore;
    }
    if (pcScore !== +pcScore_span.innerText) {
        pcScore_span.innerHTML = pcScore;
    }
};

const changeResultLabel = (userChoice, pcChoice, result) => {
    let result_string = "";
    if (userChoice === "r") {
        result_string += "Rock";
    }
    if (userChoice === "p") {
        result_string += "Paper";
    }
    if (userChoice === "s") {
        result_string += "Scissors";
    }
    result_string += " user".sub();

    if (result === "win") {
        result_string += " beats ";
    }
    if (result === "draw") {
        result_string += " played draw with ";
    }
    if (result === "loss") {
        result_string += " lost ";
    }

    if (pcChoice === "r") {
        result_string += " Rock ";
    }
    if (pcChoice === "p") {
        result_string += " Paper ";
    }
    if (pcChoice === "s") {
        result_string += " Scissors ";
    }
    result_string += " pc".sub();

    result_div.getElementsByTagName("p")[0].innerHTML = result_string;
};

// const highlightBorder = (userChoice, result) => {
//   if (userChoice === "r") {
//     if (result === "win") {
//     }
//   }
// };
