// JavaScript for functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    const quizForm = document.getElementById('quizForm');
    const suggestions = document.getElementById('suggestions');
    const suggestionContent = document.getElementById('suggestionContent');

    // Theme Switching
    themeSelector.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.target.value);
    });

    // Font Size Adjustment
    let currentFontSize = 16; // Default font size
    increaseFont.addEventListener('click', () => {
        currentFontSize += 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    });

    decreaseFont.addEventListener('click', () => {
        currentFontSize = Math.max(12, currentFontSize - 2); // Minimum font size: 12px
        document.body.style.fontSize = `${currentFontSize}px`;
    });

    // Quiz Submission and Suggestions
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const favoriteColor = document.getElementById('favoriteColor').value;
        const occasion = document.getElementById('occasion').value;
        const style = document.querySelector('input[name="style"]:checked')?.value;

        // Generate Suggestions
        if (favoriteColor && occasion && style) {
            suggestions.classList.remove('hidden');
            suggestionContent.textContent = `You prefer ${style} style for ${occasion} occasions with a touch of ${favoriteColor}.`;
        } else {
            alert('Please complete all fields!');
        }
    });
});