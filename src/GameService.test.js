const ReferenceArray = require("./ReferenceArray");
const Grid = require("./Grid");
const Cell = require("./Cell");
const GameService = require("./GameService");

describe('The GameService class provides the game logic', () => {

    test('its intitialSetup method creates a grid and fills it with cell instances', () => {
        let game = new GameService;
      let gridObject = game.initialSetup(3,3);
      console.log(gridObject.gridArray);
      expect(gridLength).toBe(9);
    });
});