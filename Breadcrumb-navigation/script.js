const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

/* 
Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen i et 
liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.
Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, vil 
din breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.
Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af 
en skråstreg (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link. */

//   document.querySelector("#html_tal").textContent = tal;

//måske finde indexet af det sidste element i arrayet
// og lave en if statement der siger at hvis det er det sidste element så skal det ikke være et link
//hvis det er index 3 (længden -1) så skal det ikke være et link

document.querySelector("button").addEventListener("click", klik);

function klik() {
  let str = "";
  //   str += "Finn";
  //   str += "hallo";
  //   console.log(str);
  // &nbsp; // noget med mellemrum

  bc.forEach((elm, index) => {
    // const nav = document.createElement("nav");

    if (index < bc.length - 1) {
      //så hvis indexet er mindere end længden -1(sidste element)
      str += `<a href="">${elm.name} / </a>`;
    } else {
      str += `${elm.name}`;
    }
  }); //for hvert loop i min streng tilføjer jeg linket
  document.querySelector("ul").innerHTML = str;
}
