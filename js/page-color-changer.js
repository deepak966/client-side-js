const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const htmlElement = document.documentElement;

// function to update backgroundColor
function updateBackgroundColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    //set the background color
    htmlElement.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}

//add event listener to detect slider change
redSlider.addEventListener('input',updateBackgroundColor);
greenSlider.addEventListener('input',updateBackgroundColor);
blueSlider.addEventListener('input',updateBackgroundColor)

// for initial loading
updateBackgroundColor();