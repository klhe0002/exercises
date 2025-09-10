"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
  name: "-default name-",
  desc: "-no description-",
  type: "-unknown-",
  age: 0,
};

const allAnimals = [
  //   {
  //     name: "Mandu",
  //     desc: "amazing",
  //     type: "cat",
  //     age: 10,
  //   },
  //   {
  //     name: "Mia",
  //     desc: "black",
  //     type: "cat",
  //     age: 10,
  //   },
  //   {
  //     name: "Leeloo",
  //     desc: "growing",
  //     type: "dog",
  //     age: 3,
  //   },
  //   {
  //     name: "Toothless",
  //     desc: "trained",
  //     type: "dragon",
  //     age: 14,
  //   },
  //   {
  //     name: "ScoobyDoo",
  //     desc: "wondering",
  //     type: "dog",
  //     age: 58,
  //   },
  //   {
  //     name: "Horsey",
  //     desc: "horsing",
  //     type: "horse",
  //     age: 10,
  //   },
];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Create new object with cleaned data - and store that in the allAnimals array
    const animal = Object.create(Animal);

    const fullName = jsonObject.fullname;

    const firstSpace = fullName.indexOf(" ");
    const secondSpace = fullName.indexOf(" ", firstSpace + 1);
    const lastSpace = fullName.lastIndexOf(" ");

    const name = fullName.substring(0, firstSpace);
    const desc = fullName.substring(secondSpace + 1, lastSpace);
    const type = fullName.substring(lastSpace);

    // console.log(`name:_${name}_
    //     desc:_${desc}_
    //     type:_${type}_`);

    animal.name = name;
    animal.desc = desc;
    animal.type = type;

    animal.age = jsonObject.age;

    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
