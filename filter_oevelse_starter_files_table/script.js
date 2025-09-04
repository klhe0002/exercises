const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

const vehiclesBtn = document.querySelector("#vehicles");
const passengersBtn = document.querySelector("#passengers");
const ownedBtn = document.querySelector("#owned");
const fuelBtn = document.querySelector("#fuel");
const allBtn = document.querySelector("#all");

vehiclesBtn.addEventListener("click", vehiclesFilter);
passengersBtn.addEventListener("click", passengersFilter);
ownedBtn.addEventListener("click", ownedFilter);
fuelBtn.addEventListener("click", fuelFilter);
allBtn.addEventListener("click", showAll);

function vehiclesFilter() {
  // en der viser alle el drevne fartøjer
  const resultVehicles = vehicles.filter((isElectric) => isElectric.isElectric === true);
  console.log(resultVehicles);
  tbodyPointer.innerHTML = ""; // tømmer tabellen
  showTheseVehicles(resultVehicles);
}

function passengersFilter() {
  //en der viser alle fartøjer med mere end 2 sæder
  const resultPassengers = vehicles.filter((passengers) => passengers.passengers > 2);
  console.log(resultPassengers);
  tbodyPointer.innerHTML = ""; // tømmer tabellen
  showTheseVehicles(resultPassengers);
}

function ownedFilter() {
  //alle el-drevne fartøjer ejet af Jonas
  const resultOwned = vehicles.filter((ownedBy) => ownedBy.ownedBy === "Jonas");
  console.log(resultOwned);
  tbodyPointer.innerHTML = ""; // tømmer tabellen
  showTheseVehicles(resultOwned);
}

function fuelFilter() {
  //alle rugbrøds drevne fartøjer med plads til mere end en.
  const resultFuel = vehicles.filter((fuel) => fuel.fuel === "Rugbrød");
  console.log(resultFuel);
  tbodyPointer.innerHTML = ""; // tømmer tabellen
  showTheseVehicles(resultFuel);
}

function showAll() {
  tbodyPointer.innerHTML = ""; // tømmer
  showTheseVehicles(vehicles); // viser
}
