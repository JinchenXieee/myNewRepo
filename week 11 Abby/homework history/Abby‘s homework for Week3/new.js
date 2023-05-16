function  randomNumber(range){
    return Math.random()* range;}

function makeRGB(redInput,greenInput,blueInput){
    let redOutput=redInput ?? randomNumber(255);
    let greenOutput=greenInput ?? randomNumber(255);
    let blueOutput=blueInput ?? randomNumber(255);
    return `rgb(${redOutput},${greenOutput},${blueOutput})`;
 }

let svg = document.getElementById("basesvg");

let width=500;
let height=600;

svg.setAttribute("width",width);
svg.setAttribute("height",height);

function makeCircle(cx,cy,R,r,g,b){
    let xPos= cx ?? randomNumber(width);
    let yPos= cy ?? randomNumber(height);
    let circleRadius=R ?? randomNumber(radius);
    let colour =makeRGB(r,g,b);

    let circle=document.createElementNS ("http://www.w3.org/2000/svg","circle");

    circle.setAttribute("cx",xPos);
    circle.setAttribute("cy",yPos);
    circle.setAttribute("R",circleRadius);
    circle.setAttribute("fill",colour);
    circle.setAttribute('fill-opacity', Math.random());
    svg.appendChild(circle);
}

makeCircle(null,null,15,15,null,null);
makeCircle(null,null,15,null,null,null);
makeCircle(null,null,15,null,null,null);