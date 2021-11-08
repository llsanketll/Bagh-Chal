import Goat from "./Goat.js";
const Board = document.querySelector(".board");

console.log("hello");
Board.addEventListener("click", function (event) {
  let g1 = new Goat(event.clientX, event.clientY);
  g1.Place();
  console.log(g1.x, g1.y);
});

// Board.addEventListener("mousemove", function (e) {
//   let g1 = new Goat(e.clientX, e.clientY);
//   g1.OnHover();
// });

