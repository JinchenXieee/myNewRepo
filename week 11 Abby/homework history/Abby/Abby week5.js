
		const canvas = document.getElementById('canvas');
		const circleBtn = document.getElementById('circle-btn');
		const rectangleBtn = document.getElementById('rectangle-btn');
		const triangleBtn = document.getElementById('triangle-btn');
		const colorBtn = document.getElementById('color-btn');
		let currentShape;

		function generateCircle() {
			canvas.innerHTML = '';
			const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			circle.setAttribute('cx', '250');
			circle.setAttribute('cy', '250');
			circle.setAttribute('r', '100');
			canvas.appendChild(circle);
			currentShape = circle;
		}

		function generateRectangle() {
			canvas.innerHTML = '';
			const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			rectangle.setAttribute('x', '150');
			rectangle.setAttribute('y', '150');
			rectangle.setAttribute('width', '200');
			rectangle.setAttribute('height', '200');
			canvas.appendChild(rectangle);
			currentShape = rectangle;
		}

		function generateTriangle() {
			canvas.innerHTML = '';
			const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			triangle.setAttribute('points', '250,150 140,350 360,350');
			canvas.appendChild(triangle);
			currentShape = triangle;
		}
		function  randomNumber(range){
			return Math.random()* range;}
		
		function makeRGB(redInput,greenInput,blueInput){
			let redOutput=redInput ?? randomNumber(255);
			let greenOutput=greenInput ?? randomNumber(255);
			let blueOutput=blueInput ?? randomNumber(255);
			return `rgb(${redOutput},${greenOutput},${blueOutput})`;
		
		 }
		 function generateRandomColor() {
			const color = makeRGB();
			currentShape.style.fill = color;
		}

		circleBtn.addEventListener('click', generateCircle);
		rectangleBtn.addEventListener('click', generateRectangle);
		triangleBtn.addEventListener('click', generateTriangle);
		colorBtn.addEventListener('click', generateRandomColor);
