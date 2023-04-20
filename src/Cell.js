class Cell {

  constructor(isAlive) {
    this.isAlive = isAlive;
    this.indexPosition = null;
    this.parentGrid = null;
  }

  isAliveNextGeneration(numberOfAliveNeighbours) {
    const stablePopulationRule = (numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3);
    const underPopulationRule = (numberOfAliveNeighbours < 2);
    const overPopulationRule = (numberOfAliveNeighbours > 3);
    const newBornRule = (numberOfAliveNeighbours === 3)

    if (this.isAlive && stablePopulationRule) {
      return true;
    }

    if (this.isAlive && underPopulationRule){
      return false;
    }

    if (this.isAlive && overPopulationRule){
      return false;
    }

    if (!this.isAlive && newBornRule){
      return true;
    }
  }

  countAliveNeighbours() {
    let aliveCounter = 0;
    let gridArray = this.parentGrid.gridArray;

    let neighbours = this.getAllNeighbourIndezes();

    for(let i = 0; i < neighbours.length; i++){
      if(gridArray[i].isAlive){
        aliveCounter++;
      }
    }

    return aliveCounter;

  }

  getAllNeighbourIndezes(){
    let neighbourIndezes = [];
    let grid = this.parentGrid;
    let index = this.indexPosition;
    
    neighbourIndezes.push(grid.getNeighbour(index, "top"));
    neighbourIndezes.push(grid.getNeighbour(index, "topRight"));
    neighbourIndezes.push(grid.getNeighbour(index, "right"));
    neighbourIndezes.push(grid.getNeighbour(index, "bottomRight"));
    neighbourIndezes.push(grid.getNeighbour(index, "bottom"));
    neighbourIndezes.push(grid.getNeighbour(index, "bottomLeft"));
    neighbourIndezes.push(grid.getNeighbour(index, "left"));
    neighbourIndezes.push(grid.getNeighbour(index, "topLeft"));

    return neighbourIndezes;
  }

  setIndexPosition(targetIndex){
    this.indexPosition = targetIndex;
  }

  setParentGrid(gridInstance){
    this.parentGrid = gridInstance;
  }

}
module.exports = Cell;