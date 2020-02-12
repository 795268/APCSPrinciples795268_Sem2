//  Elena Campell
// 2/06/20
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray = [];
function setup() {
  var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
 background(5, 5, 5);
  fill(200, 30, 150);

}

//  The draw function is called @ 30 fps
function draw() {
createPlayerSelectionList();
// line(150,650,550,650 );
// textSize(20);
// text('Year', 350,700);
// line(150, 650, 150, 250);
// text('Points', 100, 450);

fill(130,107,85);//Brown
rect(40,780, 720, 20)
strokeWeight(6);// outline shapes
stroke(255);
ellipse(400,780, 720,820);
fill(150,151, 158); // grey
ellipse(400, 500, 240,240);
fill(54,63,227 ); // blue
rect(280, 500, 240, 300);

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

}
function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i < playerSel.elt.selectedOptions.length; i++) {
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value); // loads an array with the selected players
  }
}


function loadPlayerStats() {
 //statsArray = stats.findRows(3P%, 36);
}
