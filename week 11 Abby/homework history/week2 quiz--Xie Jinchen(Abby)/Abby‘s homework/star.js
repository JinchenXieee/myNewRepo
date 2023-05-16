// Code for meteor shower effect
(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var numParticles = 50;
  
    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      for (var i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }
  
    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.speed = Math.random() * 5 + 1;
      this.size = Math.random() * 3 + 1;
    }
  
    Particle.prototype.update = function() {
      this.x -= this.speed;
      this.y += this.speed;
  
      if (this.x < 0) {
        this.x = canvas.width;
      }
  
      if (this.y > canvas.height) {
        this.y = 0;
      }
    };
  
    Particle.prototype.draw = function() {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    };
  
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
  
      requestAnimationFrame(loop);
    }
  
    init();
    loop();
  })();
  
  // Code for semicircle effect
  (function() {
    "use strict";
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const colors = [    "#FF4C3F",    "#D77926",    "#CFBF6E",    "#297B43",    "#32968C",    "#4683C1",    "#563FBC"  ];
    const radius = [300, 250, 200, 150, 100, 50, 25];
    let angle = 0;
  
    function drawSemicircle(angle) {
      for (let i = 0; i < 7; i++) {
        const color = colors[i];
        const r = radius[i];
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "#000000");
  
        ctx.fillStyle = gradient;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle + (i * Math.PI / 3));
        ctx.beginPath();
        ctx.arc(0, 0, r, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.01;
      drawSemicircle(angle);
      requestAnimationFrame(animate);
    }
  
    animate();
  })();
  