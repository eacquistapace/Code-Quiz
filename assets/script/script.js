//Variable declarations
var timerEl = $("#game-timer");
var startButton = $("#start-button");
var gameCard = $("#game-card");
var characterImg = $("#character-img");
var characterDesc = $("#character-desc");
var answerA = $("#a");
var answerB = $("#b");
var answerC = $("#c");
var highScoresList = $("#high-scores");
//create option 1, 2, 3 var buttons for game answers?

//Imgs and img descriptions array
var characterArray = [
  {
    img: "assets/images/trafalgar-law.jpg",
    desc: "Trafalgar Law",

    answers: {
      answerA: "Bleach",
      answerB: "One Piece",
      answerC: "JoJo's Bizarre Adventure",
    },
    correctAnswer: "One Piece",
  },

  {
    img: "assets/images/kilala.jpg",
    desc: "Kilala",

    answers: {
      answerA: "Inuyasha",
      answerB: "Pokemon",
      answerC: "Hunter x Hunter",
    },
    correctAnswer: "Inuyasha",
  },

  {
    img: "assets/images/miki-kuroda.jpg",
    desc: "Miki Kuroda",

    answers: {
      answerA: "Attack on Titan",
      answerB: "Darling in the Franxx",
      answerC: "Devilman Crybaby",
    },
    correctAnswer: "Devilman Crybaby",
  },
];

var timer = 10;
var currentIndex = 0;

init();
function init() {
  gameCard.hide();
  renderCharacter();
  renderHighScores();
}

startButton.on("click", startGame);

function startGame() {
  startButton.hide();
  gameCard.show();
  timer = 10;
  score = 0;
  var gameTimer = setInterval(() => {
    if (timer === 0) {
      clearInterval(gameTimer);
      endGame();
    }

    timerEl.text("Time remaining: " + timer);
    timer--;
  }, 1000);
}

function endGame() {
  console.log("Game Over");
}

function renderCharacter() {
  characterImg.attr("src", characterArray[currentIndex].img);
  characterDesc.text(characterArray[currentIndex].desc);
}

function renderHighScores() {
  var currentScores = JSON.parse(localStorage.getItem("gameScore")) || [];
  highScoresList.empty();
  if (highScoresList.length === 0) {
    return highScoresList.text("Be the first to get a high score!");
  }
  for (var index = 0; index < currentScores.length; index++) {
    var scoreObj = currentScores[index];
    var newLi = $("<li>", {
      class: "list-group-item",
    }).text(scoreObj.initials + "---------" + scoreObj.score);
    highScoresList.append(newLi);
  }
}
