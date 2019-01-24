function solve() {
	let noSignalDiv = document.getElementById('exercise').children[0];
	noSignalDiv.style.position  = 'absolute';

    setInterval(function() {
        noSignalDiv.style.left = `${getRandomNumber(1, 81)}%`;
        noSignalDiv.style.top = `${getRandomNumber(1, 45)}vh`;
    }, 3000);

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}