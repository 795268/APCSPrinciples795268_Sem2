//  Elena Campell
// 	2/25 practice create
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[0] ;
var balls=[0] ;

var barWidth, barHeight;
var sortOption = 1;
var  btnbarSort, btnballSort;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars();
  loadBalls();
  runBalls();
  frameRate(5);
  runBars();
  newButton();

}

function draw() {
  background(5,5,5);
  if (sortOption ===1){
    startGame(); //start screen
  }else if (sortOption === 2){
    barSort(); //game screen
  }else if (sortOption === 3){
      ballSort();
    }
}


function newButton(){
  btnbarSort = new Button (150, 300, 150, 200, color(50, 100, 100));
  btnballSort = new Button (500, 300, 150, 200, color(100,50,100));
}

function startGame(){
  btnbarSort.render();
  btnballSort.render();
  fill(255);
  textsize(20);
  text('Bar Sort', 200, 550);
  text('Ball Sort', 500, 550);
  if (btnbarSort.isClicked()=== true){ //go to instructions page
    sortOption = 2;
  }else if (btnballSort.isClicked()===true){
    sortOption = 3;
  }
}
function barSort(){
bubbleSortBars();
}

function ballSort(){
  bubbleSortBalls();
}
function loadBars(){
  for (var i = 0; i< 40; i++){
    barWidth = (width/40);
    barHeight = Math.floor(random(1, height));
    bars[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
  }
}

function runBars(){
  for (var i = 0; i<bars.length; i++){
    bars[i].run();
  }
}

function  updateBars(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(0);
  runBars();
}

function bubbleSortBars(){

  for (var j = 0; j < bars.length-1; j++){
    if (bars[j].getHeight()> bars[j+1].getHeight()){
    swap(bars, j, j+1);
    update();
    }
  }
}

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function loadBalls(n){
  for (var i =0 ; i < n; i++){
    var red = random(0,255);
    balls[i] = new Ball (i*40+20, 400, color(red, 0, 0), red);
  }
}
function runBalls(){
for (var i =0 ; i<balls.length; i++){
  balls[i].run();
    }
}
function  updateBalls(){
  for(var i=0; i<balls.length; i++){
    balls[i].set(i);
  }
  background(200,200,200);
  runBalls();
}
function bubbleSortBalls(){

  for (var j = 0; j < balls.length-1; j++){
    if (balls[j].getColor()< balls[j+1].getColor()){
    swap(balls, j, j+1);
    update();
    }
  }
}
