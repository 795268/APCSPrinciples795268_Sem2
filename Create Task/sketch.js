//  Elena Campell
// snake game
//  The setup function function is called once when your program begins


var  header_height, snake, difficulty, setting
var gameState = 1;
var timerValue = 15;
var h = 10;
var score = 0;
var food = [];
var t1,t2;
var btnEasy, btnMed, btnHard, btnInstructions, btnBack, btnBTMI, btnBTME, btnReplay, bDesert, bWater, bVolcano, bForest;

// function preload(){
//   soundFormats('mp3');
//   crunch = loadSound('crunch.mp3');
// }

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  loadObjects(2);
  newButton();
  setInterval(timeIt, 1000); // for timer
  // crunch.setVolume(1);
  // crunch.play();
}

function draw(){
    if (gameState ===1){
      setBackground(); //chose theme
    }else if(gameState === 5){
      instructions();
    }
    else if (gameState === 2){ // chose dificulty
      startGame()
    }else if (gameState === 3){// play game
      playGame();
    }else if (gameState === 4){ //game over screen
      endGame();
  }
}

function newButton(){ // creates new button objects
  btnEasy = new Button(50, 300, 200, 200, color(78, 219, 18) );
  btnMed = new Button(300, 300, 200, 200, color (250,250,7));
  btnHard = new Button(550, 300, 200, 200, color(250, 0, 0));
  btnReplay = new Button (66, 100, 300, 100, color (255));
  btnBTME = new Button(432, 100, 300, 100, color(255));
  bDesert = new Button(0, 0, 200, 200, color (217, 189, 124));
  bWater = new Button(600, 0 ,200, 200, color(84, 195, 232));
  bVolcano = new Button (0, 600, 200, 200, color (199, 57, 14));
  bForest = new Button (600, 600, 200, 200, color (21, 163, 40 ));
  btnInstructions = new Button( 300, 650, 200, 100, color (255));
  btnBack = new Button(350, 550, 100, 100, color (250, 0,0))
}

function setBackground(){
  background(0);
  fill(255);
  textSize(100);
  textAlign(LEFT);
  text("SNAKE GAME", 70, 420);
  bWater.render();
  bDesert.render();
  bVolcano.render();
  bForest.render();
  btnInstructions.render();
  fill(0);
  textSize(30);
  text('instructions',325,710);


  if (btnInstructions.isClicked()){
    gameState = 5;
  }
  if(bWater.isClicked()) setting = 'w'; // chose theme
  else if (bDesert.isClicked()) setting = 'd';
  else if (bVolcano.isClicked()) setting = 'v';
  else if (bForest.isClicked()) setting = 'f';

  if (bWater.isClicked() || bDesert.isClicked() || // go to next game state
  bVolcano.isClicked() || bForest.isClicked()){
    gameState =2;
  }

  }

function instructions(){
  background(0);
  textSize(25);
  fill(255);
  text('choose one of the four different colors, then select difficulty',80, 200);
  text('use arrow keys to move the snake and eat the food squares',80, 250 );
  text( 'you will LOSE if: ',80, 300);
  text('-the timer runs out',130, 350 );
  text('-the snake goes off the edge of the page',130, 400 );
  text('-the head touches any other part of the snake',130, 450);
  btnBack.render()
  fill(255);
  text('back',375,610);
  if(btnBack.isClicked()){
    gameState = 1;
  }

}

function startGame(){
  if (setting === 'w')background(84, 195, 232); // water background
  else if (setting === 'd') background(217, 189, 124); // desert background
  else if (setting === 'v') background(199, 57, 14); // volcano background
  else if (setting === 'f') background(21, 163, 40 ); // forest background

  btnEasy.render(); //draws buttons
  btnMed.render();
  btnHard.render();

  textSize (60); //text for buttons
  fill(255);
  text ("EASY", 65, 525, 200, 200);
  text ("HARD", 560, 525, 200, 200);
  textSize(45);
  text ("MEDIUM", 305, 530, 200, 200);

    checkDifficulty(); // checks which difficulty is chosen
    if (difficulty === 'easy' || difficulty === 'medium'|| difficulty === 'hard'){
      if (difficulty === 'easy'){
        loadObjects(7);
      }else if (difficulty === 'medium'){
        loadObjects (5);
      }else if (difficulty === 'hard'){
        loadObjects (2);
      }
      gameState = 3; // play game
    }
}

function playGame(){
  frameRate(10);
  if (setting === 'w')background(84, 195, 232);
  else if (setting === 'd') background(217, 189, 124);
  else if (setting === 'v') background(199, 57, 14);
  else if (setting === 'f') background(21, 163, 40 );  runObjects();
  fill(255);
  textSize(30);
  text("SCORE:" +score, 100, 50); // displays the score
  checkTangled();
  if (timerValue >= 10) { // displays timer
    text("0:" + timerValue, 100, 100);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, 100, 100);
  }
  if (timerValue == 0) { // if timer gets to zero, game over
    gameState = 4;
  }
}

function timeIt() { // timer funtion
  if (timerValue > 0) {
    timerValue--;
  }
}

function endGame(){ //end game screen
  textAlign(CENTER);
  background(137,21,21);
  fill(255);
  textSize(100);
  text("GAME OVER", 400, 500);

  btnReplay.render();
  btnBTME.render();

  fill(0);
  textSize(40);
  text ("REPLAY", 220, 145);
  text ("LEVEL", 220, 185)
  text ("BACK TO", 580, 145);
  text("MAIN MENU", 580, 185);
  if (btnBTME.isClicked()){ // go back to main menu
  //  gameState = 1;
    difficulty = 'startOver';
    clearEverything();
  }
  if (btnReplay.isClicked()=== true){ // replay level
gameState = 2;
    score = 0 ;
    timerValue = 10;
    food = [];
    }
  }

function loadObjects(n){ // load different color snake and food based on theme

  if (setting === 'w'){
    snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(133, 6, 153));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(80, 242,167));
      }
  }
  else if (setting === 'd') {
    snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(227, 69, 7));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70));
      }
  }
  else if (setting === 'v') {
    snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(0));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(235, 235,40));
      }
  }
  else if (setting === 'f') for (var j = 0; j < n; j++){
    snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(255, 34, 0));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(250,178,10));
    }
  }
}

function runObjects(){
    snake.run();
  for(var i = 0; i< food.length; i++){
    food[i].run();
    }
  }


function checkTangled(){
  if (snake.tangled() === true) {
    gameState = 4;
    }
  }

function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;
  score = 0 ;
  timerValue = 10;
  food = [];
  snake.vel.x = 0;
  snake.vel.y= 0;
}

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
     difficulty = 'easy';
   }
 if (btnMed.isClicked()===true){
    difficulty = 'medium';
  }if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}
