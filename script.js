const random = document.querySelector(".number");
const input = document.querySelector(".guess");
const check = document.querySelector(".check");
const highscore = document.querySelector(".highscore");
const again = document.querySelector(".again");
const score = document.querySelector(".score");
const modalBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".overlay");
const message = document.querySelector(".message");
const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");

let scoree = 20;

let ran = Math.floor(Math.random() * 20 + 1);

console.log(ran);
check.addEventListener("click", () => {
  if (ran == input.value) {
    random.textContent = input.value;
    score.textContent = scoree;
    document.body.style.backgroundColor = "green";
    if (highscore.textContent < scoree) {
      highscore.textContent = scoree;
    }
    message.textContent = "Javob to'g'ri";
  } else if (ran > input.value) {
    scoree--;
    message.textContent = "Raqam kichik";
    score.textContent = scoree;
    document.body.style.backgroundColor = "#222";
    random.textContent = "?";
    if (score.textContent == "0") {
      hidden.style.display = "block";
    }
  } else {
    scoree--;
    message.textContent = "Raqam katta";
    score.textContent = scoree;
    document.body.style.backgroundColor = "#222";
    random.textContent = "?";
    score.textContent = scoree;
  }
});

const refresh = function () {
  random.textContent = "?";
  document.body.style.backgroundColor = "#222";
  scoree = 20;
  score.textContent = "20";
  ran = Math.floor(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  input.value = "";
};

again.addEventListener("click", refresh);

modalBtn.addEventListener("click", () => {
  refresh();
  hidden.style.display = "none";
});
