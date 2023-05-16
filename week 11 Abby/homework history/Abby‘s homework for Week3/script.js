function  randomNumber(range){
    return Math.random()* range;}

function makeRGB(redInput,greenInput,blueInput){
    let redOutput=redInput ?? randomNumber(255);
    let greenOutput=greenInput ?? randomNumber(255);
    let blueOutput=blueInput ?? randomNumber(255);
    return `rgb(${redOutput},${greenOutput},${blueOutput})`;

 }
function rn(min,max) {
        return Math.floor(Math.random()*(max-min)+min);
    };
 
function rc(min,max) {
        var r=rn(min,max);
        var g=rn(min,max);
        var b=rn(min,max);
        return "rgb("+r+','+g+','+b+")";
    };


let svg = document.getElementById("basesvg");

let width=window.innerWidth;
let height=window.innerHeight;


svg.setAttribute("width",width);
svg.setAttribute("height",height);


function makeCircle(cx,cy,R,r,g,b){
    let xPos= cx ?? randomNumber(width);
    let yPos= cy ?? randomNumber(height);
    let circleRadius=R?? randomNumber(radius);
    let colour =rc(150,200);
    let circle=document.createElementNS ("http://www.w3.org/2000/svg","circle");
    circle.setAttribute("cx",xPos);
    circle.setAttribute("cy",yPos);
    circle.setAttribute("r",circleRadius);
    circle.setAttribute("fill",colour);
    svg.appendChild(circle);
}

n=100;
   for (var i=0;i<n;i++){
    makeCircle(null,null,randomNumber(15),null,null,null);
}





