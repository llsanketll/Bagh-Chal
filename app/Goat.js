import Pawn from "./Pawn.js";

export default class Goat extends Pawn {
  constructor(x, y) {
    super(x, y);
    this.imgHeight = 60;
    this.img = document.createElement("img");
    this.img.src = "./img/goat.png";
    this.img.style.cursor = "pointer";
    this.img.style.position = "absolute";
    this.img.style.height = this.imgHeight + "px";
    this.img.style.transition = "all 0.5s";
  }

  Place() {
    this.img.style.left = this.x - this.imgHeight / 2 + "px";
    this.img.style.top = this.y - this.imgHeight / 2 + "px";
    document.querySelector(".goat-container").appendChild(this.img);
  }

  PlaceAt(x, y)
  {
    this.img.style.opacity = "0.5";
    this.img.style.left = x - this.imgHeight / 2 + "px";
    this.img.style.top = y - this.imgHeight / 2 + "px";
    document.querySelector(".goat-container").appendChild(this.img);
  }
  
  Hide()
  {
    this.img.style.opacity = "0";
  }

  OnHover()
  {
    this.img = document.createElement("img");
    this.img.style.opacity = "0.5";
    this.img.style.position = "absolute";
    this.img.style.height = this.imgHeight + "px";
    this.img.style.left = this.x - this.imgHeight / 2 + "px";
    this.img.style.top = this.y - this.imgHeight / 2 + "px";
    document.querySelector(".goat-container").appendChild(this.img);
  }
}