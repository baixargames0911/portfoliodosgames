// --- BANCO DE DADOS DE JOGOS (Simulando) ---
const games = [
    {
        id: 'gta-5',
        title: 'GTA 5 Enchanced',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8g9Mt2VIKMHfg25M7o05brAQ3hVpztWwtQ&s',
        description: 'Entre no mundo de Los Santos e Blaine County nesta épica história de três protagonistas que buscam sobreviver ao perigoso submundo do crime.',
        requirements: ['Sistema Operacional: Windows 7 ou superior', 'Processador: Intel Core 2 Quad Q6600', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA 9800 GT 1GB', 'Espaço em Disco: 72 GB'],
        downloadLink: 'https://drive.google.com/file/d/10joKuk_6RDm6YNOXmKe81N0jK_OVAuZb/view?usp=sharing',
        categories: ['acao'],
        isFeatured: true
    },
    {
        id: 'the-last-of-us-1',
        title: 'The Last of Us 1',
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/capsule_616x353.jpg?t=1750959031',
        description: 'Vinte anos após uma pandemia devastar a civilização, um sobrevivente endurecido é contratado para contrabandear uma garota de 14 anos.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: AMD Ryzen 5 1500X', 'Memória RAM: 16 GB', 'Placa de Vídeo: AMD Radeon RX 480 (8 GB)', 'Espaço em Disco: 100 GB SSD'],
        downloadLink: 'https://example.com/download/the-last-of-us-1',
        categories: ['acao', 'aventura']
    },
    {
        id: 'the-last-of-us-2',
        title: 'The Last of Us 2',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2531310/94b5d8b3165a6fe592e406054b08a2dd24e2f848/capsule_616x353.jpg?t=1750959180',
        description: 'Cinco anos após a perigosa jornada, Ellie e Joel se estabeleceram em Jackson, Wyoming. No entanto, um evento violento perturba essa tranquilidade.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: AMD Ryzen 7 2700X', 'Memória RAM: 16 GB', 'Placa de Vídeo: AMD Radeon RX 5800 XT', 'Espaço em Disco: 100 GB SSD'],
        downloadLink: 'https://example.com/download/the-last-of-us-2',
        categories: ['acao', 'aventura'],
        isNew: true
    },
    {
        id: 'red-dead-redemption',
        title: 'Red Dead Redemption 2',
        image: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
        description: 'Uma história épica de honra e lealdade em um dos mundos abertos mais vastos e detalhados já criados. Acompanhe Arthur Morgan e a gangue de Van der Linde.',
        requirements: ['Sistema Operacional: Windows 7 SP1 ou superior', 'Processador: Intel Core i5-2500K', 'Memória RAM: 8 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 770 2GB', 'Espaço em Disco: 150 GB'],
        downloadLink: 'https://example.com/download/red-dead-redemption-2',
        categories: ['acao', 'rpg'],
        isFeatured: true
    },
    {
        id: 'sons-of-the-forest',
        title: 'Sons of The Forest',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/capsule_616x353.jpg?t=1708624856',
        description: 'Você foi enviado para uma ilha remota para encontrar um bilionário desaparecido, mas o que encontra é um inferno infestado de canibais.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: Intel Core i5-8400', 'Memória RAM: 12 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB', 'Espaço em Disco: 20 GB'],
        downloadLink: 'https://example.com/download/sons-of-the-forest',
        categories: ['sobrevivencia', 'coop', 'online'],
        isNew: true
    },
    {
        id: 'the-forest',
        title: 'The Forest',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg?t=1699381053',
        description: 'Após um acidente de avião, você se encontra em uma floresta remota, e seu filho está desaparecido. Explore, construa e sobreviva contra uma sociedade de mutantes canibais.',
        requirements: ['Sistema Operacional: Windows 7, 8, 10 (64-bit)', 'Processador: Intel Dual-Core 2.4 GHz', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce 8800GT', 'Espaço em Disco: 5 GB'],
        downloadLink: 'https://example.com/download/the-forest',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: 'grounded',
        title: 'Grounded',
        image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000068827/cf0ab0f20e7f588ba732a072e34f1ef86cd5430880badf7dd134c7d547bf2d44',
        description: 'Encolhido ao tamanho de uma formiga, você deve sobreviver nos perigos de um quintal. Construa bases, crie ferramentas e enfrente hordas de insetos hostis.',
        requirements: ['Sistema Operacional: Windows 7 (SP1) ou superior', 'Processador: Intel Core i3-3225', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 650 Ti', 'Espaço em Disco: 8 GB'],
        downloadLink: 'https://example.com/download/grounded',
        categories: ['sobrevivencia', 'coop', 'online'],
        isFeatured: true
    },
    {
        id: 'raft',
        title: 'Raft',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648800/capsule_616x353.jpg?t=1727184011',
        description: 'Preso em uma pequena jangada no meio do vasto oceano, você deve sobreviver. Colete lixo, expanda sua jangada e evite os perigos do oceano, incluindo tubarões famintos.',
        requirements: ['Sistema Operacional: Windows 7 ou superior', 'Processador: Intel Core i5 2.6GHz', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 500 series', 'Espaço em Disco: 10 GB'],
        downloadLink: 'https://example.com/download/raft',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: '7-days-to-die',
        title: '7 Days to Die',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-YEivZEsVvu6Mr29wFB60POiuK3HepqUA&s',
        description: 'Uma mistura única de RPG, tiro em primeira pessoa, terror e sobrevivência. Em um mundo pós-apocalíptico infestado de zumbis, você deve procurar recursos, construir defesas e se preparar para a horda de mortos-vivos que chega a cada sete dias.',
        requirements: ['Sistema Operacional: Windows 7 ou superior (64-bit)', 'Processador: 2.4 Ghz Dual Core CPU', 'Memória RAM: 8 GB', 'Placa de Vídeo: 2GB Dedicada', 'Espaço em Disco: 12 GB'],
        downloadLink: 'https://example.com/download/7-days-to-die',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: 'elden-ring',
        title: 'Elden Ring',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256839312/3bcf246a6f06cc165a6afb8b15db4626efe10fcf/movie_232x130.jpg?t=1739917125',
        description: 'Um vasto mundo de fantasia sombria, repleto de desafios e segredos a serem descobertos. Neste RPG de ação, você pode explorar livremente as Terras Intermédias.',
        requirements: ['Sistema Operacional: Windows 10', 'Processador: Intel Core i5-8400', 'Memória RAM: 12 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB', 'Espaço em Disco: 60 GB'],
        downloadLink: 'https://example.com/download/elden-ring',
        categories: ['rpg', 'acao', 'online'],
        isNew: true
    },
    {
    "id": "peak",
    "title": "Peak",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1708624856",
    "description": "Um jogo de exploração e sobrevivência em um ambiente montanhoso e hostil. Enfrente o frio, a fome e a natureza enquanto tenta alcançar o pico da montanha.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-8400",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB",
      "Espaço em Disco: 10 GB"
    ],
    "downloadLink": "https://example.com/download/peak",
    "categories": [
      "sobrevivencia",
      "exploracao",
      "indie"
    ],
    "isNew": false
  },
  {
    "id": "uncharted-4",
    "title": "Uncharted 4: A Thief's End",
    "image": "https://meups.com.br/wp-content/uploads/2016/05/Uncharted-4_PS4.jpg",
    "description": "Anos após sua última aventura, Nathan Drake, um caçador de tesouros aposentado, é forçado a voltar ao mundo dos ladrões. Com a vida de seu irmão em jogo, Drake embarca em uma jornada global em busca de uma conspiração histórica por trás de um tesouro pirata.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-4460 ou AMD Ryzen 3 1200",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 960 (4 GB) ou AMD Radeon R9 290X (4 GB)",
      "Espaço em Disco: 126 GB"
    ],
    "downloadLink": "https://example.com/download/uncharted-4",
    "categories": [
      "aventura",
      "acao",
      "single-player"
    ],
    "isNew": false
  },
  {
    "id": "resident-evil-4-remake",
    "title": "Resident Evil 4 (Remake)",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/capsule_616x353.jpg?t=1716946631",
    "description": "Seis anos após o desastre biológico em Raccoon City, Leon S. Kennedy é enviado para uma vila europeia para resgatar a filha do presidente. Um jogo de survival horror reinventado com gráficos e jogabilidade modernizados.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: AMD Ryzen 3 1200 ou Intel Core i5-7500",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: AMD Radeon RX 560 com 4GB VRAM ou NVIDIA GeForce GTX 1050 Ti com 4GB VRAM",
      "Espaço em Disco: 60 GB"
    ],
    "downloadLink": "https://example.com/download/resident-evil-4-remake",
    "categories": [
      "survival-horror",
      "acao",
      "single-player"
    ],
    "isNew": false
  },
  {
    "id": "the-witcher-3-wild-hunt",
    "title": "The Witcher 3: Wild Hunt",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg?t=1718045958",
    "description": "Um RPG de mundo aberto massivo e com uma história baseada em escolhas. Jogue como Geralt de Rívia, um caçador de monstros em busca de sua filha adotiva, Ciri, enquanto ela é perseguida por uma força sobrenatural conhecida como a Caçada Selvagem.",
    "requirements": [
      "Sistema Operacional: Windows 7, 8 ou 8.1 (64-bit)",
      "Processador: Intel Core i5-2500K ou AMD Phenom II X4 940",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 660 ou AMD Radeon HD 7870",
      "Espaço em Disco: 35 GB"
    ],
    "downloadLink": "https://example.com/download/the-witcher-3",
    "categories": [
      "rpg",
      "mundo-aberto",
      "acao"
    ],
    "isNew": false
  },
  {
    "id": "cyberpunk-2077",
    "title": "Cyberpunk 2077",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg?t=1718045958",
    "description": "Um RPG de ação e aventura em mundo aberto ambientado em Night City, uma megacidade obcecada por poder, glamour e modificações corporais. Jogue como V, um mercenário fora-da-lei em busca de um implante único que é a chave para a imortalidade.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i7-6700 ou AMD Ryzen 5 1600",
      "Memória RAM: 12 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1060 6GB ou AMD Radeon RX 580 8GB",
      "Espaço em Disco: 70 GB (SSD recomendado)"
    ],
    "downloadLink": "https://example.com/download/cyberpunk-2077",
    "categories": [
      "rpg",
      "mundo-aberto",
      "acao"
    ],
    "isNew": false
  }
    
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

    // Gerar o HTML do jogo, mas com um botão de download que abre o modal
    const gameHtml = `
        <div class="game-header">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-title-info">
                <h2 class="game-title">${game.title}</h2>
                <button id="openModalButton" class="download-button">Baixar Agora</button>
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

    // Lógica para o modal
    const modal = document.getElementById('downloadModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.querySelector('.close-button');
    const realDownloadButton = document.getElementById('realDownloadButton');
    
    // Define o link de download real no botão dentro do modal
    realDownloadButton.onclick = () => {
        window.open(game.downloadLink, '_blank');
        modal.style.display = 'none'; // Fecha o modal após clicar
    };

    // Quando o usuário clica no botão "Baixar Agora", exibe o modal
    openModalButton.addEventListener('click', () => {
        modal.style.display = 'flex'; // Muda de 'none' para 'flex' para exibir
        // Esconde o botão de download real
        realDownloadButton.style.display = 'none';
        
        // Temporizador para exibir o botão de download real
        // Tempo em milissegundos (ex: 5000 = 5 segundos)
        setTimeout(() => {
            realDownloadButton.style.display = 'inline-block';
        }, 5000); // 5 segundos de espera
    });

    // Quando o usuário clica no "X", fecha o modal
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Quando o usuário clica fora do modal, fecha o modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Chamar a função ao carregar a página
if (document.getElementById('game-details-content')) {
    document.addEventListener('DOMContentLoaded', renderGameDetails);
}