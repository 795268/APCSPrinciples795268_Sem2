//  Elena Campell
// 	2/25 practice create
//  This is a comment
//  The setup function function is called once when your program begins
var barsC=[] ;
var barsS = [];
var ballsC=[] ;
var ballsS = [];
var sortType, what ;
var barWidth, barHeight;
var gameState = 1;
var  btnbarSort, btnballSort, btnBTM, btnSizeSort, btnClrSort;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();
  frameRate(5);
  newButton();
}

function draw() {
//  background(5,5,5);
  if (gameState ===1){
    choseSort(); //start screen
  }else if (gameState === 2){//bar sort
    sortWhat();
  }else if (gameState === 3){ //ball sort
    colorSort();
  }else if (gameState===4){
    sizeSort();
  }
}

function newButton(){
  btnbarSort = new Button (150, 150, 150, 150, color(50, 100, 100));
  btnballSort = new Button (500, 150, 150, 150, color(100,50,100));
  btnBTM = new Button ( 350,100,100, 200, color(64,250,35) );
  btnSizeSort = new Button (150,500, 150, 150, color(17,156, 59) );
  btnClrSort = new Button(500, 500, 150, 150, color(163,16, 43));
}

function choseSort(){
  btnbarSort.render();
  btnballSort.render();
  fill(255);
  textSize(20);
  text('Bar Sort', 185, 330);
  text('Ball Sort', 535, 330);
  checkSort();
  if (sortType === 'ball' || sortType === 'bar'){
    gameState = 2;
  }
}

 function sortWhat(){
   btnSizeSort.render();
   btnClrSort.render();
   fill(255);
   textSize(20);
   text('Color Sort', 535, 670);
   text('Size Sort', 185, 670);
   checkWhat();
  if ( what === 'color' || what === 'size'){
     if (what === 'color'){
       gameState = 3 ;
     }
    else if (what === 'size'){
       gameState === 4;
     }
   }
 }

function sizeSort(){ // gamestate 4
  //loadObjects();
  bubbleSort();
}

function colorSort(){ // game state  3
  //loadObjects();
  bubbleSort();
}
// function barSort(){
//   btnBTM.render();
//   fill(255);
//   text('Main Menu', 360, 320);
//   bubbleSort();
//   if(btnBTM.isClicked()===true){
//     gameState =1;
//     background(5,5,5);
//   }
// }
//
// function ballSort(){
//   btnBTM.render();
//   fill(255);
//   text('Main Menu', 360, 320);
//   bubbleSort();
//   if(btnBTM.isClicked()===true){
//     gameState =1;
//     background(5,5,5);
//   }
// }


function loadObjects(){

      for (var i =0 ; i < 20; i++){
        var red = random(0,255);
        ballsC[i] = new Ball (i*40+20, 400, 30, color(red, 0, 0), red);
      }
        for (var i =0 ; i < 10; i++){
      ballWidth = random(0,50);
      ballsS[i] = new Ball ( i +20, 400, ballWidth, color(random(255)));
    }

       for (var i = 0; i< 40; i++){
         barWidth = (width/40);
         var red = random(0,255);
         barsC[i] = new Bar (i*barWidth, 0, barWidth, height, color(red, 0,0), red )
       }

       for (var i = 0; i< 40; i++){
         barWidth = (width/40);
         barHeight = Math.floor(random(1, height));
         barsS[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
       }

   }


// function loadObjects(){
//   if (sortType === 'ball'){
//     if (what === 'color'){ // sort balls by color
//
//       for (var i =0 ; i < 20; i++){
//         var red = random(0,255);
//         ballsC[i] = new Ball (i*40+20, 400, 30, color(red, 0, 0), red);
//       }
//     }else if (what === ' size'){
//       for (var i =0 ; i < 10; i++){
//       ballWidth = random(0,50);
//       ballsS[i] = new Ball ( i +20, 400, ballWidth, color(random(255)));
//     }
//   }
//    if (sortType === 'bar'){
//      if(what === 'color'){
//        for (var i = 0; i< 40; i++){
//          barWidth = (width/40);
//          var red = random(0,255);
//          barsC[i] = new Bar (i*barWidth, 0, barWidth, height, color(red, 0,0), red )
//        }
//
//      }else if (what === ' size'){ // sort bars by size
//        for (var i = 0; i< 40; i++){
//          barWidth = (width/40);
//          barHeight = Math.floor(random(1, height));
//          barsS[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
//        }
//      }
//    }
// }
// }

function runObjects(){
  if (gameState===2){
    for (var i = 0; i<barsS.length; i++){
      barsS[i].run();
    }
    for (var i = 0; i< barsC.length; i++){
      barsC.run();
    }
  }else if (gameState===3 ){
    for (var i =0 ; i<ballsS.length; i++){
      ballsS[i].run();
      }
      for (var i =0 ; i<ballsC.length; i++){
        ballsC[i].run();
        }
    }

  }


function bubbleSort(){
  if (gameState===2 ){
    if(what === 'color'){
      for (var j = 0; j < barsC.length-1; j++){
        if (barsC[j].getColor()> barsC[j+1].getColor()){
        swap(barsC, j, j+1);
        update();
        }
      }

    }else if(what === 'size'){
  for (var j = 0; j < barsS.length-1; j++){
    if (barsS[j].getHeight()> barsS[j+1].getHeight()){
    swap(barsS, j, j+1);
    update();
    }
  }
}
}else if (gameState===3){
  if(what === 'color'){
    for (var j = 0; j < ballsC.length-1; j++){
      if (ballsC[j].getColor()< ballsC[j+1].getColor()){ // sorts by color
      swap(ballsC, j, j+1);
      update();
        }
      }
  }else if (what === 'size'){
    for (var j = 0; j < ballsS.length-1; j++){
      if (ballsS[j].getHeight()< ballsS[j+1].getHeight()){ // sorts by color
      swap(ballsS, j, j+1);
      update();
        }
        }
      }
  }
}

function checkSort(){ // checks which sort type was selected
  if ( btnbarSort.isClicked() === true){
    sortType = 'bar';
  }else if (btnballSort.isClicked()===true){
    sortType = 'ball';
  }
}

function checkWhat(){ // checks what the objects will be sorted by selected
  if ( btnClrSort.isClicked() === true){
    what = 'color';
  }else if (btnSizeSort.isClicked()===true){
    what = 'size';
  }
}


function  update(){
  if (gameState ===2 ){
    if (what === 'color'){
      for(var i=0; i<barsC.length; i++){
        barsC[i].set(i);
      }
      background(0);
      runObjects();
    }else if (what === 'size'){
      for(var i=0; i<barsS.length; i++){
        barsS[i].set(i);
      }
      background(0);
      runObjects();
    }

  }else if (gameState===3){
    if (what=== 'color'){
      for(var i=0; i<ballsC.length; i++){
        ballsC[i].set(i);
      }
      background(0);
      runObjects();
    }else if (what === 'size'){
      for(var i=0; i<ballsS.length; i++){
        ballsS[i].set(i);
      }
      background(0);
      runObjects();
    }

  }
}  // end update

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
