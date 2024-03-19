document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('searchInput');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    searchIcon.addEventListener('click', function() {
        searchBar.classList.toggle('hidden');
        searchInput.focus();
    });

    searchIcon.addEventListener('click', function() {
        document.getElementById('web-search').scrollIntoView({ behavior: 'smooth' });
    });

    searchIcon.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            window.location.href = `resultados.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });
});