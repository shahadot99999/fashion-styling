 // Access the webcam feed
 const video = document.getElementById('webcam');
 const overlay = document.getElementById('overlay');
 
 //getContext('2d') method provides a drawing context for rendering images onto the new canvas
 const ctx = overlay.getContext('2d');

 // Accessories and controls
 const accessorySelector = document.getElementById('accessory-selector');
 const colorPicker = document.getElementById('color-picker');
 const shareButton = document.getElementById('share-button');

 let selectedAccessory = 'glasses';
 let selectedColor = '#000000';

 // Initialize webcam
 navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
   video.srcObject = stream;
 });

 // Update accessory and color dynamically
 accessorySelector.addEventListener('change', (e) => {
   selectedAccessory = e.target.value;
 });

 colorPicker.addEventListener('input', (e) => {
   selectedColor = e.target.value;
 });

 // Draw overlay accessories
 function drawAccessory() {

    //Clearing the Canvas
   ctx.clearRect(0, 0, overlay.width, overlay.height);
   ctx.fillStyle = selectedColor;
   // Example accessory: glasses
   if (selectedAccessory === 'glasses') {
    //Dynamic Drawing
     ctx.fillRect(100, 100, 200, 50);
   }
   //Continuous Updates
   requestAnimationFrame(drawAccessory);
 }

 //Canvas Resizing
 overlay.width = video.clientWidth;
 overlay.height = video.clientHeight;
 drawAccessory();

 
 
 
 // Share functionality
 shareButton.addEventListener('click', () => {
    //Create a New Canvas
   const snapshotCanvas = document.createElement('canvas');
   const snapshotCtx = snapshotCanvas.getContext('2d');

   //Set Canvas Dimensions
   snapshotCanvas.width = overlay.width;
   snapshotCanvas.height = overlay.height;


   //Draw Webcam Feed
   snapshotCtx.drawImage(video, 0, 0, snapshotCanvas.width, snapshotCanvas.height);

   //Draw Accessories
   snapshotCtx.drawImage(overlay, 0, 0);

   //Convert Canvas to an Image URL
   const dataURL = snapshotCanvas.toDataURL('image/png');

   //Create Download Link
   const link = document.createElement('a');
   link.href = dataURL;
   link.download = 'try-on-look.png';
   link.click();
 });