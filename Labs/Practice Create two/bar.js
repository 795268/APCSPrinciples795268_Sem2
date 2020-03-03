class Bar {

constructor (x, y, w, h, clr, r){
this.loc = createVector(x,y);

this.w = w;
this.h = h;
this.clr = clr;
this.r = r; 
}

render(){
  fill(200, 10, 20 );
rect (this.loc.x, this.loc.y, this.w, this.h);

}

run(){
  this.render();
  this.update();
}

getColor(){
  return this.r;
}

getHeight(){
  return this.h;
}
set(i){
  this.loc.x=i*25;

}


}// end bar class
