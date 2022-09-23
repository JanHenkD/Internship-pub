
console.clear();
const svg = document.querySelector("svg");

const svgns = "http://www.w3.org/2000/svg";

// change any value
let width = 500;
let height = 500;
let targets = 6;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];

// figure the new svg width/height
let svgWidth = width;
let svgHeight = height;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
});

function createbox(pincount){
  console.log(pincount)
  let newbox = document.createElementNS(svgns,'rect');
  gsap.set(newbox,{
    x: 200,
    y: 30,
    width: 100,
    height: 200,
    fill: "#ffd700",
    rx: 20,
    ry: 20,
    stroke:"#000000",
  })
 svg.appendChild(newbox);
 newbox.addEventListener("click",function(){console.log('RUN DAN ')},false);
}
function createlines(){
  console.log("function was run")
  var a = document.getElementById('a').value
  for(let i=1; i<a; i++){
  console.log(i);
  let newline = document.createElementNS(svgns, 'line');
  gsap.set(newline,{
    attr:{
    id:'line'+i,
    x1:200,
    x2:240,
    y1:20*i,
    y2:20*i,
    stroke:"black",}
});
svg.appendChild(newline);
let newline2 = document.createElementNS(svgns, 'line');

gsap.set(newline2,{
  attr:{
  x1:260,
  x2:300,
  y1:20*i,
  y2:20*i ,
  stroke:"red",
 
}
  
});
svg.appendChild(newline2);
svg.appendChild(newline);

newbox.addEventListener('click', function(){ console.log("REEE"); 
},false);

let svgWidth = width * targets;
let svgHeight = height*i;

}

}
function createpins(){
  newpin =  document.createElementNS(svgns,'rect');
  newpin2 = document.createElementNS(svgns,'rect');
  gsap.set(newpin,{
    x: 170,
    y: 30,
    width: 40,
    height: 10,
    fill: "#ffd700",
 
    stroke:"#000000",
  })
 svg.appendChild(newpin)


};