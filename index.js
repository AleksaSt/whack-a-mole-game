const score = document.querySelector(".score");
const clicks = document.querySelector(".clicks");
const grid = document.querySelectorAll(".grid-item");

let counter = 0;
let gameScore = 0;

grid.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("grid-item-2")) {
      counter++;
      gameScore += 100;
    } else {
      counter++;
      gameScore -= 100;
    }
    clicks.textContent = `Clicks: ${counter}`;
    score.textContent = `Score: ${gameScore}`;
    el.classList.remove("grid-item-2");
    el.classList.add("grid-item");
  });
});

function startInterval() {
  setInterval(() => {
    addAndRemoveClass();
  }, 1200);
}

window.addEventListener("load", () => {
  startInterval();
});

function createRandomNumber() {
  const min = 0;
  const max = 8;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createRandomNumberTwo() {
  let number = Math.random();
  if (number > 0.6) {
    return number * 1000;
  } else {
    return (number = 600);
  }
}

function addAndRemoveClass() {
  console.log(createRandomNumberTwo());
  let idRandomizer = createRandomNumber();
  let square = document.getElementById(`${idRandomizer}`);
  if (typeof square !== null) {
    square.classList.remove("grid-item");
    square.classList.add("grid-item-2");
    setTimeout(() => {
      square.classList.remove("grid-item-2");
      square.classList.add("grid-item");
    }, createRandomNumberTwo());
  }
}
