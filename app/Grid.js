export default class Grid {
  constructor(width, height, Board) {
    this.width = width;
    this.height = height;
    this.points = [];
    for (let i = 0; i < width; i++) {
      let row = [];
      for (let j = 0; j < height; j++) {
        row.push({
          x: Board.offsetLeft + Board.offsetWidth * i / 4,
          y: Board.offsetTop + Board.offsetHeight * j / 4,
          occupied: false,
        })
      }
      this.points.push(row);
    }
  }

  //       row.push({
  // x: Board.offsetLeft + Board.offsetWidth * i / 4,
  //   y: Board.offsetTop + Board.offsetHeight * y / 4,
  //       })
}
