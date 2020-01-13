let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

rock_div.addEventListener("click", () => startGameSession("r"));
paper_div.addEventListener("click", () => startGameSession("p"));
scissors_div.addEventListener("click", () => startGameSession("s"));

userScore_span.innerText = userScore;

const startGameSession = userChoice => {
    const pcChoice = generatePcChoice();
    console.log(pcChoice);
    const result = battleResult(userChoice, pcChoice);
    console.log(result);
    changeScore(result);
    changeResultLabel(userChoice, pcChoice, result);
    enableGlowEffect(userChoice, result);
    setTimeout(() => disableGlowEffect(userChoice, result), 300);
};

const generatePcChoice = () => {
    const choices = ["r", "p", "s"];
    const generatedNumber = Math.floor(Math.random() * 3);
    const pcChoice = choices[generatedNumber];

    return pcChoice;
};

const battleResult = (userChoice, pcChoice) => {
    switch (userChoice + pcChoice) {
        case "rs":
        case "pr":
        case "sp":
            return "win";
        case "rp":
        case "ps":
        case "sr":
            return "loss";
        case "rr":
        case "pp":
        case "ss":
            return "draw";
    }
    // if (userChoice === "r") {
    //     if (pcChoice === "p") {
    //         return "loss";
    //     } else if (pcChoice === "s") {
    //         return "win";
    //     } else return "draw";
    // } else if (userChoice === "p") {
    //     if (pcChoice === "s") {
    //         return "loss";
    //     } else if (pcChoice === "r") {
    //         return "win";
    //     } else return "draw";
    // } else if (userChoice === "s") {
    //     if (pcChoice === "r") {
    //         return "loss";
    //     } else if (pcChoice === "p") {
    //         return "win";
    //     } else return "draw";
    // }
};

const changeScore = result => {
    if (result === "win") {
        userScore++;
        userScore_span.innerHTML = userScore;
    } else if (result === "loss") {
        pcScore++;
        pcScore_span.innerHTML = pcScore;
    }
    // if (userScore !== +userScore_span.innerText) {
    //     userScore_span.innerHTML = userScore;
    // }
    // if (pcScore !== +pcScore_span.innerText) {
    //     pcScore_span.innerHTML = pcScore;
    // }
};

const convertChoiceToWord = choice => {
    if (choice === "r") return "Rock";
    if (choice === "p") return "Paper";
    else return "Scissors";
};

const convertResultToWord = result => {
    if (result === "win") return "beats";
    if (result === "loss") return "loses to";
    else return "played draw with";
};

const changeResultLabel = (userChoice, pcChoice, result) => {
    const user = "user".fontsize(3).sub();
    const pc = "pc".fontsize(3).sub();

    const result_string = `${convertChoiceToWord(
        userChoice
    )}${user} ${convertResultToWord(result)} ${convertChoiceToWord(
        pcChoice
    )}${pc}`;

    // if (userChoice === "r") {
    //     result_string += "Rock";
    // }
    // if (userChoice === "p") {
    //     result_string += "Paper";
    // }
    // if (userChoice === "s") {
    //     result_string += "Scissors";
    // }
    // result_string += " user".sub();

    // if (result === "win") {
    //     result_string += " beats ";
    // }
    // if (result === "draw") {
    //     result_string += " played draw with ";
    // }
    // if (result === "loss") {
    //     result_string += " lost ";
    // }

    // if (pcChoice === "r") {
    //     result_string += " Rock ";
    // }
    // if (pcChoice === "p") {
    //     result_string += " Paper ";
    // }
    // if (pcChoice === "s") {
    //     result_string += " Scissors ";
    // }
    // result_string += " pc".sub();

    // result_p.getElementsByTagName("p")[0].innerHTML = result_string;
    result_p.innerHTML = result_string;
};

const enableGlowEffect = (userChoice, result) => {
    const effect = convertResultToEffect(result);
    console.log(effect);
    console.log(result);
    document.getElementById(userChoice).classList.add(effect);
};

const convertResultToEffect = result => {
    switch (result) {
        case "win":
            return "green-glow";
        case "loss":
            return "red-glow";
        case "draw":
            return "grey-glow";
    }
};

const disableGlowEffect = (userChoice, result) => {
    document
        .getElementById(userChoice)
        .classList.remove(convertResultToEffect(result));
};

// const highlightBorder = (userChoice, result) => {
//   if (userChoice === "r") {
//     if (result === "win") {
//     }
//   }
// };
