const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const resetButton = document.querySelector("#reset");

const player1Scan = document.querySelector("#p1Display");
const player2Scan = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");


let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
        }
        player1Scan.textContent = p1score;
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1
        if (p2score === winningScore) {
            isGameOver = true;
        }
        player2Scan.textContent = p2score;
    }
});

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    player1Scan.textContent = 0;
    player2Scan.textContent = 0;
}