//  Elena Campell
// 2/06/20
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray = [];
var chosenPlayers = [];
function setup() {
  var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
 background(5, 5, 5);
 loadStats();
  fill(200, 30, 150);
//  input = createInput();
//  button = createButton('search');
  //button.position(input.x + input.width, 65);
  createPlayerSelectionList();

}

//  The draw function is called @ 30 fps
function draw() {

  getSelectedPlayers();
  for (var i = 0; i < chosenPlayers.length; i ++){
    loadPlayerStats(chosenPlayers[i]);
    }
  aggregateStats();
  getYears();
  getSmall();
  getLarge();

fill(150,151, 158);
rect(0,0,width,height);
  fill(130,107,85);//Brown
  rect(40,780, 720, 20)
  strokeWeight(6);// outline shapes
  stroke(255);
  ellipse(400,780, 720,820);
  fill(150,151, 158); // grey
  ellipse(400, 500, 240,240);
  fill(54,63,227 ); // blue
  rect(280, 500, 240, 300);
verticalText('3 Points', 20,400);
  graph();
}

function createPlayerSelectionList() {
  textAlign(CENTER);
background(200);
playerSel = createSelect(true);
playerSel.position((windowWidth-width)/2 + 40, (windowHeight-height)/2 ); // locate at 270,40 in canvas coordinates
playerSel.size(150, 200);
for(var i = 0; i < players.length; i++){ // loads selection list with all players from player array
   playerSel.option(players[i]);
  }
//  playerSel.changed(selectPlayer());
}

function changePlayer(){

}

function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i < playerSel.elt.selectedOptions.length; i++) {
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value); // loads an array with the selected players
  }
}

function loadPlayerStats(player) {
  // column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    // try adding an '*'
    statsArray = stats.findRows(player+"*", 2);
  }
  // for(var i = 0; i< statsArray.length; i++){
  // float(statsArray[0].get(36));
  // }
}

function aggregateStats(){
  results = [];
  for(var i = 0; i<statsArray.length; i++) {
    results.push(float(statsArray[i].get(36)));
  }
}



function getYears(){
  years = [];
  for(var i = 0; i<statsArray.length; i++) {
    years.push(statsArray[i].get(1));
  }
}

function getSmall(){
  smallest = results[0];
  for(var i = 0; i < results.length; i++){
    if (smallest > results[i]) {
      smallest = results[i];
    }
  }
}

function getLarge(){
  largest = results[0];
  for(var i = 0; i < results.length; i++){
    if (largest < results[i]) {
      largest = results[i];
    }
  }
}

function graph(){
  var x1, y1, x2, y2;
  for(var i = 0; i < results.length; i++){
    x1 = i*(width-80)/results.length + 40
    y1 = map(results[i], smallest, largest, 250, 750);
//    x2 = (i+1)*(width-80)/results.length + 40
  //  y2 = map(results[i+1], smallest, largest, 250, 750);
    fill(255,255,255,80);
    stroke(0);
    rect(x1, y1, (width-80)/results.length, 800-y1);
     stroke(255, 255, 255);
    // line(x1, y1, x2, y2);
     fill(0, 0, 255);
    // ellipse(x1, y1, 5, 5);
    textSize(16)
    textAlign(CENTER, BOTTOM);
    text(years[i], x1, 800);

  }
}
function verticalText(input, x, y) {
  var output = '';  // create an empty string

  for (var i = 0; i < input.length; i += 1) {
    output += input.charAt(i) + '\n'; // add each character with a line break in between
  }

  push(); // use push and pop to restore style (in this case the change in textAlign) after displaing the text
  textSize(20);
  stroke(255);
  fill(0,0,255);
  textAlign(CENTER, TOP); // center the characters horizontaly with CENTER and display them under the provided y with TOP
  text(output, x, y); // display the text
  pop();
}
