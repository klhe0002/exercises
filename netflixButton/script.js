/*  

Du skal lave en knap, der efterligner den, man ser i slutningen af et Netflix-afsnit.

 

Funktionalitet:

1. Når knappen vises, starter en animation (fx en progress-bar eller en cirkel, der fyldes ud inde i knappen).

2. Når animationen er færdig, sker der en tydelig handling (fx: siden skifter farve, der linkes til en ny side, eller noget andet synligt).

3. Hvis man bevæger musen et hvilket som helst sted på siden, hopper animationen straks til slut – men der sker ikke noget (ingen handling udføres).

 

Krav:

• Du skal bruge HTML, CSS og JavaScript.

• Animationen skal være synlig og give fornemmelsen af en “nedtælling”.

• Handling efter animationen skal være mærkbar (fx navigation eller farveskifte).
*/

window.addEventListener("load", sidenVises);

function sidenVises() {
  document.querySelector("#overlay").classList.add("timer");
  document.querySelector("#slut").classList.add("skjul");
  // Når animationen er færdig
  document.querySelector("#overlay").addEventListener("animationend", animationDone);

  // Hvis musen bevæges, spring til slut og fjern eventuel handling
  document.addEventListener("mousemove", stopAnimation);
}

function animationDone() {
  // Handling: fx skift baggrundsfarve
  document.querySelector("#button").style.display = "none";
  document.body.style.backgroundColor = "black";
  document.querySelector("#slut").classList.remove("skjul");
}

function stopAnimation() {
  const btn = document.querySelector("#button");
  btn.classList.remove("timer");
  btn.removeEventListener("animationend", animationDone);
}
