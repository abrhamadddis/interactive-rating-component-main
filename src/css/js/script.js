document.addEventListener('DOMContentLoaded', function() {
    const ratingForm = document.getElementById('ratingForm');
    ratingForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const selectedRating = document.querySelector('input[name="rating"]:checked');
      if (selectedRating) {
        const ratingTitle = document.getElementById('ratingTitle');
        const ratingText = document.getElementById('ratingText');
  
        // Replace h1 and p with new content
        ratingTitle.textContent = 'Thank you for your rating!';
        ratingText.textContent = `You selected ${selectedRating.value} as your rating.`;
  
        // Remove previous selected class
        const previousSelectedLabel = document.querySelector('.rating-label.selected');
        if (previousSelectedLabel) {
          previousSelectedLabel.classList.remove('selected');
        }
  
        // Add selected class to the current selected label
        const selectedLabel = document.querySelector(`label[for="${selectedRating.id}"]`);
        selectedLabel.classList.add('selected');
      }
    });
  });