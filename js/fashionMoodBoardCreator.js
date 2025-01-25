const canvas = document.getElementById('canvas');
const colorPalette = document.getElementById('colorPalette');
const suggestionsList = document.getElementById('suggestions');

// Drag-and-drop functionality
canvas.addEventListener('dragover', (e) => e.preventDefault());
canvas.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const element = document.createElement('div');
    element.textContent = data;
    element.classList.add('draggable', 'p-2', 'bg-gray-200', 'rounded');
    canvas.appendChild(element);
});

// Add Text button
document.getElementById('addTextBtn').addEventListener('click', () => {
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter text';
    textInput.classList.add('input', 'input-bordered', 'mb-2');
    textInput.addEventListener('change', () => {
        const span = document.createElement('span');
        span.textContent = textInput.value;
        span.classList.add('draggable', 'p-2', 'bg-gray-200', 'rounded');
        canvas.appendChild(span);
        textInput.remove();
    });
    canvas.appendChild(textInput);
    textInput.focus();
});



// Add Color button
document.getElementById('addColorBtn').addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const colorSwatch = document.createElement('div');
    colorSwatch.style.backgroundColor = randomColor;
    colorSwatch.classList.add('w-8', 'h-8', 'rounded-full');
    colorPalette.appendChild(colorSwatch);
});

// Color extraction function
function extractColors(image) {
    // Example color extraction logic
    const colors = ['#FF5733', '#33FF57', '#3357FF']; // Mock colors
    colors.forEach((color) => {
        const colorSwatch = document.createElement('div');
        colorSwatch.style.backgroundColor = color;
        colorSwatch.classList.add('w-8', 'h-8', 'rounded-full');
        colorPalette.appendChild(colorSwatch);
    });
}

// Export button
document.getElementById('exportBtn').addEventListener('click', () => {
    alert('Export functionality will be implemented later.');
});

// Suggestions
const suggestions = [
    'Minimalist aesthetic',
    'Bold and vibrant colors',
    'Natural and earthy tones',
    'Retro inspired',
];

suggestions.forEach((suggestion) => {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    suggestionsList.querySelector('ul').appendChild(listItem);
});
