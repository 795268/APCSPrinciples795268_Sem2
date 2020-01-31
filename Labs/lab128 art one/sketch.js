//  Elena Campell
// lab 1/28

var boids = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  frameRate(20);
loadBoids(10);

}

//  The draw function is called @ 30 fps
function draw() {
//  background(5,5,5,5);

runBoids();
}

function loadBoids(n){ // loads boid array
  for (var i =0; i< n; i++){
    boids[i] = new Boid(random(width), random(height), random(-3,3), random(-1,1),0);
    }
  }

function runBoids(){ // runs boids
  for (var i =0; i<boids.length; i++){
    boids[i].run();
    }
  }
