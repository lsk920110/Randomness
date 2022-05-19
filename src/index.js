const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

//18개 이므로 0~17이 필요함
//document.querySelector("body").style.background =
//"linear-gradient(to right, blue, pink)";
var first;
var second;

function randomNumber() {
  var randomNum = Math.floor(Math.random() * (colors.length - 1));
  return randomNum;
}

function colorSelector() {
  first = randomNumber();
  second = randomNumber();
  while (first == second) {
    second = randomNumber();
  }
  let txt = `linear-gradient(to right, ${colors[first]}, ${colors[second]})`;
  document.querySelector("body").style.background = txt;
}

document.querySelector("button").addEventListener("click", colorSelector);
