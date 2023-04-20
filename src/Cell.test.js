const Cell = require('./Cell')
const Grid = require('./Grid')
describe('A living cell', () => {

  test('with 2 or 3 neighbours stays alive next generation', () => {
    let testCell = new Cell({ isAlive: true });
    let result = testCell.isAliveNextGeneration(3);
    expect(result).toBe(true);
  });
  
  test('with less then 2 neighbours is not alive next generation', () => {
    let testCell = new Cell({ isAlive: true });
    let result = testCell.isAliveNextGeneration(1);
    expect(result).toBe(false);
  });

  test('with more then 3 neighbours is not alive next generation', () => {
    let testCell = new Cell({ isAlive: true });
    let result = testCell.isAliveNextGeneration(4);
    expect(result).toBe(false);
  });
});

describe('A dead cell', () => {

  test('with exactly 3 living neighbours becomes alive next generation', () => {
    let testCell = new Cell({ isAlive: false });
    let result = testCell.isAliveNextGeneration(3);
    expect(result).toBe(true);
  });
  
});

describe('Any Cell has its parentgrid and indexposition written into its properties', () => {

  test('setIndexPosition sets the corresponding property on the cell', () => {
    let testCell = new Cell({ isAlive: false });
    testCell.setIndexPosition(5)
    let result = testCell.indexPosition;
    expect(result).toBe(5);
  });

  test('setParentGrid sets the corresponding property on the cell and returns the parent Object', () => {
    let testCell = new Cell({ isAlive: false });
    let testGrid = new Grid(3, 3);
    testCell.setParentGrid(testGrid);
    let result = testCell.parentGrid;
    expect(result).toBe(testGrid);
  });
  
});

describe('The Cell method countAliveNeighbours', () => {

  test('returns the count of neighbouring cells alive this round', () => {
    let mockArray = [
    {indexPosition: 0, isAlive : false},
    {indexPosition: 1, isAlive : true},
    {indexPosition: 2, isAlive : false},
    {indexPosition: 3, isAlive : false},
    {indexPosition: 4, isAlive : false},
    {indexPosition: 5, isAlive : false},
    {indexPosition: 6, isAlive : true},
    {indexPosition: 7, isAlive : false},
    {indexPosition: 8, isAlive : false}
    ]
    let testCell = new Cell(true);
    testCell.setIndexPosition(4);
    let testGrid = new Grid(3, 3);
    testGrid.gridArray = mockArray;
    testCell.setParentGrid(testGrid);
    
    let aliveCount = testCell.countAliveNeighbours();
    
    expect(aliveCount).toBe(2);
  });

    test('returns the count of neighbouring cells alive this round even if neighbours are wrapped over the edge of the grid', () => {
    let randomIndex = Math.floor(Math.random() * 8) 
    let mockArray = [
    {indexPosition: 0, isAlive : false},
    {indexPosition: 1, isAlive : true},
    {indexPosition: 2, isAlive : false},
    {indexPosition: 3, isAlive : false},
    {indexPosition: 4, isAlive : false},
    {indexPosition: 5, isAlive : false},
    {indexPosition: 6, isAlive : true},
    {indexPosition: 7, isAlive : false},
    {indexPosition: 8, isAlive : false}
    ]
    let testCell = new Cell(true);
    testCell.setIndexPosition(randomIndex);
    let testGrid = new Grid(3, 3);
    testGrid.gridArray = mockArray;
    testCell.setParentGrid(testGrid);
    
    let aliveCount = testCell.countAliveNeighbours();
    
    expect(aliveCount).toBe(2);
  });
  
});