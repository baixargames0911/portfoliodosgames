// --- BANCO DE DADOS DE JOGOS (Simulando) ---
const games = [
    {
        id: 'gta-5',
        title: 'GTA 5',
        image: 'https://via.placeholder.com/300x150?text=Grand+Theft+Auto+V',
        description: 'Entre no mundo de Los Santos e Blaine County nesta épica história de três protagonistas que buscam sobreviver ao perigoso submundo do crime.',
        requirements: ['Sistema Operacional: Windows 7 ou superior', 'Processador: Intel Core 2 Quad Q6600', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA 9800 GT 1GB', 'Espaço em Disco: 72 GB'],
        downloadLink: 'https://example.com/download/gta-5',
        categories: ['acao', 'online'],
        isFeatured: true
    },
    {
        id: 'the-last-of-us-1',
        title: 'The Last of Us 1',
        image: 'https://via.placeholder.com/300x150?text=The+Last+of+Us+Part+I',
        description: 'Vinte anos após uma pandemia devastar a civilização, um sobrevivente endurecido é contratado para contrabandear uma garota de 14 anos.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: AMD Ryzen 5 1500X', 'Memória RAM: 16 GB', 'Placa de Vídeo: AMD Radeon RX 480 (8 GB)', 'Espaço em Disco: 100 GB SSD'],
        downloadLink: 'https://example.com/download/the-last-of-us-1',
        categories: ['acao', 'aventura']
    },
    {
        id: 'the-last-of-us-2',
        title: 'The Last of Us 2',
        image: 'https://via.placeholder.com/300x150?text=The+Last+of+Us+Part+II',
        description: 'Cinco anos após a perigosa jornada, Ellie e Joel se estabeleceram em Jackson, Wyoming. No entanto, um evento violento perturba essa tranquilidade.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: AMD Ryzen 7 2700X', 'Memória RAM: 16 GB', 'Placa de Vídeo: AMD Radeon RX 5800 XT', 'Espaço em Disco: 100 GB SSD'],
        downloadLink: 'https://example.com/download/the-last-of-us-2',
        categories: ['acao', 'aventura'],
        isNew: true
    },
    {
        id: 'red-dead-redemption',
        title: 'Red Dead Redemption 2',
        image: 'https://via.placeholder.com/300x150?text=Red+Dead+Redemption+2',
        description: 'Uma história épica de honra e lealdade em um dos mundos abertos mais vastos e detalhados já criados. Acompanhe Arthur Morgan e a gangue de Van der Linde.',
        requirements: ['Sistema Operacional: Windows 7 SP1 ou superior', 'Processador: Intel Core i5-2500K', 'Memória RAM: 8 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 770 2GB', 'Espaço em Disco: 150 GB'],
        downloadLink: 'https://example.com/download/red-dead-redemption-2',
        categories: ['acao', 'rpg', 'online'],
        isFeatured: true
    },
    {
        id: 'sons-of-the-forest',
        title: 'Sons of The Forest',
        image: 'https://via.placeholder.com/300x150?text=Sons+of+The+Forest',
        description: 'Você foi enviado para uma ilha remota para encontrar um bilionário desaparecido, mas o que encontra é um inferno infestado de canibais.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: Intel Core i5-8400', 'Memória RAM: 12 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB', 'Espaço em Disco: 20 GB'],
        downloadLink: 'https://example.com/download/sons-of-the-forest',
        categories: ['sobrevivencia', 'coop', 'online'],
        isNew: true
    },
    {
        id: 'the-forest',
        title: 'The Forest',
        image: 'https://via.placeholder.com/300x150?text=The+Forest',
        description: 'Após um acidente de avião, você se encontra em uma floresta remota, e seu filho está desaparecido. Explore, construa e sobreviva contra uma sociedade de mutantes canibais.',
        requirements: ['Sistema Operacional: Windows 7, 8, 10 (64-bit)', 'Processador: Intel Dual-Core 2.4 GHz', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce 8800GT', 'Espaço em Disco: 5 GB'],
        downloadLink: 'https://example.com/download/the-forest',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: 'grounded',
        title: 'Grounded',
        image: 'https://via.placeholder.com/300x150?text=Grounded',
        description: 'Encolhido ao tamanho de uma formiga, você deve sobreviver nos perigos de um quintal. Construa bases, crie ferramentas e enfrente hordas de insetos hostis.',
        requirements: ['Sistema Operacional: Windows 7 (SP1) ou superior', 'Processador: Intel Core i3-3225', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 650 Ti', 'Espaço em Disco: 8 GB'],
        downloadLink: 'https://example.com/download/grounded',
        categories: ['sobrevivencia', 'coop', 'online'],
        isFeatured: true
    },
    {
        id: 'raft',
        title: 'Raft',
        image: 'https://via.placeholder.com/300x150?text=Raft',
        description: 'Preso em uma pequena jangada no meio do vasto oceano, você deve sobreviver. Colete lixo, expanda sua jangada e evite os perigos do oceano, incluindo tubarões famintos.',
        requirements: ['Sistema Operacional: Windows 7 ou superior', 'Processador: Intel Core i5 2.6GHz', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 500 series', 'Espaço em Disco: 10 GB'],
        downloadLink: 'https://example.com/download/raft',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: '7-days-to-die',
        title: '7 Days to Die',
        image: 'https://via.placeholder.com/300x150?text=7+Days+to+Die',
        description: 'Uma mistura única de RPG, tiro em primeira pessoa, terror e sobrevivência. Em um mundo pós-apocalíptico infestado de zumbis, você deve procurar recursos, construir defesas e se preparar para a horda de mortos-vivos que chega a cada sete dias.',
        requirements: ['Sistema Operacional: Windows 7 ou superior (64-bit)', 'Processador: 2.4 Ghz Dual Core CPU', 'Memória RAM: 8 GB', 'Placa de Vídeo: 2GB Dedicada', 'Espaço em Disco: 12 GB'],
        downloadLink: 'https://example.com/download/7-days-to-die',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: 'elden-ring',
        title: 'Elden Ring',
        image: 'https://via.placeholder.com/300x150?text=Elden+Ring',
        description: 'Um vasto mundo de fantasia sombria, repleto de desafios e segredos a serem descobertos. Neste RPG de ação, você pode explorar livremente as Terras Intermédias.',
        requirements: ['Sistema Operacional: Windows 10', 'Processador: Intel Core i5-8400', 'Memória RAM: 12 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB', 'Espaço em Disco: 60 GB'],
        downloadLink: 'https://example.com/download/elden-ring',
        categories: ['rpg', 'acao', 'online'],
        isNew: true
    },
];

// O restante do código para detalhes de jogo não foi alterado.
// Função para obter o parâmetro de ID da URL
function getGameIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
// Função para renderizar os detalhes do jogo
function renderGameDetails() {
    const gameId = getGameIdFromUrl();
    const game = games.find(g => g.id === gameId);
    const container = document.getElementById('game-details-content');

    if (!game) {
        container.innerHTML = '<h2 class="section-title">Jogo não encontrado.</h2><p>Verifique o link ou volte para a página inicial.</p>';
        return;
    }
    const gameHtml = `
        <div class="game-header">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-title-info">
                <h2 class="game-title">${game.title}</h2>
                <a href="${game.downloadLink}" class="download-button" target="_blank">Baixar Agora</a>
            </div>
        </div>
        <div class="game-description">
            <h3>Descrição</h3>
            <p>${game.description}</p>
        </div>
        <div class="game-requirements">
            <h3>Requisitos Mínimos</h3>
            <ul>
                ${game.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
    `;
    container.innerHTML = gameHtml;
}

// Chamar a função ao carregar a página
if (document.getElementById('game-details-content')) {
    document.addEventListener('DOMContentLoaded', renderGameDetails);
}