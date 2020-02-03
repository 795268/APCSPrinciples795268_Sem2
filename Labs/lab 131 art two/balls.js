//elena Campell
class Ball{

constructor (x,y, dx,dy, clr,w ){
  this.loc = createVector(x, y);
  this.vel = createVector(dx, dy);
  this.acc = createVector(0,1);
  this.clr = color(random(255), random(255), random(255));
  this.w = random(20,60);
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
  this.loc.add(this.vel);
  this.acc.limit(5);
      if(this.loc.dist(boids[0].loc)<200){
            this.clr = color(30,30, random(50,255));
          }else if(this.loc.dist(boids[1].loc)<200){
            this.clr = color(30,random(50,255),30)
          } else if (this.loc.dist(boids[2].loc)<200){
              this.clr = color(random(50,255), 30, 30 );
            }
    for ( var i =boids.length-1; i >=0; i--){ // goes through array
      if(this.loc.dist(boids[i].loc)<200){ // if the distance between two bois is less than 200
          stroke(this.clr);
        line(this.loc.x, this.loc.y, boids[i].loc.x,boids[i].loc.y ); // draw a line
        }
    }
}



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
