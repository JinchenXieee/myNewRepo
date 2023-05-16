class Particle {
    constructor(xPos, yPos, radius) {
      this.x = xPos;
      this.y = yPos;
      this.r = radius;
      this.svgElement;
      this.damping = 0.01;
      this.animDuration = randomNum(3, 5);
      this.velocity = {
        x: randomNum(-5, 5),
        y: randomNum(-5, 5)
      };
      this.acceleration = {
        x: 0,
        y: 0.1
      };
      this.targetX = xPos + randomNum(-500, 500);
      this.targetY = height;
    }
  
    drawParticle() {
      this.svgElement = makeCircle(this.x, this.y, this.r);
      this.svgElement.setAttribute('fill', `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`);
      svg.appendChild(this.svgElement);
    }
    
    animate() {
      const animateParticle = () => {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity.x *= 1 - this.damping;
        this.velocity.y *= 1 - this.damping;
  
        this.svgElement.setAttribute('cx', this.x);
        this.svgElement.setAttribute('cy', this.y);
  
        if (this.y >= this.targetY) {
          this.x = width / 2;
          this.y = height / 2;
          this.targetX = this.x + randomNum(-500, 500);
          this.targetY = height;
          this.velocity = {
            x: randomNum(-5, 5),
            y: randomNum(-5, 5)
          };
        }
  
        
        window.requestAnimationFrame(animateParticle);
      };
  
      animateParticle();
    }
  
  }
  
  function createParticlesArray(num) {
    let particleInstances = [];
  
    for (let i = 0; i < num; i++) {
      let particleX = width / 2;
      let particleY = height / 2;
      let particleSize = randomNum(width * 0.001, width * 0.005);
      particleInstances.push(new Particle(particleX, particleY, particleSize));
    }
  
    setInterval(() => {
      let particleX = width / 2;
      let particleY = height / 2;
      let particleSize = randomNum(width * 0.001, width * 0.005);
      particleInstances.push(new Particle(particleX, particleY, particleSize));
    }, 500);
  
    return particleInstances;
  }
  
  
  let width = window.innerWidth;
  let height = window.innerHeight;
  const svg = document.getElementById('base-svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('style', 'background-color: black');
  let particles = createParticlesArray(50);
  
  
  for (let particle of particles) {
    particle.drawParticle();
    particle.animate();
  }
  
  