const ReferenceArray = require("./ReferenceArray");
const Grid = require("./Grid");
const Cell = require("./Cell");

class GameService{
    initialSetup(width, height){
        let grid = new Grid(width, height);
        grid.createGrid();
        grid.fillGrid(this.createRandomCell());

        return grid;
    }

    createRandomCell(){
        let cell = new Cell(false);
        cell.isAlive = Math.random() < 0.5;
        return cell;
    }
}

module.exports = GameService;