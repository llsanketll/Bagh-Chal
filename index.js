console.log("Hello world");
import Goat from "./Goat";
const Board = document.querySelector(".board");

Board.addEventListener("click", function(event) {
  let g1 = new Goat(event.clientX, event.clientY);
  console.log(g1.x, g1.y)
});

