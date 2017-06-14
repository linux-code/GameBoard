var Game = function() {
  this.highLight.rowInd= -1;
  this.highLight.colInd= -1;
};
Game.prototype.init = function(level){
  this.setBoardDimension(level+2);
  this.generateGrid(level+2,level+2);
  this.start(level);
};

Game.prototype.generateGrid = function (row, col) {
  var cell = document.createElement('div');
  for (i = 0; i < row*col; i++) {
        var cell = document.createElement('div');
        var rInd = parseInt(i/col);
        var cInd = parseInt(i%col);
        cell.id = rInd+''+cInd;
        cell.className = 'cell';
        //console.log(document.getElementById('board'));
        cell.setAttribute("onclick", "matchCell(this)");
        document.getElementById('board').appendChild(cell);
  }
};
Game.prototype.setBoardDimension = function(n){//
  console.log(document.getElementById('board'));
  document.getElementById('board').style.height = n*102+'px';
  document.getElementById('board').style.width = n*102+'px';
}

Game.prototype.start = function(level){
  var levelTimout = gameConfig[level]["timeForLevel"]*100;
  var cellTimout = gameConfig[level]["timeForCellHighLight"]*100;
  console.log(levelTimout);
  var totalCells = (level+2)*(level+2);
  var gridNumber = Math.floor(Math.random() * (totalCells));
  var row = parseInt(gridNumber/(level+2));
  var col = parseInt(gridNumber%(level+2));

  this.highLight(row,col)
}

Game.prototype.highLight = function(row,col) {
  document.getElementById(row+''+col).style.background = 'yellow';
  this.highLight.rowInd= row;
  this.highLight.colInd= col;
}
var matchCell = function(x) {
  console.log(x.id);
  if(x.id == this.highLight.rowInd+''+this.highLight.colInd) {
     alert('Success');
     //call Score calculator
  }
  else{
        alert('Worng');
       //call score calculator for negative marks
 }
}

var game = new Game();
