
// console log to know that the script is loaded
console.log('Script is loaded');

//Initialising a radius variable to store the user input value
let radius = null;

// function to calculate the area whenever user inputs or changes the radius
function getArea() {
    radius = document.getElementById('nikhil-radiusId').value;
    //Assigning the calculated area value using 'id' in html code
    document.getElementById('nikhil-areaId').value = (Math.PI * Math.pow(radius, 2)).toFixed(2);
}

// creating an event listener for radius input
document.getElementById('nikhil-radiusId').addEventListener('input', getArea);
