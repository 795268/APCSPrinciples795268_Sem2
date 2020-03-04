//  Elena Campell
// 	2/25 practice create
//  This is a comment
//  The setup function function is called once when your program begins
var barsR=[] ;
var ballsR=[] ;
var barsB =[];
var ballsB =[];
var barsG=[];
var ballsG =[];
var color, sortType;
var barWidth, barHeight;
var gameState = 1;
var  btnbarSort, btnballSort, btnBTM, btnBlue, btnRed, btnGreen;
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
    choseColor();
  }else if (gameState === 3){ //ball sort
    redSort();
  }else if (gameState === 4){
    blueSort();
  }else if (gameState === 5){
    greenSort();
  }
}

function newButton(){
  btnbarSort = new Button (150, 150, 150, 150, color(50, 100, 100));
  btnballSort = new Button (500, 150, 150, 150, color(100,50,100));
  btnBTM = new Button ( 350,100,100, 200, color(64,250,35) );
  btnRed = new  Button (114, 500, 114, 150, color (150, 0, 0 ) );
  btnGreen = new Button (342, 500, 114, 150, color(0,150,0));
  btnBlue = new Button (570, 500, 114, 150, color (0,0,150));
}

// function barSort(){
//   btnBTM.render();
//   fill(255);
//   text('Main Menu', 360, 320);
//   bubbleSort();
//   if(btnBTM.isClicked()===true){
//     gameState =1;
//     background(5,5,5);
//   }
// }
//
// function ballSort(){
//   btnBTM.render();
//   fill(255);
//   text('Main Menu', 360, 320);
//   bubbleSort();
//   if(btnBTM.isClicked()===true){
//     gameState =1;
//     background(5,5,5);
//   }
// }
function startGame(){
  btnbarSort.render();
  btnballSort.render();
  fill(255);
  textSize(20);
  text('Bar Sort', 185, 330);
  text('Ball Sort', 535, 330);
  if (btnbarSort.isClicked()=== true){ //go to instructions page
    gameState = 2;
    sortType = 'bar';
  }else if (btnballSort.isClicked()===true){
    gameState = 2;
    sortType = 'ball';
  }
}

function choseColor(){
  btnRed.render();
  btnBlue.render();
  btnGreen.render();
  fill(255);
  textSize(20);
  text('Sort Red', 127, 670);
  text('Sort Green', 355, 670);
  text ('Sort Blue', 577, 670);
  checkColor();
  if (color === 'red'){
    gameState = 3;
  }else if (color === 'green'){
    gameState = 4;
  }else if (color === 'blue'){
    gameState = 5;
  }
}

function loadObjects(){
  for (var i = 0; i< 20; i++){ // load arrays of red objects
    var red = random(0,255);
    barWidth = (width/20);
    barsR[i]= new Bar(i*barWidth, 0, barWidth, color(red,0,0), red, 0, 0 );
    ballsR[i] = new Ball (i*40+20, 400, color(red, 0, 0), red,0,0);
  }
  for (var i =0 ; i < 20; i++){ // load arrays of green objects
    var green = random(0,255);
    barWidth = (width/20);
    barsG[i]= new Bar(i*barWidth, 0, barWidth, color(0,green,0), 0, green, 0 );
    ballsG[i] = new Ball (i*40+20, 400, color(0, green, 0), 0,green,0);
  }

    for (var i =0 ; i < 20; i++){ // load arrays of blue objects
      var blue = random(0,255);
      barWidth = (width/20);
      barsB[i]= new Bar(i*barWidth, 0, barWidth, color(0,0,blue), 0, 0,blue );
      ballsB[i] = new Ball (i*40+20, 400, color(0, 0, blue), 0,0,blue);
    }
}


function runObjects(){
  if (gameState===3){ // run red objects
    for (var i = 0; i<20; i++){
      if (sortType === 'bar'){
        barsR[i].run();
      }else if(sortType === 'ball'){
      ballsR[i].run();
    }
    }
  }else if (gameState===4 ){ // run green objects
    for (var i =0 ; i<20; i++){
      if (sortType === 'bar'){
        barsG[i].run();
      }else if(sortType === 'ball'){
      ballsG[i].run();
    }
      }
    }else if (gameState === 5){ // run blue objects
      for (var i =0 ; i<20; i++){
      if (sortType === 'bar'){
        barsB[i].run();
      }else if(sortType === 'ball'){
      ballsB[i].run();
    }
    }
  }
}

function redSort(){
    if(sortType === 'bar'){
      bubbleSort(barsR);
    }else if (sortType === 'ball'){
      bubbleSort(ballsR)
    }
}
function greenSort(){
    if(sortType === 'bar'){
      bubbleSort(barsG);
    }else if (sortType === 'ball'){
      bubbleSort(ballsG)
    }
}
function blueSort(){
  if(sortType === 'bar'){
    bubbleSort(barsB);
  }else if (sortType === 'ball'){
    bubbleSort(ballsB)
  }
}

function checkColor(){
    if( btnRed.isClicked()=== true){
      color = 'red';
    }else if (btnBlue.isClicked()=== true){
      color = 'blue';
    }else if (btnGreen.isClicked()=== true){
      color = 'green';
    }
  }


function bubbleSort(arr){

  for (var j = 0; j<arr.length-1;j++){
    if(arr[j].getColor()> arr[j+1].getColor()){
      swap(arr, j, j+1);
      update();
      }
    }
  }

function update(){
  if (gameState ===3 ){ // update red arrays
    for(var i=0; i<20; i++){
      if (sortType === 'bar'){
        barsR[i].set(i);
      }else if(sortType === 'ball'){
      ballsR[i].set(i);
    }
  }
    background(0);
    runObjects();
  }else if (gameState===4){ // update green arrays
    for(var i=0; i<20; i++){
      if (sortType === 'bar'){
        barsG[i].set(i);
      }else if(sortType === 'ball'){
      ballsG[i].set(i);
    }
  }
    background(0);
    runObjects();
  }else if (gameState === 5){ // update blue arrays
    for(var i=0; i<20; i++){
      if (sortType === 'bar'){
        barsB[i].set(i);
      }else if(sortType === 'ball'){
      ballsB[i].set(i);
    }
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
