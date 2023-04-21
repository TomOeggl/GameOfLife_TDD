const Grid = require("./Grid");
describe("A Grid", () => {
  let testGrid;

  beforeEach(() => {
    testGrid = new Grid(3, 3);
    testGrid.createGrid();
  });
  
  describe('getNeighbour', () => {
    test('should return the index of the top neighbour for "top" direction', () => {
      const neighbourTop = testGrid.getNeighbour(4, "top");
      expect(neighbourTop).toBe(7);
    });

    test('should return the index of the right neighbour for "right" direction', () => {
      const neighbourRight = testGrid.getNeighbour(4, "right");
      expect(neighbourRight).toBe(5);
    });

    test('should return the index of the bottom neighbour for "bottom" direction', () => {
      const neighbourBottom = testGrid.getNeighbour(4, "bottom");
      expect(neighbourBottom).toBe(1);
    });

    test('should return the index of the left neighbour for "left" direction', () => {
      const neighbourLeft = testGrid.getNeighbour(4, "left");
      expect(neighbourLeft).toBe(3);
    });

    test('should return the index of the top right neighbour for "topRight" direction', () => {
      const neighbourTopRight = testGrid.getNeighbour(4, "topRight");
      expect(neighbourTopRight).toBe(8);
    });

    test('should return the index of the bottom right neighbour for "bottomRight" direction', () => {
      const neighbourBottomRight = testGrid.getNeighbour(4, "bottomRight");
      expect(neighbourBottomRight).toBe(2);
    });

    test('should return the index of the bottom left neighbour for "bottomLeft" direction', () => {
      const neighbourBottomLeft = testGrid.getNeighbour(4, "bottomLeft");
      expect(neighbourBottomLeft).toBe(0);
    });

    test('should return the index of the top left neighbour for "topLeft" direction', () => {
      const neighbourTopLeft = testGrid.getNeighbour(4, "topLeft");
      expect(neighbourTopLeft).toBe(6);
    });
  });

  test("should have a method to create an array the length of Grid.width * Grid.height", () => {
    expect(testGrid.arrayLength).toBe(9);
  });

  describe("wraps its edges onto each other (like snake), so", () => {
    test("the isTopEdge method recognizes if a cell is in the uppermost row", () => {
      let isEdge = testGrid.isTopEdge(8);

      expect(isEdge).toBe(true);
    });

    test("the isRightEdge method recognizes if a cell is in the rightmost column", () => {
      let isEdge = testGrid.isRightEdge(2);

      expect(isEdge).toBe(true);
    });

    test("the isBottomEdge method recognizes if a cell is in the bottommost row", () => {
      let isEdge = testGrid.isBottomEdge(2);

      expect(isEdge).toBe(true);
    });

    test("the isLeftEdge method recognizes if a cell is in the leftmost row", () => {
      let isEdge = testGrid.isLeftEdge(0);

      expect(isEdge).toBe(true);
    });

    test("the wrapAroundTopEdge method returns the index of the bottommost cell in the same column ", () => {
      let wrappedIndex = testGrid.wrapAroundTopEdge(6);

      expect(wrappedIndex).toBe(0);
    });

    test("the wrapAroundRightEdge method returns the index of the leftmost cell in the same row ", () => {
      let wrappedIndex = testGrid.wrapAroundRightEdge(5);

      expect(wrappedIndex).toBe(3);
    });

    test("the wrapAroundBottomEdge method returns the index of the topmost cell in the same column ", () => {
      let wrappedIndex = testGrid.wrapAroundBottomEdge(1);

      expect(wrappedIndex).toBe(7);
    });

    test("the wrapAroundLeftEdge method returns the index of the rightmost cell in the same row ", () => {
      let wrappedIndex = testGrid.wrapAroundLeftEdge(3);

      expect(wrappedIndex).toBe(5);
    });

    test('getNeighbour(.., "top") returns the index of the bottommost cell in the same column, if the cell asking is on the top edge ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(8, "top");

      expect(wrappedNeighbour).toBe(2);
    });

    test('getNeighbour(.., "right") returns the index of the leftmost cell in the same row, if the cell asking is on the right edge ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(2, "right");

      expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "bottom") returns the index of the topmost cell in the same column, if the cell asking is on the bottom edge ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(1, "bottom");

      expect(wrappedNeighbour).toBe(7);
    });

    test('getNeighbour(.., "left") returns the index of the rightmost cell in the same row, if the cell asking is on the left edge ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(3, "left");

      expect(wrappedNeighbour).toBe(5);
    });

    test('getNeighbour(.., "topRight") returns the index of the bottomLeft corner, if the cell asking is on the topRight corner ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(8, "topRight");

      expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "topRight") returns the index of the bottommost cell one column to the right, if the cell asking is on the topEdge, but not the rightEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(7, "topRight");

      expect(wrappedNeighbour).toBe(2);
    });

    test('getNeighbour(.., "topRight") returns the index of the leftmost cell one row above, if the cell asking is on the rightEdge, but not the topEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(5, "topRight");

      expect(wrappedNeighbour).toBe(6);
    });

    test('getNeighbour(.., "bottomRight") returns the index of the topLeft corner, if the cell asking is on the bottomRight corner ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(2, "bottomRight");

      expect(wrappedNeighbour).toBe(6);
    });

    test('getNeighbour(.., "bottomRight") returns the index of the upmost cell one column to the right, if the cell asking is on the bottomEdge, but not the rightEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(1, "bottomRight");

      expect(wrappedNeighbour).toBe(8);
    });

    test('getNeighbour(.., "bottomRight") returns the index of the leftmost cell one row below, if the cell asking is on the rightEdge, but not the bottomEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(5, "bottomRight");

      expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "bottomLeft") returns the index of the topRight corner, if the cell asking is on the bottomLeft corner ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(0, "bottomLeft");

      expect(wrappedNeighbour).toBe(8);
    });

    test('getNeighbour(.., "bottomLeft") returns the index of the upmost cell one column to the left, if the cell asking is on the bottomEdge, but not the leftEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(1, "bottomLeft");

      expect(wrappedNeighbour).toBe(6);
    });

    test('getNeighbour(.., "bottomLeft") returns the index of the rightmost cell one row below, if the cell asking is on the leftEdge, but not the bottomEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(6, "bottomLeft");

      expect(wrappedNeighbour).toBe(5);
    });

    test('getNeighbour(.., "topLeft") returns the index of the bottomRight corner, if the cell asking is on the topLeft corner ', () => {
      let wrappedNeighbour = testGrid.getNeighbour(6, "topLeft");

      expect(wrappedNeighbour).toBe(2);
    });

    test('getNeighbour(.., "topLeft") returns the index of the bottommost cell one column to the left, if the cell asking is on the topEdge, but not the leftEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(7, "topLeft");

      expect(wrappedNeighbour).toBe(0);
    });

    test('getNeighbour(.., "topLeft") returns the index of the rightmost cell one row above, if the cell asking is on the leftEdge, but not the topEdge', () => {
      let wrappedNeighbour = testGrid.getNeighbour(3, "topLeft");

      expect(wrappedNeighbour).toBe(8);
    });
  });
});
