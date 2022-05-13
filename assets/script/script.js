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

//Answers arrays w/ correct answer
//!!Need to fix
var answersArray = [
  {
    answerA: "Bleach",
    answerB: "One Piece",
    answerC: "JoJo's Bizarre Adventure",
    // correctAnswer: answerB,
  },

  {
    answerA: "Inuyasha",
    answerB: "Pokemon",
    answerC: "Hunter x Hunter",
    // correctAnswer: answerA,
  },

  {
    answerA: "Attack on Titan",
    answerB: "Darling in the Franxx",
    answerC: "Devilman Crybaby",
    // correctAnswer: answerC,
  },
];

//Correct answers? (created array to try and fix correct answer problem)
//!!Need to fix
var correctAnswerArray = [
  {
    correctAnswer: answerB,
  },

  {
    correctAnswer: answerA,
  },

  {
    correctAnswer: answerC,
  },
];

//Logic variables
var timer = 10;
var currentIndex = 0;

//Initial page presentation
init();
function init() {
  gameCard.hide();
  renderCharacter();
  renderHighScores();
  renderAnswers();
}

//Starts game on button click
startButton.on("click", startGame);

//Changes current index for character and answers. (maybe check answer if I could get it to work)
answerA.on("click", function () {
  currentIndex++;
  if (currentIndex === characterArray.length) currentIndex = 0;
  renderCharacter();
  renderAnswers();
  checkAnswer();
});

answerB.on("click", function () {
  currentIndex++;
  if (currentIndex === characterArray.length) currentIndex = 0;
  renderCharacter();
  renderAnswers();
  checkAnswer();
});

answerC.on("click", function () {
  currentIndex++;
  if (currentIndex === characterArray.length) currentIndex = 0;
  renderCharacter();
  renderAnswers();
  checkAnswer();
});

//Start game function page and timer reaction
function startGame() {
  startButton.hide();
  gameCard.show();
  timer = 10;
  score = 0;
  var gameTimer = setInterval(() => {
    if (timer <= 0) {
      clearInterval(gameTimer);
      endGame();
    }

    timerEl.text("Time remaining: " + timer);
    timer--;
  }, 1000);
}

//End game prompt to pull up high scores list form
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

//Changing current character
function renderCharacter() {
  characterImg.attr("src", characterArray[currentIndex].img);
  characterDesc.text(characterArray[currentIndex].desc);
}

//Changing current answers
function renderAnswers() {
  answerA.text(answersArray[currentIndex].answerA);
  answerB.text(answersArray[currentIndex].answerB);
  answerC.text(answersArray[currentIndex].answerC);
}

//Interaction with local storage in order to display high scores
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

//Supposed to check answer but just gives user 'incorrect' everytime to make this a very short game since it also takes time off the clock for incorrect answers.
//!!Need to fix
function checkAnswer() {
  var correct = correctAnswerArray[currentIndex].correctAnswer;

  if ("click" === correct) {
    score++;
    alert("That Is Correct!");
  } else if ("click" !== correct) {
    timer--;
    alert("That Is Incorrect.");
  }
}
