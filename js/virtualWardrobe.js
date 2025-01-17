// Selectors for wardrobe, mannequin, and filter inputs
const wardrobe = document.getElementById('wardrobe');
const mannequin = document.getElementById('mannequin');
const filterInput = document.getElementById('filter-input');
const saveOutfitButton = document.getElementById('save-outfit');
const outfitList = document.getElementById('outfit-list');


// Drag and Drop Functionality
wardrobe.addEventListener('dragstart',  (e)=>{
    if(e.target.classList.contains("clothing-item"))
      // console.log("dragstarted", e.target.id);
        e.dataTransfer.setData('text', e.target.id)
    

} )



mannequin.addEventListener('dragover', (e) => {
    e.preventDefault();
});

mannequin.addEventListener('drop', (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text');
    const item = document.getElementById(itemId);
    const clone = item.cloneNode(true);
    clone.id = `${itemId}-clone-${Date.now()}`; // Ensure unique ID
    mannequin.appendChild(clone);
});

// Filtering Clothes
filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    const items = wardrobe.querySelectorAll('.clothing-item');
    items.forEach((item) => {
        const itemType = item.dataset.type.toLowerCase();
        const itemColor = item.dataset.color.toLowerCase();
        const itemOccasion = item.dataset.occasion.toLowerCase();

        if (
            itemType.includes(filterValue) ||
            itemColor.includes(filterValue) ||
            itemOccasion.includes(filterValue)
        ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Save Outfit Functionality
saveOutfitButton.addEventListener('click', () => {
    const outfitItems = mannequin.querySelectorAll('.clothing-item');
    if (outfitItems.length === 0) {
        alert('Add items to the mannequin before saving!');
        return;
    }

    const outfit = document.createElement('div');
    outfit.classList.add('outfit');

    outfitItems.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.id = ''; // Remove ID to prevent conflicts
        outfit.appendChild(clone);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        outfit.remove();
    });

    outfit.appendChild(removeButton);
    outfitList.appendChild(outfit);
});

// Responsive Adjustments (Optional)
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        console.log('Switching to mobile layout...');
        // Add any layout-specific adjustments here
    } else {
        console.log('Switching to desktop layout...');
        // Add any layout-specific adjustments here
    }
});
