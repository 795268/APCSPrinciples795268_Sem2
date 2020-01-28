// Boid class

class Boid{

constructor(x, y, dx, dy,){
  this.loc = createVector(x, y);
  this.vel = createVector (dx, dy);
  this.acc = createVector (0, -1);
  this.clr = color(random(255), random(255), random(255));
}

run(){
  this.update();
  this.checkEdges();
  this.render();
}
update(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  for ( var i =boids.length; i >0; i--){
    if(this.loc.dist(boids[i].loc)<200){
      fill(this.clr);
      line(this.loc.x, this.loc.y, boids[i].loc.x,boids[i].loc.y );
    }
  }

}


checkEdges(){
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vely;
}

}// end boid class
