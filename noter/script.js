// const s1 = "1"; // string
// const n1 = "2";
// const n1 = 1;
// const n2 = 2;

// console.log(s1 + n1); //string derfor 12 1+2
// consolel.log(n1 + n2); //number derfor som plus 1+2=3

/*
start med to likkede hænder 
nedtælling (sten, saks, papir)
3 udfald pr. hånd 
sten slår saks 
saks slår papir 
papir slår sten 

en vinder og en taber */

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Klara");
console.log(result);

//Arrow function

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  //man behøver ikke at skrive function
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100; //behøver ikke bruge curly braces og return hvis det er en enkelt linje

// 3. Remove the parameter parentheses
(a) => a + 100; //hvis der kun er et parameter behøver man ikke parenteser

//hente JSON data fra en URL (anbefale at bruge )
// export async function loadJSON(url, callback) {
//   const response = await fetch(url);
//   const jsonData = await response.json();
//   callback(jsonData);
// }

//anonyme functioner
//forEach loop gennem array

// students.forEach(function (student) {
//   console.log(`name: ${student.firstName}`);
// });


const student1 = {

firstName: ”Harry”,

lastName: ”Potter”

};

const student2 = student1;

if (student1 === student2) {

console.log(“They are the same!”);

} else {

console.log(“They are not ...”);

}