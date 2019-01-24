function solve() {
	let noSignal = document.getElementById('exercise').children[0];
	noSignal.style.position  = 'absolute';

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    setInterval(function() {
        noSignal.style.left = `${getRandomNumber(1, 81)}%`;
        noSignal.style.top = `${getRandomNumber(1, 45)}vh`;
    }, 3000);
}