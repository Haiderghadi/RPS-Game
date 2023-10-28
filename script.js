const computer = document.getElementById("computer-choice");
const user = document.getElementById("user-choice");
const result = document.getElementById("result");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

const array = ["Rock", "Paper", "Scissors"];
rock.addEventListener("click", () => {
  user.innerText = "Rock";
  Random();
  Result();
});
paper.addEventListener("click", () => {
  user.innerText = "Paper";
  Random();
  Result();
});
scissors.addEventListener("click", () => {
  user.innerText = "Scissors";
  Random();
  Result();
});

function Random() {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  if (randomIndex === 1) {
    computer.innerText = "Rock";
  }
  if (randomIndex === 2) {
    computer.innerText = "Paper";
  }
  if (randomIndex === 3) {
    computer.innerText = "Scissors";
  }
}
function Result() {
  if (computer.innerText === user.innerText) {
    result.innerText = "its a draw!";
  } else if (computer.innerText == "Rock" && user.innerText == "Scissors") {
    result.innerText = "Computer Wins :(";
  } else if (computer.innerText == "Paper" && user.innerText == "Scissors") {
    result.innerText = "You Won :)";
  } else if (computer.innerText == "Rock" && user.innerText == "Paper") {
    result.innerText = "You Won :)";
  } else if (computer.innerText == "Scissors" && user.innerText == "Paper") {
    result.innerText = "Computer Wins :(";
  } else if (computer.innerText == "Paper" && user.innerText == "Rock") {
    result.innerText = "Computer Wins :(";
  } else if (computer.innerText == "Scissors" && user.innerText == "Rock") {
    result.innerText = "You won :)";
  }
}
