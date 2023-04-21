class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.arrayLength = width * height;
    this.gridArray;
  }

  createGrid() {
    this.gridArray = new Array(this.arrayLength);
  }

  getNeighbour(startIndex, direction) {
    let gridWidth = this.width;

    const getTopNeighbour = (ofPositionIndex) => {
      const isTopEdge = this.isTopEdge(ofPositionIndex);
      if (isTopEdge) {
        return this.wrapAroundTopEdge(ofPositionIndex);
      }
      return ofPositionIndex + gridWidth;
    };

    const getRightNeighbour = (ofPositionIndex) => {
      let isRightEdge = this.isRightEdge(ofPositionIndex);
      if (isRightEdge) {
        return this.wrapAroundRightEdge(ofPositionIndex);
      }
      return ofPositionIndex + 1;
    }
    
    const getBottomNeighbour = (ofPositionIndex) => {
      let isBottomEdge = this.isBottomEdge(ofPositionIndex);
      if (isBottomEdge) {
        return this.wrapAroundBottomEdge(ofPositionIndex);
      }
      return ofPositionIndex - gridWidth;
    }
    
    const getLeftNeighbour = (ofPositionIndex) => {
      let isLeftEdge = this.isLeftEdge(ofPositionIndex);
      if (isLeftEdge) {
        return this.wrapAroundLeftEdge(ofPositionIndex);
      }
      return ofPositionIndex - 1;
    }
    
    const getTopRightNeighbour = (ofPositionIndex) => {
      let isTopEdge = this.isTopEdge(ofPositionIndex);
      let isRightEdge = this.isRightEdge(ofPositionIndex);
      if (isTopEdge) {
        let wrapped = this.wrapAroundTopEdge(ofPositionIndex);
        return getRightNeighbour(wrapped);
      }
      if (isRightEdge) {
        let wrapped = this.wrapAroundRightEdge(ofPositionIndex);
        return getTopNeighbour(wrapped);
      }
      return ofPositionIndex + gridWidth + 1;
    }
    
    const getBottomRightNeighbour = (ofPositionIndex) => {
      let isBottomEdge = this.isBottomEdge(ofPositionIndex);
      let isRightEdge = this.isRightEdge(ofPositionIndex);
      if (isBottomEdge) {
        let wrapped = this.wrapAroundBottomEdge(ofPositionIndex);
        return getRightNeighbour(wrapped);
      }
      if (isRightEdge) {
        let wrapped = this.wrapAroundRightEdge(ofPositionIndex);
        return getBottomNeighbour(wrapped);
      }
      return ofPositionIndex - gridWidth + 1;
    }
    
    const getBottomLeftNeighbour = (ofPositionIndex) => {
      let isBottomEdge = this.isBottomEdge(ofPositionIndex);
      let isLeftEdge = this.isLeftEdge(ofPositionIndex);
      if (isBottomEdge) {
        let wrapped = this.wrapAroundBottomEdge(ofPositionIndex);
        return getLeftNeighbour(wrapped);
      }
      if (isLeftEdge) {
        let wrapped = this.wrapAroundLeftEdge(ofPositionIndex);
        return getBottomNeighbour(wrapped);
      }
      return ofPositionIndex - gridWidth - 1;
    }
    
    const getTopLeftNeighbour = (ofPositionIndex) => {
      let isTopEdge = this.isTopEdge(ofPositionIndex);
      let isLeftEdge = this.isLeftEdge(ofPositionIndex);
      if (isTopEdge) {
        let wrapped = this.wrapAroundTopEdge(ofPositionIndex);
        return getLeftNeighbour(wrapped);
      }
      if (isLeftEdge) {
        let wrapped = this.wrapAroundLeftEdge(ofPositionIndex);
        return getTopNeighbour(wrapped);
      }
      return ofPositionIndex + gridWidth - 1;
    }

    if (direction === "top") return getTopNeighbour(startIndex);
    if (direction === "right") return getRightNeighbour(startIndex);
    if (direction === "bottom") return getBottomNeighbour(startIndex);
    if (direction === "left") return getLeftNeighbour(startIndex);

    if (direction === "topRight") return getTopRightNeighbour(startIndex);
    if (direction === "bottomRight") return getBottomRightNeighbour(startIndex);
    if (direction === "bottomLeft") return getBottomLeftNeighbour(startIndex);
    if (direction === "topLeft") return getTopLeftNeighbour(startIndex);

  }

  isTopEdge(cellIndex) {
    let topMostRowStart = this.arrayLength - this.width + 1;
    let topMostRowEnd = this.arrayLength;
    return topMostRowStart <= cellIndex && topMostRowEnd >= cellIndex;
  }

  isRightEdge(cellIndex) {
    return (cellIndex + 1) % this.width === 0;
  }

  isBottomEdge(cellIndex) {
    const bottomMostRowStart = 0;
    const bottomMostRowEnd = bottomMostRowStart + this.width - 1;
    return  cellIndex >= bottomMostRowStart && cellIndex <= bottomMostRowEnd;
  }

  isLeftEdge(cellIndex) {
    return cellIndex % this.width === 0;
  }

  wrapAroundTopEdge(cellIndex) {
    return cellIndex % this.width;
  }

  wrapAroundRightEdge(cellIndex) {
    return cellIndex - this.width + 1;
  }

  wrapAroundBottomEdge(cellIndex) {
    return cellIndex + this.width * (this.height - 1);
  }

  wrapAroundLeftEdge(cellIndex) {
    return cellIndex + this.width - 1;
  }
}

module.exports = Grid;
