document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
    }
});
