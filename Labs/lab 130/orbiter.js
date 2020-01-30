
//elena campell
class Orbiter{

constructor(){

}

run(){
  this.render();
}
render(){
  for(var i = 0; i < boids.length; i ++){
    fill(255);
  push();
  translate (boids[i].loc.x, boids[i].loc.y);
  rotate (PI);
  ellipse(40, 10, 20, 20);
  pop();
}
}

}// end orbiter class
