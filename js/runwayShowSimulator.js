const startButton = document.getElementById('startShow');
const modelElement = document.getElementById('model');
const heightSlider = document.getElementById('height');
const bodyTypeSelect = document.getElementById('bodyType');
const outfitSelect = document.getElementById('outfit');
const colorInput = document.getElementById('color');

startButton.addEventListener('click', () => {
    modelElement.style.display = 'block'; 

    // Update model height based on slider value
    const height = heightSlider.value;
    modelElement.style.height = `${height}px`; 

    // Update model body type (simple example)
    if (bodyTypeSelect.value === 'athletic') {
        modelElement.style.width = '60px'; 
    } else {
        modelElement.style.width = '40px'; 
    }

    // Update model outfit (simple example)
    if (outfitSelect.value === 'dress') {
        modelElement.style.borderRadius = '5px'; 
    } else if (outfitSelect.value === 'suit') {
        modelElement.style.borderRadius = '0'; 
    }

    // Update model color
    modelElement.style.backgroundColor = colorInput.value; 
});