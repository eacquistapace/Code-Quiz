//Variable declarations
var gameCard = $("#game-card");
var characterImage = $("#character-img");
var characterDesc = $("#character-desc");
var timerEl = $("#game-timer");
var startButton = $("#start-button");
var highScoresList = $("#high-scores");
//create option 1, 2, 3 var buttons for game answers?

//Imgs and img descriptions array
var characterArray = [
  {
    img: "./assets/images/trafalgar-law.jpg",
    desc: "Trafalgar Law",
  },

  {
    img: "./assets/images/kilala.jpg",
    desc: "Kilala",
  },

  {
    img: "./assets/images/miki-kuroda.jpg",
    desc: "Miki Kuroda",
  },
];

//Logic variables
var timer = 5;
var currentIndex = 0;
