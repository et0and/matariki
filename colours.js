const colors = ["#FFFFFF", "#000000", "#2c4fa9", "#44914d", "#c83e28", "#ed6c3a", "#f5c644", "#eb4f74"];
        const container = document.getElementById('grid-container');

        // Function to generate a random integer between min and max, inclusive
        function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // On each page load
        window.onload = function() {
        // Generate 20 rectangles as an example
        for(let i = 0; i < 20; i++) {
            // Create a new rectangle
            let rectangle = document.createElement('div');
            rectangle.classList.add('rectangle');
        
            // Randomly determine the size and position of the rectangle
            let width = getRandomInt(10, 40);  // width between 10% and 40% of the container
            let height = getRandomInt(10, 40);  // height between 10% and 40% of the container
            let left = getRandomInt(0, 100 - width);  // left position within the container bounds
            let top = getRandomInt(0, 100 - height);  // top position within the container bounds

            // Apply the size and position styles to the rectangle
            rectangle.style.width = width + '%';
            rectangle.style.height = height + '%';
            rectangle.style.left = left + '%';
            rectangle.style.top = top + '%';

            // Randomly determine the color of the rectangle from your palette
            let colorIndex = getRandomInt(0, colors.length - 1);  // index within the colors array
            rectangle.style.backgroundColor = colors[colorIndex];

            // Append the rectangle to the container
            container.appendChild(rectangle);
        }
        }