//Variable declarations
var timerEl = $("#game-timer");
var startButton = $("#start-button");
var gameCard = $("#game-card");
var characterImg = $("#character-img");
var characterDesc = $("#character-desc");
var answerA = $("#a-button");
var answerB = $("#b-button");
var answerC = $("#c-button");
var highScoresList = $("#high-scores");
//create option 1, 2, 3 var buttons for game answers?

//Imgs and img descriptions array
var characterArray = [
  {
    img: "assets/images/trafalgar-law.jpg",
    desc: "Trafalgar Law",
  },

  {
    img: "assets/images/kilala.jpg",
    desc: "Kilala",
  },

  {
    img: "assets/images/miki-kuroda.jpg",
    desc: "Miki Kuroda",
  },
];

var answersArray = [
  {
    answerA: "Bleach",
    answerB: "One Piece",
    answerC: "JoJo's Bizarre Adventure",
    correctAnswer: "answerB",
  },

  {
    answerA: "Inuyasha",
    answerB: "Pokemon",
    answerC: "Hunter x Hunter",
    correctAnswer: "answerA",
  },

  {
    answerA: "Attack on Titan",
    answerB: "Darling in the Franxx",
    answerC: "Devilman Crybaby",
    correctAnswer: "answerC",
  },
];

var timer = 10;
var currentIndex = 0;

init();
function init() {
  gameCard.hide();
  renderCharacter();
  renderHighScores();
  renderAnswers();
}

startButton.on("click", startGame);

//WILL NEED TO LOOK AT THIS AGAIN
answerA.on("click", function () {
  currentIndex++;
  if (currentIndex === characterArray.length) currentIndex = 0;
  score++;
  renderCharacter();
  renderAnswers();
});

answerB.on("click", function () {
  currentIndex++;
  if (currentIndex === characterArray.length) currentIndex = 0;
  score++;
  renderCharacter();
  renderAnswers();
});

answerC.on("click", function () {
  currentIndex++;
  if (currentIndex === characterArray.length) currentIndex = 0;
  score++;
  renderCharacter();
  renderAnswers();
});

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
  gameCard.hide();
  startButton.show();
  var initials = prompt(
    "Your score is: " +
      score +
      "\nEnter your initials to be on the high scores list!"
  );
  var currentScores = JSON.parse(localStorage.getItem("gameScore")) || [];
  var userObj = {
    initials,
    score,
  };

  currentScores.push(userObj);
  localStorage.setItem("gameScore", JSON.stringify(currentScores));
  renderHighScores();
}

function renderCharacter() {
  characterImg.attr("src", characterArray[currentIndex].img);
  characterDesc.text(characterArray[currentIndex].desc);
}

function renderAnswers() {
  answerA.text(answersArray[currentIndex].answerA);
  answerB.text(answersArray[currentIndex].answerB);
  answerC.text(answersArray[currentIndex].answerC);
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
    }).text(scoreObj.initials + "----------" + scoreObj.score);
    highScoresList.append(newLi);
  }
}

//GAME BUTTON FUNCTIONALITY 3:12:00
