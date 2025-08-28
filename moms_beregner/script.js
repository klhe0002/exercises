"use strict";

function modtagArgumenter(beloeb, moms) {
  //først laver vi varialer om til tal med konvertering
  const beloebNum = parseInt(beloeb);
  const momsNum = parseInt(moms);

  //variabel resultat og så udregning
  const resultat = (beloebNum / 100) * momsNum;
  console.log("Resultat:", resultat);
}

modtagArgumenter("200", "25"); //definerer argumenterne
