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
	}else if (h1.beats.reduce((r,v,ix,a) => v === h2.hand || r === true)) {
		return 1;
	}else {
		return -1;
	}
}

function randomHand() {
	function numberToHand(n) {
		switch (n) {
			case 0: return "rock";
			case 1: return "paper";
			case 2: return "scissors";
			case 3: return "spock";
			case 4: return "lizard";
			default: return undefined;
		}
	}

	return numberToHand(Math.floor(Math.random() * 5));
}
