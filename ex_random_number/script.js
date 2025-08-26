"use strict";

// //opgave 1
// // "use strict";

// // // console.log("tilfældigt tal " + Math.round(Math.random() * 101));

// function tilfældigtTal() {
//   // laver en funktion
//   const tal = Math.round(Math.random() * 101); //kalder variablen tal og laver math random med round
//   console.log(tal); // console logger tal

//   document.querySelector("#html_tal").textContent = tal;
// }

// tilfældigtTal(); // for at kunne se i konsollen skal jeg kalde funktionen

// // console.log("tilfældigt tal " + Math.round(Math.random() * 101));

//opgave 2
window.addEventListener("load", sidenVises);

let tal;

function sidenVises() {
  console.log("siden vises");
  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("skjul");
  document.querySelector("#level_complete").classList.add("skjul");

  document.querySelector("#html_tal").classList.add("skjul");
  document.querySelector("#feedback").classList.add("skjul");

  //gør start knap klikbar
  document.querySelector("#button").addEventListener("mousedown", tilfældigtTal);
}

function tilfældigtTal() {
  // laver en funktion
  const tal = Math.round(Math.random() * 101); //kalder variablen tal og laver math random med round
  const feedback = document.querySelector("#feedback");
  console.log(tal); // console logger tal

  document.querySelector("#html_tal").classList.remove("skjul");

  document.querySelector("#html_tal").textContent = tal;
  const brugerGæt = Number(document.querySelector("#gætte_tal").value);

  if (brugerGæt === tal) {
    levelComplete();
  } else if (brugerGæt < tal) {
    feedback.textContent = "Øv. For lavt";
    gameOver();
  } else if (brugerGæt > tal) {
    feedback.textContent = "Øv. For højt";
    gameOver();
  }
}

tilfældigtTal(); // for at kunne se i konsollen skal jeg kalde funktionen

function gameOver() {
  console.log("gameOver");
  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("skjul");
  document.querySelector("#feedback").classList.remove("skjul");

  document.querySelector("#game_over_loser").textContent = "Prøv igen";
  document.querySelector("#game_over").addEventListener("click", sidenVises);
}

function levelComplete() {
  console.log("levelComplete");
  //vis levelComplete skærm
  document.querySelector("#level_complete").classList.remove("skjul");

  document.querySelector("#level_complete_winner").textContent = "Yayy du gættede rigtigt";
  document.querySelector("#level_complete").addEventListener("click", sidenVises);
}
