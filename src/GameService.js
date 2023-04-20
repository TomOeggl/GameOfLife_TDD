const ReferenceArray = require("./ReferenceArray");
const Grid = require("./Grid");
const Cell = require("./Cell");

class GameService {
    constructor(){
        this.gridObject = null;
    }

  initialSetup(width, height) {
    this.gridObject = new Grid(width, height);
    this.gridObject.createGrid();
    this.createCountForNextRoundArray();
    this.fillGrid();

    return this.gridObject;
  }

  fillGrid() {
    let grid = this.gridObject.gridArray;

    for (let i = 0; i < grid.length; i++) {
      let cell = this.createRandomCell();
      cell.indexPosition = i;
      this.passAliveCellToCountArray(cell);
      //this.passCellNeighboursToCountArray(cell)
      grid[i] = cell;
    }
  }

  createRandomCell() {
    let cell = new Cell(false);
    cell.isAlive = Math.random() < 0.5;
    cell.parentGrid = this.gridObject;
    return cell;
  }

  createCountForNextRoundArray(){
    this.countForNextRound = new ReferenceArray(this.gridObject);
    this.countForNextRound.setKeyAndDefaultValue("countNextRound", false);
  }

  passAliveCellToCountArray(cell){
    if(cell.isAlive){
        let index = cell.indexPosition
        this.countForNextRound.array[index].countNextRound = true;
    }
  }

  passCellNeighboursToCountArray(cell){
    let neighbours = cell.getAllNeighbourIndezes();
    for(let i = 0; i < neighbours.length; i++){
        let countArray = this.countForNextRound.array;
        if(!countArray[i].countNextRound){
        countArray[i].countNextRound = true;}
    }
  }
}

module.exports = GameService;
