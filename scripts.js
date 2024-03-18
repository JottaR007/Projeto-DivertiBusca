document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Adicionar funcionalidade ao ícone de pesquisa

docume
document.querySelector('.search-icon').addEventListener('click', function() {
    
 
// Redirecionar para a seção de pesquisa
    
   
document.getElementById('web-search').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            // Redirecionar para a página de resultados com o termo de pesquisa
            window.location.href = `resultados.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');

    searchIcon.addEventListener('click', function() {
        searchBar.classList.toggle('hidden');
    });
});
