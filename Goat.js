import Pawn from "./Pawn.js";

export default class Goat extends Pawn {
  constructor(x, y) {
    super(x, y, "./img/goat.png");
  }

  Place() {
    const imgHeight = 60;
    const goatImg = document.createElement("img");
    goatImg.src = this.img;
    goatImg.style.position = "absolute";
    goatImg.style.height = imgHeight + "px";
    goatImg.style.left = this.x - imgHeight / 2 + "px";
    goatImg.style.top = this.y - imgHeight / 2 + "px";
    document.querySelector(".goat-container").appendChild(goatImg);
  }

  OnHover()
  {
    const imgHeight = 60;
    const goatImg = document.createElement("img");
    goatImg.src = this.img;
    goatImg.style.opacity = "0.5";
    goatImg.style.position = "absolute";
    goatImg.style.height = imgHeight + "px";
    goatImg.style.left = this.x - imgHeight / 2 + "px";
    goatImg.style.top = this.y - imgHeight / 2 + "px";
    document.querySelector(".goat-container").appendChild(goatImg);
  }
}