
console.clear();
const svg = document.querySelector("svg");

const svgns = "http://www.w3.org/2000/svg";

// change any value
let width = 80;
let height = 60;
let targets = 6;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];

// figure the new svg width/height
let svgWidth = width * targets;
let svgHeight = height;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
});

function createbox(){
  let newbox = document.createElementNS(svgns,'rect');
  
  gsap.set(newbox,{
    x: 200,
    y: 30,
    width: width,
    height: height,
    fill: colorArray[1],
  })
 svg.appendChild(newbox)
}
function createlines(){
  console.log("function was run")
  var a = document.getElementById('a').value
  for(let i=1; i<a; i++){
  console.log(i);
  let newline = document.createElementNS(svgns, 'line');
  gsap.set(newline,{
    attr:{
    x1:200,
    x2:240,
    y1:20*i,
    y2:20*i,
    stroke:"black",}
});
svg.appendChild(newline);
// figure the new svg width/height
let svgWidth = width * targets;
let svgHeight = height*i;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
});

}

}