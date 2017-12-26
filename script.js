const log = document.querySelector('#log');
const hands = ["rock", "paper", "scissor"];
const playerScore = document.getElementById('playerscore');
const aiScore = document.getElementById('aiscore');

let hand = {
	win: "rock",
	lose: "paper",
}

let rules = {
	rock: {win:"scissor", lose:"paper"},
	paper: {win:"rock", lose:"scissor"},
	scissor: {win:"paper", lose:"rock"},
}

function alertOnClick (event){
	const playerAction = document.createElement('p');
	const enemyAction = document.createElement('p');
	const result = document.createElement('p');
	const playerHand = hands[event.target.id-1];
	const enemyHand = playRandomHand();

	playerAction.textContent = "You Played " + playerHand;
	enemyAction.textContent = "AI Played " + enemyHand;

	if (playerHand === enemyHand) {
		result.textContent = "It's a tie!";
	}else if(rules[playerHand]['win'] === enemyHand){
		result.textContent = "You Win This Round!";
		playerScore.textContent++;
	}else{
		result.textContent = "You Lose This Round!";
		aiScore.textContent++;
	}

	log.appendChild(playerAction);
	log.appendChild(enemyAction);
	log.appendChild(result);

  	log.scrollTop = log.scrollHeight;

	if (aiScore.textContent >= 5) {
	  	alert("You Lost The Game");
	}else if(playerScore.textContent >= 5) {
		alert("You Won The Game");
	}

}

function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function playRandomHand(){
	return hands[getRandom(0,3)];
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', alertOnClick); 
});

