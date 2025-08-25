// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os links de categoria e o input de pesquisa
    const filterLinks = document.querySelectorAll('.filter-link');
    const gameCards = document.querySelectorAll('.game-card');
    const searchInput = document.getElementById('search-input');
    const allGamesContainer = document.querySelector('.game-row');

    // Função para filtrar os jogos com base na categoria e termo de pesquisa
    function filterAndSearchGames() {
        const selectedCategory = document.querySelector('.filter-link.active')?.dataset.filter || 'all';
        const searchTerm = searchInput.value.toLowerCase();
        const searchHidden = document.getElementById('search-hidden');
        const searchHidden2 = document.getElementById('search-hidden2');

        gameCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();

            const isCategoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;
            const isSearchMatch = cardTitle.includes(searchTerm);

            if (isCategoryMatch && isSearchMatch) {
                searchHidden.style.display = 'block';
                searchHidden2.style.display = 'block';
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
                searchHidden.style.display = 'none';
                searchHidden2.style.display = 'none';
            }
        });
    }

    // Adiciona evento de clique para os links de categoria
    filterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove a classe 'active' de todos os links e adiciona ao link clicado
            filterLinks.forEach(otherLink => otherLink.classList.remove('active'));
            link.classList.add('active');

            // Limpa o campo de pesquisa ao clicar em um filtro
            searchInput.value = '';

            filterAndSearchGames();
        });
    });

    // Adiciona evento de input para a barra de pesquisa (busca em tempo real)
    searchInput.addEventListener('input', () => {
        // Remove a classe 'active' de todos os links de filtro ao pesquisar
        filterLinks.forEach(link => link.classList.remove('active'));
        filterAndSearchGames();
    });

    // Inicia a página mostrando todos os jogos
    filterAndSearchGames();

});
