//  Elena Campell
// 	2/25 practice create
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[] ;
var balls=[] ;

var barWidth, barHeight;
var gameState = 1;
var  btnbarSort, btnballSort, btnBTM;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();
  frameRate(5);
  newButton();
}

function draw() {
//  background(5,5,5);
  if (gameState ===1){
    startGame(); //start screen
  }else if (gameState === 2){//bar sort
barSort();
  }else if (gameState === 3){ //ball sort
    ballSort();
    }
}

function newButton(){
  btnbarSort = new Button (150, 300, 150, 200, color(50, 100, 100));
  btnballSort = new Button (500, 300, 150, 200, color(100,50,100));
  btnBTM = new Button ( 350,100,100, 200, color(64,250,35) );
}

function barSort(){
  btnBTM.render();
  fill(255);
  text('Main Menu', 360, 320);
  bubbleSort();
  if(btnBTM.isClicked()===true){
    gameState =1;
    background(5,5,5);
  }
}

function ballSort(){
  btnBTM.render();
  fill(255);
  text('Main Menu', 360, 320);
  bubbleSort();
  if(btnBTM.isClicked()===true){
    gameState =1;
    background(5,5,5);
  }
}
function startGame(){
  btnbarSort.render();
  btnballSort.render();
  fill(255);
  textSize(20);
  text('Bar Sort', 180, 550);
  text('Ball Sort', 530, 550);
  if (btnbarSort.isClicked()=== true){ //go to instructions page
    gameState = 2;
  }else if (btnballSort.isClicked()===true){
    gameState = 3;
  }
}

function loadObjects(){
  for (var i = 0; i< 40; i++){
    barWidth = (width/40);
    barHeight = Math.floor(random(1, height));
    bars[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
  }
  for (var i =0 ; i < 20; i++){
    var red = random(0,255);
    balls[i] = new Ball (i*40+20, 400, color(red, 0, 0), red);
  }
}

function runObjects(){
  if (gameState===2){
    for (var i = 0; i<bars.length; i++){
      bars[i].run();
    }
  }else if (gameState===3 ){
    for (var i =0 ; i<balls.length; i++){
      balls[i].run();
      }
    }
  }


function bubbleSort(){
  if (gameState===2 ){
  for (var j = 0; j < bars.length-1; j++){
    if (bars[j].getHeight()> bars[j+1].getHeight()){
    swap(bars, j, j+1);
    update();
    }
  }
}else if (gameState===3){
  for (var j = 0; j < balls.length-1; j++){
    if (balls[j].getColor()< balls[j+1].getColor()){ // sorts by color
    swap(balls, j, j+1);
    update();
      }
    }
  }
}

function  update(){
  if (gameState ===2 ){
    for(var i=0; i<bars.length; i++){
      bars[i].set(i);
    }
    background(0);
    runObjects();
  }else if (gameState===3){
    for(var i=0; i<balls.length; i++){
      balls[i].set(i);
    }
    background(0);
    runObjects();
  }
}  // end update

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
