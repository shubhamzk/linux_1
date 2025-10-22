document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Toggle the display of the main navigation menu
            const isVisible = mainNav.style.display === 'flex';
            mainNav.style.display = isVisible ? 'none' : 'flex';
            
            // Simple visual feedback change
            menuToggle.innerHTML = isVisible 
                ? '<i class="fas fa-bars"></i>' 
                : '<i class="fas fa-times"></i>';
            
            mainNav.style.flexDirection = 'column'; // Stack links vertically
        });
    }

    // *Further expansion for 1000 lines would include:*
    // 1. **Cart functionality:** Add to cart, update count.
    // 2. **Filter logic:** Displaying/hiding products based on sidebar filters.
    // 3. **Image carousels** for product details.
});