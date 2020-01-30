//  Elena Campell
// lab 1/30

var boids = [];
var orbiters = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  frameRate(20);
loadObjects(1 );

}

//  The draw function is called @ 30 fps
function draw() {
//  background(5,5,5,5);

runObjects();
}

function loadObjects(n){ // loads boid array
  for (var i =0; i< n; i++){
    boids[i] = new Boid(random(width), random(height), 0, 0,);
    }
    for (var i =0; i< 3*n; i++){
      orbiters[i] = new Orbiter();
      }
  }


function runObjects(){ // runs boids
  for (var i =0; i<boids.length; i++){
    boids[i].run();
    }
    for (var i =0; i<orbiters.length; i++){
      orbiters[i].run();
      }
  }
