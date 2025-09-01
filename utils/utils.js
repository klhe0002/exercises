//hente JSON data fra en URL
export async function loadJSON(url, callback) {
  const response = await fetch(url);
  const jsonData = await response.json();
  callback(jsonData);
}

//generere et random nummer mellem min og max
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//gør første bogstav i en string til stort
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
