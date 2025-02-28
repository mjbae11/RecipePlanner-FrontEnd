const demoHeadings = document.getElementsByTagName('h3'); // Get all h3 elements
const colors = ["red", "blue", "green", "yellow"];
let index = 0;

function changeHeadingColor() {
    for (let heading of demoHeadings) {
        heading.style.color = colors[index];
    }
    
    index = (index + 1) % colors.length; // Loop back to the start after the last color
}

setInterval(changeHeadingColor, 1000);