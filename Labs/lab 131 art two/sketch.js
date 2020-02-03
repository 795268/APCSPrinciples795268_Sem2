//  Elena Campell
//1/31 art two

var boids = [];
var balls = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(500);

}

//  The draw function is called @ 30 fps
function draw() {
background(5,5,5);
  runObjects();

}

function loadObjects(n){
  for (var i = 0; i< n; i++){
    balls[i] = new Ball(random(width), random(height), random(-3, 3), random(-3, 3));
  }
  for (var i = 0; i< 3; i++){
boids[i] = new Boid(random(width), random(height), random(-1, 1), random(-1, 1));
}
}


function runObjects(){
  for (var i = 0; i< balls.length; i++){
      balls[i].run();
    }
    for (var i = 0; i< boids.length; i++){
        boids[i].run();
      }
}
