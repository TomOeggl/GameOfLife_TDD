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

    let neighbours = getAllNeighbourIndezes(this);

    for(let i = 0; i < neighbours.length; i++){
      if(gridArray[i].isAlive){
        aliveCounter++;
      }
    }

    return aliveCounter;

    function getAllNeighbourIndezes(self){
      let neighbourIndezes = [];
      let grid = self.parentGrid;
      let selfIndex = self.indexPosition;
      
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "top"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "topRight"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "right"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "bottomRight"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "bottom"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "bottomLeft"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "left"));
      neighbourIndezes.push(grid.getNeighbour(selfIndex, "topLeft"));

      return neighbourIndezes;
    }
    
  }

  setIndexPosition(targetIndex){
    this.indexPosition = targetIndex;
  }

  setParentGrid(gridInstance){
    this.parentGrid = gridInstance;
  }

}
module.exports = Cell;