const Grid = require('./Grid')
describe('A Grid', () => {

  test('should have a method to create an array the length of Grid.width * Grid.height', () => {
    let testGrid = new Grid(3, 3);
    testGrid.createGrid();
    let gridLength = testGrid.gridArray.length;
    expect(gridLength).toBe(9);
  });

  test('should have a method that returns the index of a neighbour in all possible directions', () => {
    let testGrid = new Grid(3, 3);
    testGrid.createGrid();

    let neighbourTop = testGrid.getNeighbour(4, "top");
    let neighbourRight = testGrid.getNeighbour(4, "right");
    let neighbourLeft = testGrid.getNeighbour(4, "left");
    let neighbourBottom = testGrid.getNeighbour(4, "bottom");

    let neighbourTopRight = testGrid.getNeighbour(4, "topRight");
    let neighbourBottomRight = testGrid.getNeighbour(4, "bottomRight");
    let neighbourBottomLeft = testGrid.getNeighbour(4, "bottomLeft");
    let neighbourTopLeft = testGrid.getNeighbour(4, "topLeft");


    expect(neighbourTop).toBe(7);
    expect(neighbourRight).toBe(5);
    expect(neighbourBottom).toBe(1);
    expect(neighbourLeft).toBe(3);

    expect(neighbourTopRight).toBe(8);
    expect(neighbourBottomRight).toBe(2);
    expect(neighbourBottomLeft).toBe(0);
    expect(neighbourTopLeft).toBe(6);
  });

  describe('wraps its edges onto each other (like snake), so', () => {
    test('the isTopEdge method recognizes if a cell is in the uppermost row', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let isEdge = testGrid.isTopEdge(8);

        expect(isEdge).toBe(true);
    });
    
    test('the isRightEdge method recognizes if a cell is in the rightmost column', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let isEdge = testGrid.isRightEdge(2);

        expect(isEdge).toBe(true);
    });
    
    test('the isBottomEdge method recognizes if a cell is in the bottommost row', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let isEdge = testGrid.isBottomEdge(2);

        expect(isEdge).toBe(true);
    });
    
    test('the isLeftEdge method recognizes if a cell is in the leftmost row', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let isEdge = testGrid.isLeftEdge(0);

        expect(isEdge).toBe(true);
    });

    test('the wrapAroundTopEdge method returns the index of the bottommost cell in the same column ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedIndex = testGrid.wrapAroundTopEdge(6);

        expect(wrappedIndex).toBe(0);
    });

    test('the wrapAroundRightEdge method returns the index of the leftmost cell in the same row ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedIndex = testGrid.wrapAroundRightEdge(5);

        expect(wrappedIndex).toBe(3);
    });

    test('the wrapAroundBottomEdge method returns the index of the topmost cell in the same column ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedIndex = testGrid.wrapAroundBottomEdge(1);

        expect(wrappedIndex).toBe(7);
    });

    test('the wrapAroundLeftEdge method returns the index of the rightmost cell in the same row ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedIndex = testGrid.wrapAroundLeftEdge(3);

        expect(wrappedIndex).toBe(5);
    });

    test('getNeighbour(.., "top") returns the index of the bottommost cell in the same column, if the cell asking is on the top edge ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(8, "top");

        expect(wrappedNeighbour).toBe(2);
    });

    test('getNeighbour(.., "right") returns the index of the leftmost cell in the same row, if the cell asking is on the right edge ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(2, "right");

        expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "bottom") returns the index of the topmost cell in the same column, if the cell asking is on the bottom edge ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(1, "bottom");

        expect(wrappedNeighbour).toBe(7);
    });
    
    test('getNeighbour(.., "left") returns the index of the rightmost cell in the same row, if the cell asking is on the left edge ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(3, "left");

        expect(wrappedNeighbour).toBe(5);
    });

    test('getNeighbour(.., "topRight") returns the index of the bottomLeft corner, if the cell asking is on the topRight corner ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(8, "topRight");

        expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "topRight") returns the index of the bottommost cell one column to the right, if the cell asking is on the topEdge, but not the rightEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(7, "topRight");

        expect(wrappedNeighbour).toBe(2);
    });

    test('getNeighbour(.., "topRight") returns the index of the leftmost cell one row above, if the cell asking is on the rightEdge, but not the topEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(5, "topRight");

        expect(wrappedNeighbour).toBe(6);
    });

    test('getNeighbour(.., "bottomRight") returns the index of the topLeft corner, if the cell asking is on the bottomRight corner ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(2, "bottomRight");

        expect(wrappedNeighbour).toBe(6);
    });

    test('getNeighbour(.., "bottomRight") returns the index of the upmost cell one column to the right, if the cell asking is on the bottomEdge, but not the rightEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(1, "bottomRight");

        expect(wrappedNeighbour).toBe(8);
    });

    test('getNeighbour(.., "bottomRight") returns the index of the leftmost cell one row below, if the cell asking is on the rightEdge, but not the bottomEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(5, "bottomRight");

        expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "bottomLeft") returns the index of the topRight corner, if the cell asking is on the bottomLeft corner ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(0, "bottomLeft");

        expect(wrappedNeighbour).toBe(8);
    });

    test('getNeighbour(.., "bottomLeft") returns the index of the upmost cell one column to the left, if the cell asking is on the bottomEdge, but not the leftEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(1, "bottomLeft");

        expect(wrappedNeighbour).toBe(6);
    });

    test('getNeighbour(.., "bottomLeft") returns the index of the rightmost cell one row below, if the cell asking is on the leftEdge, but not the bottomEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(6, "bottomLeft");

        expect(wrappedNeighbour).toBe(5);
    });

    test('getNeighbour(.., "topLeft") returns the index of the bottomRight corner, if the cell asking is on the topLeft corner ', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(6, "topLeft");

        expect(wrappedNeighbour).toBe(2);
    });

    test('getNeighbour(.., "topLeft") returns the index of the bottommost cell one column to the left, if the cell asking is on the topEdge, but not the leftEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(7, "topLeft");

        expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "topLeft") returns the index of the rightmost cell one row above, if the cell asking is on the leftEdge, but not the topEdge', () => {
        let testGrid = new Grid(3, 3);
        testGrid.createGrid();

        let wrappedNeighbour = testGrid.getNeighbour(3, "topLeft");

        expect(wrappedNeighbour).toBe(8);
    });
  });
});
