"use-script";
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const current0 = document.querySelector("#current0");
const current1 = document.querySelector("#current1");
const dice = document.querySelector(".image");
dice.classList.add("hidden");
const rolldice1 = document.querySelector(".rolldice");
const hold = document.querySelector(".hold");
const scores = [0, 0];
let activePlayer = 0;
let score = 0;
let playing = true;

//let winner = false;
const switchPlayer = () => {
  document.getElementById(`current${activePlayer}`).textContent = 0;
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active--player");
  player1.classList.toggle("active--player");
};
rolldice1.addEventListener("click", () => {
  if (playing) {
    let image = Number(Math.trunc(Math.random() * 6) + 1);
    dice.classList.remove("hidden");
    dice.src = `inverted-dice-${image}.png`;
    // score = score + image;

    if (image !== 1) {
      score += image;
      //document.querySelector(`#current${activePlayer}`).textContent = score;
      document.getElementById(`current${activePlayer}`).textContent = score;
    } else {
      switchPlayer();
    }
  }
});
hold.addEventListener("click", () => {
  // console.log("fa");
  if (playing) {
    scores[activePlayer] += score;
    document.getElementById(`score${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;

      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("winner--player");
    } else {
      switchPlayer();
    }
  }
});
document.querySelector(".newgame").addEventListener("click", () => {
  location.reload();
});
