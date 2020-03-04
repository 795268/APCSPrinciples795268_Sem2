class Ball{

  constructor(x, y, clr,r){
    this.x = x;
    this.y = y;
    this.clr = clr;
    this.r = r;
  }

render(){
  fill( this.clr);
  ellipse(this.x, this.y, 30, 30);
}

run(){
  this.render();
}

getColor(){
  return this.r;
}

set(i){
  this.x=i*40+20;
}


}// end ball class
