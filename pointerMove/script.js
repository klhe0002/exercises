// Lav en html side der detekterer musens X-position og opdaterer en CSS custom property der styrer lightness i en HSL color.
//Ekstra: Opdater fx Saturation, HSL, med musens Y-position
//SPOILER ALERT, HINTS LÆNGERE NEDE

// "mousemove";
// window.innerWidth;
// style.setProperty;
// clientX;
// procentregning: delen/detHele * 100

//noget med at body skal have en farve og js skal lytte efter musens position

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const width = window.innerWidth;
  const lightness = (x / width) * 100; // procentregning

  document.body.style.setProperty("--lightness", `${lightness}%`);
});
