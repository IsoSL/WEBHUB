document.addEventListener('DOMContentLoaded', function() {
    // Get all cards
    const cards = document.querySelectorAll('.card');
    
    // Add click event listeners to all cards
    cards.forEach(card => {
        const url = card.getAttribute('data-url');
        const visitBtn = card.querySelector('.visit-btn');
        
        // Add click event to the visit button
        visitBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip when clicking the button
            window.open(url, '_blank');
        });
        
        // Optional: Add click event to the entire card
        card.addEventListener('click', () => {
            // This will toggle the flip animation when clicking anywhere on the card
            card.querySelector('.card-inner').classList.toggle('clicked');
        });
    });
    
    // Add hover effect for cards on mobile
    if ('ontouchstart' in window) {
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('hover');
            });
            
            card.addEventListener('touchend', function() {
                this.classList.remove('hover');
            });
        });
    }
});
