// elena campell
class Boid {//creates boid class
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
  }

  run(){//runs boid functions
    this.update();
    this.checkEdges();
  }

  update(){
    this.loc.add(this.vel);

  }

  checkEdges(){//makes the boids bounce when they hit the edge of the canvas
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
    }
  }
}
