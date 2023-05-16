svg = document.getElementById('canvas');
        var canvas = document.getElementById('canvas');
        let width = 1000; 
        let height = 1000;
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        console.log(svg.width, svg.height);

        function getRandomColor(oddEven) {
            var r, g, b;
              if (oddEven) {
                r = getRandomEvenNumber();
                g = getRandomOddNumber();
                b = getRandomEvenNumber();
              } else {
                r = getRandomOddNumber();
                g = getRandomEvenNumber();
                b = getRandomOddNumber();
              }
              return "rgb(" + r + "," + g + "," + b + ")";
            }
    
        function getRandomEvenNumber() {
              return Math.floor(Math.random() * 128) * 2;
            }    
        function getRandomOddNumber() {
              return Math.floor(Math.random() * 128) * 2 + 1;
            }


        for (var x = 0; x < 1000; x += 100) {
        for (var y = 0; y < 1000; y += 100) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", "100");
        rect.setAttribute("height", "100");
        rect.setAttribute("fill", getRandomColor());
        canvas.appendChild(rect);
        }
        }


        var centerX = 250;
        var centerY = 250;
        var radius1 = 250;
        for (var i = 0; i < 50; i++) {        
        var circleRadius = radius1 - i * 20;
        var fillColor = getRandomColor(i % 2);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", centerX);
        circle.setAttribute("cy", centerY);
        circle.setAttribute("r", circleRadius);
        circle.setAttribute("fill", fillColor);
        document.querySelector("svg").appendChild(circle);
        }

       
        var centerX = 750;
        var centerY = 250;
        var radius2 = 250;
        for (var i = 0; i < 50; i++) {        
        var circleRadius = radius2 - i * 20;
        var fillColor = getRandomColor(i % 2);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", centerX);
        circle.setAttribute("cy", centerY);
        circle.setAttribute("r", circleRadius);
        circle.setAttribute("fill", fillColor);
        document.querySelector("svg").appendChild(circle);
        }

       

        var centerX = 750;
        var centerY = 750;
        var radius3 = 250;
        for (var i = 0; i < 50; i++) {
        var circleRadius = radius3 - i * 20;
        var fillColor = getRandomColor(i % 2);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", centerX);
        circle.setAttribute("cy", centerY);
        circle.setAttribute("r", circleRadius);
        circle.setAttribute("fill", fillColor);
        document.querySelector("svg").appendChild(circle);
        }



        var centerX = 250;
        var centerY = 750;
        var radius4 = 250;
        for (var i = 0; i < 50; i++) {        
        var circleRadius = radius4 - i * 20;
        var fillColor = getRandomColor(i % 2);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", centerX);
        circle.setAttribute("cy", centerY);
        circle.setAttribute("r", circleRadius);
        circle.setAttribute("fill", fillColor);
        document.querySelector("svg").appendChild(circle);
        }