const successCard = document.getElementById('successCard');
const allForm = document.getElementById('allForm');
const text = document.getElementById('text')



document.addEventListener('DOMContentLoaded', function() {
  const ratingForm = document.getElementById('ratingForm');
  ratingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
      const ratedValue = selectedRating.value;
      text.textContent = `you selected ${ratedValue} out of 5`;

    }
    allForm.classList.toggle('hidden');
    successCard.classList.remove('hidden')
    successCard.classList.toggle('flex');

  });
});