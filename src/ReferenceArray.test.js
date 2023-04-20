const ReferenceArray = require("./ReferenceArray");
const Grid = require("./Grid");

describe("The ReferenceArray", () => {

  test("mirrors the length of the Grid Array it is refering to", () => {
    let testGrid = new Grid(3, 3);
    let nextAliveArray = new ReferenceArray(testGrid);
    expect(nextAliveArray.getLength()).toBe(testGrid.arrayLength);
  });

  test("lets you set the key and defaultValue of the object found at every index through setKeyAndDefaultValue(key)", () => {
    let testGrid = new Grid(3, 3);
    let nextAliveArray = new ReferenceArray(testGrid);
    nextAliveArray.setKeyAndDefaultValue("isAliveNextRound", false);

    expect(nextAliveArray.array[0].isAliveNextRound).toBe(false);
  });

  test("returns an array with all entries that match the input value trough the getAllEntriesWithValue(value) method", () => {
    let testGrid = new Grid(3, 3);
    let nextAliveArray = new ReferenceArray(testGrid);
    nextAliveArray.setKeyAndDefaultValue("isAliveNextRound", false);

    let array = nextAliveArray.array;
    array[5].isAliveNextRound = true;
    array[6].isAliveNextRound = true;


    let filteredArray = nextAliveArray.getAllEntriesWithValue(true);
    
    expect(filteredArray).toEqual([5, 6]);
  });

});
