// Caching DOM variables - storing for the future use; so no need to write "document.getEle" all over again


let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choices_div = document.querySelector(".choices");
const action_p = document.getElementById("action-msg");

function getCompChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, compChoice) {
	const smallUserWord = "user".fontsize(4).sub();
	const smallCompWord = "comp".fontsize(4).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} You win!`; 
	userChoice_div.classList.add('green-border');
	userChoice_div.classList.add('green-border:hover');
	setTimeout(() => {userChoice_div.classList.remove('green-border')}, 1000);
	setTimeout(() => {userChoice_div.classList.remove('green-border:hover')}, 1000);
	if (userScore == 5) {
		choices_div.innerHTML  = `You won ${userScore}:${compScore}!`
		action_p.innerHTML = `<button><span onclick="location.reload()">Play Again?</span></button>`;
	}
}

function lose(userChoice, compChoice) {
	const smallUserWord = "user".fontsize(4).sub();
	const smallCompWord = "comp".fontsize(4).sub();
	const userChoice_div = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord} You lose!`;
	userChoice_div.classList.add('red-border');
	userChoice_div.classList.add('red-border:hover');
	setTimeout(() => {userChoice_div.classList.remove('red-border')}, 1000);
	setTimeout(() => {userChoice_div.classList.remove('red-border:hover')}, 1000);
	if (compScore == 5) {
		choices_div.innerHTML  = `You lost ${userScore}:${compScore}!`
		action_p.innerHTML = `<button><span onclick="location.reload()">Play Again?</span></button>`;
	}
}

function draw(userChoice, compChoice) {
	const smallUserWord = "user".fontsize(4).sub();
	const smallCompWord = "comp".fontsize(4).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord} It's draw!`; 
	userChoice_div.classList.add('grey-border');
	userChoice_div.classList.add('grey-border:hover');
	setTimeout(() => {userChoice_div.classList.remove('grey-border')}, 1000);
	setTimeout(() => {userChoice_div.classList.remove('grey-border:hover')}, 1000); 
}

function game(userChoice) {
	const compChoice = getCompChoice();

	switch (userChoice + compChoice) {

		case "rs":
		case "sp":
		case "pr":
		 win(userChoice, compChoice);
		break;

		case "sr":
		case "ps":
		case "rp":
		 lose(userChoice, compChoice);
		break;

		case "rr":
		case "pp":
		case "ss":
		 draw(userChoice, compChoice);
		break;
	}

}

function main() {
   rock_div.addEventListener('click', () => game("r"));
  
   paper_div.addEventListener('click', () => game("p"));

   scissors_div.addEventListener('click', () => game("s"));
}

main();
