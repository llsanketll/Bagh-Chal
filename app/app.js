import Goat from "./Goat.js";
import Tiger from "./Tiger.js";
import Grid from "./Grid.js";
const Board = document.querySelector(".board");
const grid = new Grid(5, 5, Board);

const tigers = [
  new Tiger(grid.points[0][0].x, grid.points[0][0].y),
  new Tiger(grid.points[4][0].x, grid.points[4][0].y),
  new Tiger(grid.points[0][4].x, grid.points[0][4].y),
  new Tiger(grid.points[4][4].x, grid.points[4][4].y),
];
grid.points[0][0].occupied = true;
grid.points[4][0].occupied = true;
grid.points[0][4].occupied = true;
grid.points[4][4].occupied = true;

// const tigers = [
//   new Tiger(Board.offsetLeft, Board.offsetTop),
//   new Tiger(Board.offsetLeft + Board.offsetWidth, Board.offsetTop),
//   new Tiger(Board.offsetLeft, Board.offsetTop + Board.offsetHeight),
//   new Tiger(Board.offsetLeft + Board.offsetWidth, Board.offsetTop + Board.offsetHeight)
// ];
tigers.forEach(tiger => tiger.Place());



let goat = new Goat(0, 0);
Board.addEventListener("mousemove", e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  grid.points.forEach((row, i) => {
    row.forEach((point, j) => {
      if (grid.points[i][j].occupied === false) {
        const distance = DistanceBetweenPoints(mouseX, point.x, mouseY, point.y);
        if (distance < 50) {
          goat.PlaceAt(point.x, point.y);
          
        }
      }
    })
  })
});

document.addEventListener("click", event => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  grid.points.forEach((row, i) => {
    row.forEach((point, j) => {
      if (grid.points[i][j].occupied === false) {
        const distance = DistanceBetweenPoints(mouseX, point.x, mouseY, point.y);
        if (distance < 50) {
          let g1 = new Goat(point.x, point.y);
          g1.Place();
          grid.points[i][j].occupied = true;
          console.log(grid.points);
        }
      }
    })
  })
});

function DistanceBetweenPoints(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


// Board.addEventListener("mousemove", function (e) {
//   let g1 = new Goat(e.clientX, e.clientY);
//   g1.OnHover();
// });

