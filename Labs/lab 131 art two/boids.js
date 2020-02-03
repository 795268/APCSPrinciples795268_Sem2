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
    this.render();
    this.checkEdges();
  }

  update(){
    this.vel.limit(3);//limits the velocity
    this.vel.add(this.acc);//adds acceleration to velocity
    this.loc.add(this.vel);//adds velocity to location

    // var distToCenter;
    // distToCenter = this.loc.dist(mainBoid);//finds the distance from the ship(s) to the planet
    //
    // this.acc = p5.Vector.sub(mainBoid, this.loc);
    // this.acc.normalize();
    // this.acc.mult(0.1);
  }
  //
  // render(){//makes lines between the boids
  //   for(var i = boids.length - 1; i > 0; i--){
  //     if(this.loc.dist(boids[i].loc) < 200){
  //       stroke(this.clr);
  //       line(400, 400, boids[i].loc.x, boids[i].loc.y);
  //     }
  //   }
  //   ellipse(this.loc.x, this.loc.y, 30, 30);
  // }

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
