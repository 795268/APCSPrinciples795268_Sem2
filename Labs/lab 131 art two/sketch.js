//  Elena Campell
//1/31 art two

var balls = [];
var mouseR;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(70);

}

//  The draw function is called @ 30 fps
function draw() {
background(5,5,5);
  runBalls();

}

function loadBalls(n){
  for (var i = 0; i< n; i++){
    balls[i] = new Ball(random(width), random(height), random(-3,3), random(-3,3));
  }
}

function mouseReleased(){
  mouseR = true;
}

function runBalls(){
  for (var i = 0; i< balls.length; i++){
      balls[i].run();
    }
}
