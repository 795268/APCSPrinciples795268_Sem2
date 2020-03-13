//  First Constructor Function
// Elena, Seby,Natalie
// March 11, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
  //  this.clr = this.getColor();//random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 // getColor(){
 //   if(this.id%2 === 0) {
 //
 //   }else{
 //
 //   }
 // }

 run(){
   this.checkEdges();
   this.isColliding();
   this.removeBall();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
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
      this.loc.y = height-2;
    }
     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    if(this.id >= 0){//  if not mainBall


    }

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  isColliding(){ // if ball is hitting the paddle
    if (this.loc.x> paddle.loc.x &&
    this.loc.x < paddle.loc.x +paddle.w &&
    this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y +paddle.h){
      return true;
    } else{
      return false;
    }
  }

  removeBall(){ // remove balls that hit the paddle
    for (var i = balls.length-1; i >= 0; i--){
      if (balls[i].isColliding() ===true && -this.vel.y > 0  && this.id%2 === 1){
        balls.splice(i, 1);
      } else if (balls[i].isColliding() ===true && this.vel.y < 0  && this.id%2 === 0 ){
        balls.splice(i, -1);
      }else if (mainBall.isColliding() ===true){
        textSize(70);
        text('GAME OVER', 100, 300);
      }
      }

    }

 render(){
  //  **************************************************************
   if(this.id < 0){
    fill (0,0,255);
  }else if(this.id%2 === 0){
    fill (255,0,0);
   }else{
    fill (0,255,0);
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************
}//  end Ball class
