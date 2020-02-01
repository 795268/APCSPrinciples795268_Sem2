//elena Campell
class Ball{

constructor (x,y, dx,dy, clr,w ){
  this.loc = createVector(x, y);
  this.vel = createVector(dx, dy);
  this.acc = createVector(0,0);
  this.clr = color(random(255), random(255), random(255));
  this.w = random(10,50);
}

run(){
  this.render();
  this.checkEdges();
 this.update();
}

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, this.w, this.w);

}
update(){
  var mouseLoc = createVector (mouseX, mouseY)
  this.vel.limit(5);
   this.vel.add(this.acc);
 this.loc.add(this.vel);
  if (mouseIsPressed){
    this.acc = p5.Vector.sub(mouseLoc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.5);
    this.clr = color(255);
  }
  if(mouseReleased()= true){
    this.acc = random(0,1);
    this.clr = color(random(255), random(255), random(255));
  }
}
  // mouseIsReleased(){
//    this.acc = random(0,1);
  //  this.clr = color(random(255), random(255), random(255));
  // }


checkEdges(){
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
    this.loc.y = height -2;
  }
}


} // end ball class
