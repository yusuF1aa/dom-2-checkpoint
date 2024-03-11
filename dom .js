// Function to generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the color-box and change-color-btn elements
    let colorBox = document.getElementById('color-box');
    let changeColorBtn = document.getElementById('change-color-btn');

    // Add event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Change the background color of color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
