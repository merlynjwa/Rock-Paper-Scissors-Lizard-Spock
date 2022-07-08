const hands = {
	rock : { hand : "rock", beats : ["scissors", "lizard"] },
	paper : { hand : "paper", beats : ["rock", "spock"] },
	scissors : { hand : "scissors", beats : ["paper", "lizard"] },
	spock : { hand : "spock", beats : ["rock", "scissors"] },
	lizard : { hand : "lizard", beats : ["paper", "spock"] }
}

function compareHands(h1, h2) {
	if (h1.hand === h2.hand) {
		return 0;
	}else if (h1.beats.includes(h2.hand)) {
		return 1;
	}else {
		return -1;
	}
}

function randomHand() {
	let randomIx = Math.floor(Math.random() * 5)
	return Object.keys(hands)[randomIx];
}
