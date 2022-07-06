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
