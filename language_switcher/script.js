"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "de";

const headerHtml = document.querySelector(".header");
const footerHtml = document.querySelector(".footer");
const dansk = document.querySelector(".dansk");
const tysk = document.querySelector(".tysk");

dansk.addEventListener("click", () => {
  headerHtml.textContent = `${texts.da.texts[0].text}`;
  footerHtml.textContent = `${texts.da.texts[1].text}`;
});

tysk.addEventListener("click", () => {
  headerHtml.textContent = `${texts.de.texts[0].text}`;
  footerHtml.textContent = `${texts.de.texts[1].text}`;
});
