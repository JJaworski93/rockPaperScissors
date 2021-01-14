//Dom variables, span because it is in a span, div because it is a div
//caching - storing for the future use; so no need to write "document.getEle" so many times
let userScore =0;
let compScore=0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("st");
const paper_div = document.getElementById("pa");
const scissors_div = document.getElementById("sc");

function getCompChoice(){
	const choices = ['st', 'pa', 'sc'];
	//we need N nb <0;3) -> 0,1,2
	const randomNb = Math.floor(Math.random() * 3);
	return choices [randomNb];
}

function convertToWord(letter){
	if (letter === "st") return "Stone";
	if (letter === "pa") return "Paper";
	return "Scissors";
	
}

function win(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `convertToWord(userChoice) beats convertToWord(compChoice). :fire You Win! :fire"`;
}

function lose(){
	compScore++;
	
}

function draw(){
	
	
}

function game(userChoice){
	const compChoice = getCompChoice();
	
	switch (userChoice + compChoice) {
		
	case "stsc";
	case "past";
	case "scpa";
		win(userChoice, compChoice);
		break;
		
	case "stpa";
	case "pasc";
	case "scst";
		lose(userChoice, compChoice));
		break;
		
	case "stst";
	case "papa";
	case "scsc";
		draw(userChoice, compChoice));
		break;
		
	}
	
}

function main(){
	
rock_div.addEventListener('click', function() {
	game("st");
	
});

paper_div.addEventListener('click', function() {
	game("pa");
	
});

scissors_div.addEventListener('click', function() {
	game("sc");
	
});

main();


}