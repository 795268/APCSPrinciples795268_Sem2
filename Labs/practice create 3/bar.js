class Bar {

constructor (x, y, w, clr, r, g, b){
this.loc = createVector(x,y);
this.w = w;
this.clr = clr;
this.r = r;
this.g = g;
this.b = b;
}

render(){
  fill(this.clr);
rect (this.loc.x, this.loc.y, this.w, 800);

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
  this.loc.x=i*40+20;

}


}// end bar class
