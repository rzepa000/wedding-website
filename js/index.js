const card = document.querySelector('.card');

// Add a click event listener to the entire card
card.addEventListener('click', () => {
    // Toggle the 'open' class on click
    card.classList.toggle('open');
});