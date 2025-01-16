// Sample clothing data
const clothingData = [
    { id: 1, name: 'Red Shirt' },
    { id: 2, name: 'Blue Pants' },
    { id: 3, name: 'Black Belt' },
    { id: 4, name: 'Blue Shirt' },
    { id: 5, name: 'Red Pants' },
    { id: 6, name: 'Red Scarf' },
  ];
  
  // Initialize dragged item
  let draggedItem = null;
  
  // Render clothing items
  const renderClothingItems = () => {
    const container = document.getElementById('clothing-items');
    container.innerHTML = '';
    clothingData.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'p-2 bg-gray-100 border rounded shadow cursor-pointer';
      itemDiv.draggable = true;
      itemDiv.textContent = item.name;
  
      // Add drag event
      itemDiv.addEventListener('dragstart', () => {
        draggedItem = item;
      });
  
      container.appendChild(itemDiv);
    });
  };
  
  // Add item to wardrobe
  const addToWardrobe = (item) => {
    const wardrobe = document.getElementById('wardrobe');
  
    // Create item div
    const itemDiv = document.createElement('div');
    itemDiv.className = 'flex items-center gap-2 p-2 bg-blue-100 rounded shadow';
  
    const itemName = document.createElement('div');
    itemName.textContent = item.name;
    itemName.className = 'font-bold';
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'text-red-500 hover:underline';
    removeButton.onclick = () => wardrobe.removeChild(itemDiv);
  
    // Append name and button
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(removeButton);
  
    // Append item to wardrobe
    wardrobe.appendChild(itemDiv);
  };
  
  // Set up drag-and-drop
  const setupDragAndDrop = () => {
    const wardrobe = document.getElementById('wardrobe');
  
    // Allow items to be dropped
    wardrobe.addEventListener('dragover', (e) => e.preventDefault());
    wardrobe.addEventListener('drop', () => {
      if (draggedItem) {
        addToWardrobe(draggedItem);
        draggedItem = null; // Reset dragged item
      }
    });
  };
  
  // Initialize app
  document.addEventListener('DOMContentLoaded', () => {
    renderClothingItems();
    setupDragAndDrop();
  });  