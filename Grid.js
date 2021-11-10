export default class Grid {
  constructor(width, height, Board) {
    this.width = width;
    this.height = height;
    this.points = [];
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        this.points.push({
          x: Board.offsetLeft + Board.offsetWidth * i / 4,
          y: Board.offsetTop + Board.offsetHeight * j / 4,
        });
      }
    }
  }

}
