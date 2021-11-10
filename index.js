import Goat from "./Goat.js";
import Tiger from "./Tiger.js";
import Grid from "./Grid.js";
const Board = document.querySelector(".board");
const grid = new Grid(5, 5, Board);


// const tigers = [];
// for (let i = 0; i < grid.width; i++) {
//   for (let j = 0; j < grid.height; j++) {
//     tigers.push(new Tiger(grid.points[i + j * grid.width].x, grid.points[i + j * grid.width].y, grid.points[i + j * grid.width].width, grid.points[i + j * grid.width].height, grid.points[i + j * grid.width].color));
//   }
// }
const tigers = [
  new Tiger(grid.points[0].x, grid.points[0].y),
  new Tiger(grid.points[4].x, grid.points[4].y),
  new Tiger(grid.points[20].x, grid.points[20].y),
  new Tiger(grid.points[24].x, grid.points[24].y),
];
// const tigers = [
//   new Tiger(Board.offsetLeft, Board.offsetTop),
//   new Tiger(Board.offsetLeft + Board.offsetWidth, Board.offsetTop),
//   new Tiger(Board.offsetLeft, Board.offsetTop + Board.offsetHeight),
//   new Tiger(Board.offsetLeft + Board.offsetWidth, Board.offsetTop + Board.offsetHeight)
// ];
tigers.forEach(goat => goat.Place());



Board.addEventListener("click", function (event) {
  if (DistanceBetweenPoints(event.clientX, grid.points[1].x, event.clientY, grid.points[1].y) < 25) {
    {
      let g1 = new Goat(grid.points[1].x, grid.points[1].y);
      g1.Place();
      console.log(g1.x, g1.y);
    }
  }
});

function DistanceBetweenPoints(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


// Board.addEventListener("mousemove", function (e) {
//   let g1 = new Goat(e.clientX, e.clientY);
//   g1.OnHover();
// });

