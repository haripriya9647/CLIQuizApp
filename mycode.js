var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score=0;
//highest scores
var highScores = [
{
  name : "priya",
  score : "8",
},
{
  name: "Komali",
  score: "8",
}
]

//questions for level 1
var questions=[
  {
  question:"Summer begins in June in the Southern Hemisphere.",
  answer:["Yes","No"],
  right:1
  },
  {question:"The official currency of Iraq is the dinar.",
  answer:["Yes","No"],
  right:2
  },
  {question:"“Mining” is a term that refers to the process of creating mechanisms for cryptocurrency issuance.",
  answer:["Yes","No"],
  right:1
  },
  {question:"Arlanda Airport serves the city of Oslo in Europe.",
  answer:["Yes","No"],
  right:2
  }
  ]

//questions for level 2
  var levelTwo=[
  {
  question:"“Third Rome” is a nickname given to the city of Moscow, Russia..",
  answer:["Yes","No"],
  right:1
  },
  {question:"The river that passes through the city of Hamburg in Germany is the Rhine..",
  answer:["Yes","No"],
  right:2
  },
  {question:"The current supreme leader of North Korea is Kim Il-sung.",
  answer:["Yes","No"],
  right:2
  },
  {question:"Jamaica’s head of state is still Queen Elizabeth II.",
  answer:["Yes","No"],
  right:2
  }
  ]

//from here game starts
function welcome()
{
var playerName = readlineSync.question("Hello there !! What is your name ??");
console.log(chalk.blue("Welcome to Yes/No quiz " +chalk.green( playerName)));
}
 //play function for level 1
function play(question,answer,right)
{
var useranswer = readlineSync.keyInSelect(answer);
if ((useranswer+1) === right){
score=score+1;
console.log(chalk.green("You are absolutely right!! Your score is:" +score));
} else {
score=score-1;
console.log(chalk.red("Oops!! You are Wrong.Your score is:" +score));
}
}

//function game access questions from questions function
function game()
{
for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    console.log("    ");
    console.log(chalk.yellow(currentQuestion.question));
    play(currentQuestion.question, currentQuestion.answer,currentQuestion.right);
  }
}

//shows score at end of game
function showScores() {
console.log("     ");
console.log("Results");
  console.log("YAY! You SCORED: ", score);
  
}

//it checks whether player is eligible for playing level 2 or not
function Check()
{
  if(score==4)
  {
    console.log(chalk.bgBlue("Congratulations !!  You are eligible for Level 2 "));
    gameLevelTwo();
    finalcheck();
  }
  else if (score<4 && score>=2){
    console.log(chalk.red("You are moderate you can retry this quiz once again."));
    
  }
  else{
    console.log(chalk.red("Keep in touch with general knowledge!! You seems weak."));
  }
console.log("Highest scores are: ");
for(var j=0;j<highScores.length;j++)
{
var currentHighScorer = highScores[j];
console.log((currentHighScorer.name)+":"+(currentHighScorer.score))
}
}
//calling of all functions
welcome();
game();
showScores();
Check();

//checks answers for level 2 questions
function playing(question,answer,right)
{
var useranswer = readlineSync.keyInSelect(answer);
if ((useranswer+1) === right){
score=score+1;
console.log(chalk.green("You are absolutely right!! Your score is:" +score));
} 
else{
score=score-1;
console.log(chalk.red("Oops!! You are Wrong.Your score is:" +score));
}
}

//accesses level 2 questions from fucntion level2
function gameLevelTwo()
{
for (var k=0; k<levelTwo.length; k++) 
{
    var currentQuestion = levelTwo[k];
    console.log("   ")
    console.log(chalk.yellow(currentQuestion.question));
    playing(currentQuestion.question, currentQuestion.answer,currentQuestion.right);
}
}

//this gives comment on final score of level2
function finalcheck()
{
  if (score==8)
  {
    console.log(chalk.bgBlue("Congratulation!! You are highest scorer.Send me a screenshot so that I can add your name:)"));
  }
  else if (score<8 && score>=5)
  {
    console.log(chalk.red(" You cannot reach to highest Score:("));
  
  }
  else
  {
    console.log(chalk.red("Better luck next time"));
  }
}

