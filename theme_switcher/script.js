"use strict";

const select = document.querySelector(".select");
const body = document.body;

select.addEventListener("change", () => {
  body.setAttribute("data-theme", select.value);
});

//på klassen
// document.querySelector(".select").addEventListener("change"),
//   (event) => {
//     document.body.setAttribute("data-theme", event.target.value);
//     bodyElm.dataset.theme = EventTarget.target.value;
//   };
