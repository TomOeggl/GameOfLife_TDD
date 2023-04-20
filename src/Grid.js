class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.arrayLength = width * height;
    this.gridArray;
    this.filled = false;
  }

  createGrid() {
    this.gridArray = new Array(this.arrayLength);
  }

  fillGrid(contentToFillIn) {
    if (!this.filled) {
      for(let i = 0; i < this.gridArray.length; i++ ){
        this.gridArray[i] = contentToFillIn;
      }
    }
  }


  getNeighbour(startIndex, direction) {
    let gridWidth = this.width;
    let self = this;

    if (direction === "top") return getTopNeighbour(startIndex);
    if (direction === "right") return getRightNeighbour(startIndex);
    if (direction === "bottom") return getBottomNeighbour(startIndex);
    if (direction === "left") return getLeftNeighbour(startIndex);

    if (direction === "topRight") return getTopRightNeighbour(startIndex);
    if (direction === "bottomRight") return getBottomRightNeighbour(startIndex);
    if (direction === "bottomLeft") return getBottomLeftNeighbour(startIndex);
    if (direction === "topLeft") return getTopLeftNeighbour(startIndex);



    function getTopNeighbour(ofPositionIndex) {
      let isTopEdge = self.isTopEdge(ofPositionIndex);
      if (!isTopEdge) {
        return (ofPositionIndex + gridWidth);
      } else {
        return self.wrapAroundTopEdge(ofPositionIndex);
      }
    }

    function getRightNeighbour(ofPositionIndex) {
      let isRightEdge = self.isRightEdge(ofPositionIndex);
      if (!isRightEdge) {
        return (ofPositionIndex + 1);
      } else {
        return self.wrapAroundRightEdge(ofPositionIndex);
      }
    }

    function getBottomNeighbour(ofPositionIndex) {
      let isBottomEdge = self.isBottomEdge(ofPositionIndex);
      if (!isBottomEdge) {
        return (ofPositionIndex - gridWidth);
      } else {
        return self.wrapAroundBottomEdge(ofPositionIndex);
      }
    }

    function getLeftNeighbour(ofPositionIndex) {
      let isLeftEdge = self.isLeftEdge(ofPositionIndex);
      if (!isLeftEdge) {
        return (ofPositionIndex - 1);
      } else {
        return self.wrapAroundLeftEdge(ofPositionIndex);
      }
    }

    function getTopRightNeighbour(ofPositionIndex) {
      let isTopEdge = self.isTopEdge(ofPositionIndex);
      let isRightEdge = self.isRightEdge(ofPositionIndex);
      if (!isTopEdge && !isRightEdge) {
        return (ofPositionIndex + gridWidth + 1);
      } else if (isTopEdge){
        let wrapped = self.wrapAroundTopEdge(ofPositionIndex);
        return getRightNeighbour(wrapped);
      } else if (isRightEdge){
        let wrapped = self.wrapAroundRightEdge(ofPositionIndex);
        return getTopNeighbour(wrapped);
      }
    }

    function getBottomRightNeighbour(ofPositionIndex) {
      let isBottomEdge = self.isBottomEdge(ofPositionIndex);
      let isRightEdge = self.isRightEdge(ofPositionIndex);
      if (!isBottomEdge && !isRightEdge) {
        return (ofPositionIndex - gridWidth + 1);
      } else if (isBottomEdge){
        let wrapped = self.wrapAroundBottomEdge(ofPositionIndex);
        return getRightNeighbour(wrapped);
      } else if (isRightEdge){
        let wrapped = self.wrapAroundRightEdge(ofPositionIndex);
        return getBottomNeighbour(wrapped);
      }
    }

    function getBottomLeftNeighbour(ofPositionIndex) {
      let isBottomEdge = self.isBottomEdge(ofPositionIndex);
      let isLeftEdge = self.isLeftEdge(ofPositionIndex);
      if (!isBottomEdge && !isLeftEdge) {
        return (ofPositionIndex - gridWidth - 1);
      } else if(isBottomEdge){
        let wrapped = self.wrapAroundBottomEdge(ofPositionIndex);
        return getLeftNeighbour(wrapped);
      } else if(isLeftEdge){
        let wrapped = self.wrapAroundLeftEdge(ofPositionIndex);
        return getBottomNeighbour(wrapped);
      }
    }

    function getTopLeftNeighbour(ofPositionIndex) {
      let isTopEdge = self.isTopEdge(ofPositionIndex);
      let isLeftEdge = self.isLeftEdge(ofPositionIndex);
      if (!isTopEdge && !isLeftEdge) {
        return (ofPositionIndex + gridWidth - 1);
      } else if(isTopEdge){
        let wrapped = self.wrapAroundTopEdge(ofPositionIndex);
        return getLeftNeighbour(wrapped);
      } else if(isLeftEdge){
        let wrapped = self.wrapAroundLeftEdge(ofPositionIndex);
        return getTopNeighbour(wrapped);
      }
    }


  }

  isTopEdge(cellIndex) {
    let topMostRowStart = this.arrayLength - this.width + 1;
    let topMostRowEnd = this.arrayLength;

    return (topMostRowStart <= cellIndex && topMostRowEnd >= cellIndex);
  }

  isRightEdge(cellIndex) {
    let modulo = (cellIndex + 1) % this.width;

    return (modulo === 0 && cellIndex <= this.arrayLength);
  }

  isBottomEdge(cellIndex) {
    let bottomMostRowStart = 0;
    let bottomMostRowEnd = bottomMostRowStart + this.width - 1;

    return (bottomMostRowStart <= cellIndex && bottomMostRowEnd >= cellIndex);
  }

  isLeftEdge(cellIndex) {
    let modulo = (cellIndex) % this.width;

    return (modulo === 0 && cellIndex < this.arrayLength);
  }

  wrapAroundTopEdge(cellIndex) {
    return cellIndex % this.width;
  }

  wrapAroundRightEdge(cellIndex) {
    return cellIndex - this.width + 1;
  }

  wrapAroundBottomEdge(cellIndex) {
    return cellIndex + (this.width * (this.height - 1));
  }

  wrapAroundLeftEdge(cellIndex) {
    return cellIndex + this.width - 1;
  }

}

module.exports = Grid;