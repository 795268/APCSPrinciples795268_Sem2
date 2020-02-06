//  Elena Campell
// 2/06/20
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}

function createPlayerSelectionList() {
playerSel = createSelect(true);
playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40); // locate at 270,40 in canvas coordinates playerSel.size(150,headerHeight-50); }
}

function loadPlayerStats(Tm) {
 statsArray = stats.findRows(Tm, 5);
}
