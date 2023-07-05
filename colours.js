document.addEventListener('DOMContentLoaded', (event) => {
    const colours = ['#FFFFFF', '#489250', '#000000', '#2c4fa9', '#c83e28', '#ed6c3a', '#f5c644', '#eb4f74'];
    const animations = ['slideOutSlideInRight', 'slideOutSlideInLeft', 'upAndDown', 'downAndUp']; // Add more animations here if needed

    const container = document.getElementById('grid-container');

    for (let i = 0; i < 50; i++) {
        const colourIndex = Math.floor(Math.random() * colours.length);
        const animationIndex = Math.floor(Math.random() * animations.length);
        
        const rect = document.createElement('div');
        rect.className = 'rectangle';
        rect.style.backgroundColor = colours[colourIndex];
        rect.style.width = `${Math.random() * 100}%`;
        rect.style.height = `${Math.random() * 100}%`;
        rect.style.left = `${Math.random() * 100}%`;
        rect.style.top = `${Math.random() * 100}%`;
        rect.style.animation = `${animations[animationIndex]} ${Math.random() * 40 + 60}s linear infinite`; // The animation duration will also be random between 5 and 10 seconds

        container.appendChild(rect);
    }
});
