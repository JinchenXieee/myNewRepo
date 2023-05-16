function getRandomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function randomRadius() {
    return Math.floor(Math.random() * 20);
  }
  
  common_color =getRandomColor()
  console.log(common_color)
  const svg = document.getElementById("base_svg");
  svg.style.backgroundColor = common_color;
  
  
  const myface = document.getElementById("myFace");
  myface.style.fill = common_color;
  
  
  const myMouth = document.getElementById("myMouth");
  myMouth.style.fill = getRandomColor();
  
  
  
  common_redius = randomRadius()
  const myEyesLeft = document.getElementById("myEyeLeft");
  const myEyesRight = document.getElementById("myEyeRight");
  
  myEyesLeft.setAttribute("r", common_redius);
  myEyesRight.setAttribute("r", common_redius);