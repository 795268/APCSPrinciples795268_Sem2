//Elena Campell

class Snake{
  constructor(x, y,w, c){
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body = [];

  }// end constructor

  loadSegment(){
    this.body.push(createVector(this.head.x, this.head.y));
  }

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.checkEdges();
    this.keyPressed();
  //  this.checkEdges();
    for(var i = 0; i< food.length; i++){
    if(this.head.x === food[i].loc.x &&
       this.head.y === food[i].loc.y){
         this.loadSegment();
         score++;
         timerValue = timerValue + 2;
         if (setting === 'w'){
           food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(80, 242,167)));
         }
         else if (setting === 'd') {
           food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70)));

         }
         else if (setting === 'v') {
           food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(235, 235,40)));

         }
         else if (setting === 'f') {
           food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(250,178,10)));
         }


     }
   }
    // update the body
    for (i = this.body.length-1; i>=0; i--){
    if (i >= 1){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
   }  if (i === 0){
      this.body[i].x = this.head.x;
      this.body[i].y = this.head.y;
    }
 }

}//end update

  render(){
 // render head
    fill(this.clr);
    rect(this.head.x, this.head.y, this.w, this.w);
 // render the body
    for(var i = 0; i < this.body.length; i++){

      if(i%3 === 0){ //alternates color of snake
        fill(255);
        rect(this.body[i].x, this.body[i].y, this.w, this.w);
      }
      else if(i%3 !== 0){
        fill(this.clr);
        rect(this.body[i].x, this.body[i].y, this.w, this.w);
      }
   }
 }



  tangled(){
    //for loop checking each segment in the segment array
    for(var i = 1; i < this.body.length; i++){
      //if stament checking if the headations are equal to each other
      if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){
        return true;
      }
    }
  }

   keyPressed(){
     this.head.add(this.vel);
    if(keyCode === UP_ARROW){
        this.vel.x = 0;
        this.vel.y = -30;
    }
    if(keyCode === DOWN_ARROW){
      this.vel.x = 0;
      this.vel.y = 30;
        }
    if(keyCode === LEFT_ARROW){
      this.vel.y = 0;
      this.vel.x = -30;
      }
    if(keyCode === RIGHT_ARROW){
      this.vel.y = 0;
      this.vel.x =30

      }
  }//end keyPressed

checkEdges(){
  if(this.head.x< 0 || this.head.x> width || this.head.y < 0 ||this.head.y> height) {
    gameState = 4;
  }
}


} //++++++++++++++++ End Snake
