window.addEventListener('load', init);
//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};
//To change level
const currentLevel = levels.easy;

let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    "achieve",
    "balance",
    "communicate",
    "contribute",
    "develop",
    "educate",
    "evaluate",
    "exercise",
    "facilitate",
    "generate",
    "harvest",
    "identify",
    "implement",
    "improve",
    "influence",
    "initiate",
    "innovate",
    "interact",
    "investigate",
    "justify",
    "knowledge",
    "language",
    "maintain",
    "manage",
    "navigate",
    "negotiate",
    "observe",
    "organize",
    "participate",
    "perform",
    "persuade",
    "practice",
    "prepare",
    "present",
    "prioritize",
    "produce",
    "provide",
    "question",
    "realize",
    "recommend",
    "relate",
    "research",
    "resolve",
    "respond",
    "review",
    "reward",
    "satisfy",
    "schedule",
    "select",
    "solve",
    "summarize",
    "support",
    "sustain",
    "synthesize",
    "utilize",
    "verify",
    "visualize",
    "volunteer",
    "welcome",
    "withdraw",
    "wonder",
];

//initialize game
function init(){
    //Show numbers of seconds in UI
    seconds.innerHTML = currentLevel;
   //load word from array
   showWord(words);
   //Start matching on word input
   wordInput.addEventListener("input", startMatch);

   //call countdown every second
   setInterval(countdown, 1000);
   //check game status
   setInterval(checkStatus, 50);
}

//Start Match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    //if score is 1, display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct!!!";
        return true;
    }else{
        message.innerHTML = "";
        return false;
    }
}

//pick & show rondom word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

//countdown function
function countdown(){
    //Make sure time is not run out
    if(time > 0){
       time--
    } else
    if(time === 0){
        //Game is over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}
//Check game sataus

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over!";
         score = -1;
    }
}