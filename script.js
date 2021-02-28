let againBtn = document.querySelector(".again");

let checkBtn = document.querySelector(".check");

let randomNmbrBar = document.querySelector(".number");

let myNumber = document.querySelector(".guess");

let message = document.querySelector(".message");

let score = document.querySelector(".score");

let highScore = document.querySelector(".highscore");

let body = document.querySelector("body");
let randomNumber;
rand()

function rand(){
    randomNumber= Math.ceil(Math.random() * 10);
    console.log(randomNumber)
}

let fun;
let funn = true;

myNumber.focus();

checkBtn.addEventListener("click", () => {
  checkingNumber();
});
document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkingNumber();
  }
});

function checkingNumber() {
    if (!myNumber.value) {
    message.textContent = "Place any Number🙁";
    play("yellow");
  } else if (myNumber.value > randomNumber) {
    message.textContent = "💥Your Value is high💥";
    wrong();
  } else if (myNumber.value < randomNumber) {
    message.textContent = "💥Your Value is low💥";
    wrong();
  } else if (myNumber.value == randomNumber) {
    randomNmbrBar.textContent = randomNumber;
    message.textContent = "🎉CORRECT, YOUR ARE GENIUS🎉";
    body.style.background = "#60b347";
    randomNmbrBar.style.width = "30rem";

    if (funn) {
      funn = false;
      fun = +score.innerText;
    }

    highScores();
    setTimeout(() => {
      myNumber.value = "";
    }, 1000);
    play("victory");

    return +score.innerText;
  }
}

function wrong() {
  if (score.innerText <= 1) {
    message.textContent = "GAME OVER 😥 HIT AGAIN";
    score.innerText = 0;
    body.style.background = "blue";
    myNumber.value = "";

    play("boo");
  } else {
    body.style.background = "red";
    score.innerText--;

    play("wrong");
    setTimeout(() => {
      myNumber.value = "";
      body.style.background = "#222";
    }, 1000);
  }
}

function play(sound) {
  var audio = new Audio(`${sound}.mp3`);
  audio.play();
}

function highScores() {
  if (!funn) {
    funn = false;

    if(fun <= +score.innerText){
       
        highScore.innerText = +score.innerText
    }else{
  
        highScore.innerText = fun;
    }
  }
  
}

againBtn.addEventListener("click", () => {
    rand()
  body.style.background = "#222";
  randomNmbrBar.textContent = "?";
  message.innerText = "Start guessing...";
  randomNmbrBar.style.width = "15rem";
  score.innerText = 10;
  play("blue");
});
