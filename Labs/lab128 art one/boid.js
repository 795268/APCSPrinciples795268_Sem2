// Boid class

class Boid{

constructor(x, y, dx, dy,){
  this.loc = createVector(x, y);
  this.vel = createVector (dx, dy);
  this.acc = createVector (0, -1);
  this.clr =color( random (255), random(255), random(255));
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
  for ( var i =boids.length-1; i >0; i--){ // goes through array
    if(this.loc.dist(boids[i].loc)<200){ // if the distance between two bois is less than 200
      stroke(this.clr);
      line(this.loc.x, this.loc.y, boids[i].loc.x,boids[i].loc.y ); // draw a line
    }
  }

}


checkEdges(){ // to bounce off edges
  if(this.loc.x< 0) this.vel.x = -this.vel.x
  if (this.loc.x> width) this.loc.x = -this.vel.x;
  if (this.loc.y < 0) this.loc.y = height;
  if(this.loc.y> height) this.vel.y = -this.vel.y;
}

}// end boid class
