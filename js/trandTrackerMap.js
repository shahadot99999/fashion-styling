 // Search filter
 const searchInput = document.getElementById('search');
 const trendItems = document.querySelectorAll('.trend-item');

 searchInput.addEventListener('input', () => {
   const filter = searchInput.value.toLowerCase();

   trendItems.forEach(item => {
     const country = item.getAttribute('data-country').toLowerCase();
     const style = item.getAttribute('data-style').toLowerCase();
     const designer = item.getAttribute('data-designer').toLowerCase();

     if (country.includes(filter) || style.includes(filter) || designer.includes(filter)) {
       item.style.display = '';
     } else {
       item.style.display = 'none';
     }
   });
 });