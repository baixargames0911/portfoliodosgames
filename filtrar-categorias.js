// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o container principal dos jogos
    const gameGridContainer = document.querySelector('.game-grid');
    const filterLinks = document.querySelectorAll('.filter-link');
    const searchInput = document.getElementById('search-input');

    // Função que cria e retorna o HTML de um único cartão de jogo
    function createGameCard(game) {
    const categoriesString = game.categories.join(' ');

    // Verifica se o jogo tem a categoria 'online' ou 'coop'
    const isOnline = game.categories.includes('online') || game.categories.includes('coop');

    // Cria o HTML do selo se o jogo for online, caso contrário, uma string vazia
    const onlineBadgeHtml = isOnline ? '<span class="online-badge">Online</span>' : '';

    return `
        <a href="detalhes-jogo.html?id=${game.id}" class="game-card" data-category="${categoriesString}">
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            </div>
            ${onlineBadgeHtml}
        </a>
    `;
}

    // Função para renderizar um grupo de jogos em uma seção
    function renderGameSection(title, gamesArray) {
        if (gamesArray.length === 0) return '';

        const gameCardsHtml = gamesArray.map(createGameCard).join('');
        return `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2631122850076679"
     crossorigin="anonymous"></script>
<!-- Pre modal -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2631122850076679"
     data-ad-slot="8052252317"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            <h2 class="section-title">${title}</h2>
            <div class="game-row">${gameCardsHtml}</div>
        `;
    }

    // Função principal para filtrar e renderizar os jogos
    function filterAndRenderGames() {
        const selectedFilter = document.querySelector('.filter-link.active')?.dataset.filter || 'all';
        const searchTerm = searchInput.value.toLowerCase();

        // Filtra os jogos com base na categoria e no termo de pesquisa
        const filteredGames = games.filter(game => {
            const matchesCategory = selectedFilter === 'all' || game.categories.includes(selectedFilter);
            const matchesSearch = game.title.toLowerCase().includes(searchTerm) || game.description.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        // Limpa o container antes de renderizar
        gameGridContainer.innerHTML = '';

        // Lógica de exibição profissional
        if (searchTerm) {
            // Se houver pesquisa, mostra todos os resultados em uma única seção
            gameGridContainer.innerHTML = renderGameSection('Resultados da Pesquisa', filteredGames);
        } else if (selectedFilter !== 'all') {
            // Se um filtro de categoria estiver ativo, mostra os jogos filtrados
            gameGridContainer.innerHTML = renderGameSection(`Jogos de ${selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}`, filteredGames);
        } else {
            // Se não houver pesquisa ou filtro, mostra as seções de destaque e lançamento
            const featuredGames = games.filter(game => game.isFeatured);
            const newGames = games.filter(game => game.isNew);
            const allGames = games.filter(game => !game.isFeatured && !game.isNew);
            
            gameGridContainer.innerHTML += renderGameSection('Destaques da Semana', featuredGames);
            gameGridContainer.innerHTML += renderGameSection('Chegou Agora!', newGames);
            gameGridContainer.innerHTML += renderGameSection('Todos os Jogos', allGames);
        }
    }

    // Adiciona evento de clique para os links de categoria
    filterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            filterLinks.forEach(otherLink => otherLink.classList.remove('active'));
            link.classList.add('active');
            searchInput.value = '';
            filterAndRenderGames();
        });
    });

    // Adiciona evento de input para a barra de pesquisa (busca em tempo real)
    searchInput.addEventListener('input', () => {
        filterLinks.forEach(link => link.classList.remove('active'));
        filterAndRenderGames();
    });

    // Renderiza o conteúdo inicial da página
    filterAndRenderGames();
});

// Função para detectar AdBlocker
function checkAdBlocker() {
    // Cria um elemento de teste comum usado para anúncios
    const adTest = document.createElement('div');
    adTest.innerHTML = '&nbsp;';
    adTest.className = 'adsbox'; // Classe comum bloqueada por AdBlockers
    document.body.appendChild(adTest);

    // Usa um timeout para garantir que o AdBlocker teve tempo de agir
    setTimeout(() => {
        // Verifica se o elemento de teste tem altura zero ou está oculto
        if (adTest.offsetHeight === 0) {
            // Se for detectado, exibe um modal ou uma mensagem
            showAdBlockerMessage();
        }
        // Remove o elemento de teste
        adTest.remove();
    }, 500);
}

// Função para exibir a mensagem do AdBlocker
function showAdBlockerMessage() {
    // Cria o modal
    const modal = document.createElement('div');
    modal.className = 'adblock-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Por favor, desative seu AdBlocker!</h2>
            <p>Este site é mantido por meio de anúncios. Para continuar acessando nosso conteúdo e nos apoiar, pedimos que desative seu bloqueador de anúncios.</p>
            <button onclick="document.querySelector('.adblock-modal').style.display='none'">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Chamada da função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // ... seu código atual ...

    // Chama a função de verificação do AdBlocker
    checkAdBlocker();
});