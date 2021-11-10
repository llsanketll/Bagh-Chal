import Pawn from "./Pawn.js";
export default class Tiger extends Pawn {
  constructor(x, y) {
    super(x, y);
  }

  Place() {
    const imgHeight = 60;
    this.img = document.createElement("img");
    // const goatImg = document.createElement("img");
    this.img.src = "./img/tiger.png";
    this.img.style.position = "absolute";
    this.img.style.height = imgHeight + "px";
    this.img.style.left = this.x - imgHeight / 2 + "px";
    this.img.style.top = this.y - imgHeight / 2 + "px";
    document.querySelector(".goat-container").appendChild(this.img);
  }
}