class Ball{

  constructor(x, y, clr,r,g,b ){
    this.x = x;
    this.y = y;
    this.clr = clr;
    this.r = r;
    this.g = g;
    this.b = b;
  }

render(){
  fill( this.clr);
  ellipse(this.x, this.y, 30, 30);
}

run(){
  this.render();
}

getColor(){
  if (color === 'red'){
    return this.r;
  }else if (color=== 'green'){
    return this.g;
  }else if (color === 'blue'){
    return this.b;
  }
}

set(i){
  this.x=i*40+20;
}


}// end ball class
