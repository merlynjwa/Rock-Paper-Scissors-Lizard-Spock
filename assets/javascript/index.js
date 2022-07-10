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
	return hands[Object.keys(hands)[randomIx]];
}

function displayResult(hand) {
	let cpuHand = randomHand();
	let result = compareHands(hand, cpuHand);
	if (result > 0) {
		console.log("YOU WIN!");
		Swal.fire({
			icon: 'success',
			title: 'Yay!',
			text: 'You won!',
			footer: `The computers hand: ${cpuHand.hand}`,
			timer: 2000
		})
	}else if (result < 0) {
		console.log("YOU LOSE!");
		Swal.fire({
			icon: 'error',
			title: 'Oh no!',
			text: 'You lost!',
			footer: `The computers hand: ${cpuHand.hand}`,
			timer: 2000
		})
	}else {
		console.log("IT'S A DRAW!");
		Swal.fire({
			icon: 'warning',
			title: 'Huh...',
			text: 'It was a draw!',
			footer: `The computers hand: ${cpuHand.hand}`,
			timer: 2000
		})
	}
}

for (let button of document.getElementsByTagName('button')) {
	let hand = button.dataset.hand;
	button.addEventListener("click", () => displayResult(hands[hand]));
}
