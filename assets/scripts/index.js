const btn = document.getElementById('jtwbtn');
const modal = document.getElementById('waitlistModal');
const closeBtn = document.querySelector('.close');

// Show modal when button is clicked
btn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close modal when 'x' is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});