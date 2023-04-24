const GameService = require("./GameService");

describe("The GameService class provides the game logic", () => {
  let game;
  let gridObject;
  beforeEach(() => {
    game = new GameService();
    gridObject = game.initialSetup(3, 3);
  });

  test("its intitialSetup method creates a grid and fills it with cell instances", () => {
    let testCell = gridObject.gridArray[5];
    //prop indexPosition is exclusive to the Cell class
    expect(testCell.indexPosition).toBe(5);
  });

  test("if a Cell isAlive on initial creation it writes a reference to it in the countForNextRound reference Array", () => {
    let cellGrid = gridObject.gridArray;

    let comparisonArray = [];
    for (let i = 0; i < gridObject.arrayLength; i++) {
      let isAliveCell = cellGrid[i].isAlive;
      if (isAliveCell) {
        comparisonArray.push(i);
      }
    }

    let allCellsToCountNextRound =
      game.countForNextRound.getAllEntriesWithValue(true);

    expect(comparisonArray).toEqual(allCellsToCountNextRound);
  });

  test("its nextRound method evaluates the gameBoard and creates a new grid to render for the next round according to the rules", () => {
    let mockArray = [
      { indexPosition: 0, isAlive: false },
      { indexPosition: 1, isAlive: true },
      { indexPosition: 2, isAlive: false },
      { indexPosition: 3, isAlive: false },
      { indexPosition: 4, isAlive: false },
      { indexPosition: 5, isAlive: false },
      { indexPosition: 6, isAlive: true },
      { indexPosition: 7, isAlive: false },
      { indexPosition: 8, isAlive: false },
    ];
  });
});
