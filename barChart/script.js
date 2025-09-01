import { randomNumber } from "../utils/utils.js";

const list = document.querySelector("ul");

setInterval(lavSøjle, 1000);

lavSøjle();

function lavSøjle() {
  console.log("interval kører");
  const li = document.createElement("li");
  li.style.setProperty("--height", Math.floor(randomNumber(0, 100)));
  list.appendChild(li); //søjlen bliver sat ind som det sidste element i ul'en
  if (list.children.length > 20) {
    list.removeChild(list.firstElementChild);
  }
}

//prøve med push og pop?
// const myArray = [];

// function lavSøjle() {
//   console.log("interval kører");
//   const li = document.createElement("li");
//   li.style.setProperty("--height", Math.floor(randomNumber(0, 100)));
//   list.appendChild(li); //søjlen bliver sat ind som det sidste element i ul'en
//   if (myArray.length > 20) {
//     myArray.shift();
//   }
// }
