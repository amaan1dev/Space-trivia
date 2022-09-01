var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is your name: "); //defining global variable to access userName in total score message


var score = 0;

var questions = [{
  question: "What is Milky way galaxy called in hindi? :",
  answer: "akash ganga"
}, {
  question: "which is known as dwarf planet? :",
  answer: "pluto"
}, {
  question: "First animal to sent to space and orbit the Earth? :",
  answer: "laika"
}, {
  question: "which Indian space organisation reached mars orbit in first attempt? :",
  answer: "Isro"
}, {
  question: "first manned mission to the moon? :",
  answer: "Apollo 11"
}
];

function welcome() {
  console.log("welcome " + userName + " to the SPACE TRIVIA, lets Play! ");
}


function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong");
  }
  console.log("current score: ", + score);
  console.log("---------------");
}




function game() {
  for (var i = 0; i < questions.length; i++) {
    var gameQuestion = questions[i];
    play(gameQuestion.question, gameQuestion.answer)
  }
}

function totalscore() {
  if (score >= 3) {
    console.log("Well played " + userName + " your score is " + score);
  }
  else {
    console.log("better luck next time " + userName + " your score is " + score);
  }
}

welcome();
game();
totalscore();
