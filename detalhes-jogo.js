// --- JOGOS DE EXEMPLO (Simulando um banco de dados) ---
// Adicione mais objetos para mais jogos.
const games = [
    {
        id: 'gta-5',
        title: 'GTA 5',
        image: 'https://via.placeholder.com/600x300?text=Grand+Theft+Auto+V',
        description: 'Entre no mundo de Los Santos e Blaine County nesta épica história de três protagonistas que buscam sobreviver ao perigoso submundo do crime. Prepare-se para uma aventura de ação, assaltos e missões cheias de adrenalina.',
        requirements: [
            'Sistema Operacional: Windows 7 ou superior',
            'Processador: Intel Core 2 Quad Q6600 ou AMD Phenom 9850',
            'Memória RAM: 4 GB',
            'Placa de Vídeo: NVIDIA 9800 GT 1GB ou AMD HD 4870 1GB',
            'Espaço em Disco: 72 GB'
        ],
        downloadLink: 'https://example.com/download/gta-5'
    },
    {
        id: 'the-last-of-us-1',
        title: 'The Last of Us 1',
        image: 'https://via.placeholder.com/600x300?text=The+Last+of+Us+Part+I',
        description: 'Vinte anos após uma pandemia devastar a civilização, um sobrevivente endurecido é contratado para contrabandear uma garota de 14 anos para fora de uma zona de quarentena. O que começa como um pequeno trabalho se transforma em uma jornada brutal e emocionante.',
        requirements: [
            'Sistema Operacional: Windows 10 (64-bit)',
            'Processador: AMD Ryzen 5 1500X ou Intel Core i7-4770K',
            'Memória RAM: 16 GB',
            'Placa de Vídeo: AMD Radeon RX 480 (8 GB) ou NVIDIA GeForce GTX 1050 Ti (4 GB)',
            'Espaço em Disco: 100 GB SSD'
        ],
        downloadLink: 'https://example.com/download/the-last-of-us-1'
    },
    {
        id: 'the-last-of-us-2',
        title: 'The Last of Us 2',
        image: 'https://via.placeholder.com/600x300?text=The+Last+of+Us+Part+II',
        description: 'Cinco anos após a perigosa jornada pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabeleceram em Jackson, Wyoming. A vida em uma comunidade próspera de sobreviventes lhes proporcionou paz e estabilidade. No entanto, um evento violento perturba essa tranquilidade, e Ellie embarca em uma jornada incansável para encontrar justiça.',
        requirements: [
            'Sistema Operacional: Windows 10 (64-bit)',
            'Processador: AMD Ryzen 7 2700X ou Intel Core i7-8700K',
            'Memória RAM: 16 GB',
            'Placa de Vídeo: AMD Radeon RX 5800 XT ou NVIDIA GeForce RTX 2060',
            'Espaço em Disco: 100 GB SSD'
        ],
        downloadLink: 'https://example.com/download/the-last-of-us-2'
    },
    {
        id: 'red-dead-redemption',
        title: 'Red Dead Redemption 2',
        image: 'https://via.placeholder.com/600x300?text=Red+Dead+Redemption+2',
        description: 'Uma história épica de honra e lealdade em um dos mundos abertos mais vastos e detalhados já criados. Acompanhe Arthur Morgan e a gangue de Van der Linde em uma jornada de fugas, roubos e confrontos no coração dos Estados Unidos.',
        requirements: [
            'Sistema Operacional: Windows 7 SP1 ou superior',
            'Processador: Intel Core i5-2500K ou AMD FX-6300',
            'Memória RAM: 8 GB',
            'Placa de Vídeo: NVIDIA GeForce GTX 770 2GB ou AMD Radeon R9 280 3GB',
            'Espaço em Disco: 150 GB'
        ],
        downloadLink: 'https://example.com/download/red-dead-redemption-2'
    },
    {
        id: 'sons-of-the-forest',
        title: 'Sons of The Forest',
        image: 'https://via.placeholder.com/600x300?text=Sons+of+The+Forest',
        description: 'Você foi enviado para uma ilha remota para encontrar um bilionário desaparecido, mas o que encontra é um inferno infestado de canibais. Construa, lute e sobreviva sozinho ou com amigos neste simulador de terror e sobrevivência.',
        requirements: [
            'Sistema Operacional: Windows 10 (64-bit)',
            'Processador: Intel Core i5-8400 ou AMD Ryzen 3 3300X',
            'Memória RAM: 12 GB',
            'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB ou AMD Radeon RX 570 4GB',
            'Espaço em Disco: 20 GB'
        ],
        downloadLink: 'https://example.com/download/sons-of-the-forest'
    },
    {
        id: 'the-forest',
        title: 'The Forest',
        image: 'https://via.placeholder.com/600x300?text=The+Forest',
        description: 'Após um acidente de avião, você se encontra em uma floresta remota, e seu filho está desaparecido. Explore, construa um abrigo, fabrique armas e sobreviva contra uma sociedade de mutantes canibais neste jogo de terror de sobrevivência em primeira pessoa.',
        requirements: [
            'Sistema Operacional: Windows 7, 8, 10 (64-bit)',
            'Processador: Intel Dual-Core 2.4 GHz ou similar',
            'Memória RAM: 4 GB',
            'Placa de Vídeo: NVIDIA GeForce 8800GT ou AMD Radeon HD 4700',
            'Espaço em Disco: 5 GB'
        ],
        downloadLink: 'https://example.com/download/the-forest'
    },
    {
        id: 'grounded',
        title: 'Grounded',
        image: 'https://via.placeholder.com/600x300?text=Grounded',
        description: 'Neste mundo de proporções gigantescas, a menor formiga é um predador colossal. Encolhido ao tamanho de uma formiga, você deve sobreviver nos perigos de um quintal. Construa bases, crie ferramentas e enfrente hordas de insetos hostis.',
        requirements: [
            'Sistema Operacional: Windows 7 (SP1) ou superior',
            'Processador: Intel Core i3-3225',
            'Memória RAM: 4 GB',
            'Placa de Vídeo: NVIDIA GeForce GTX 650 Ti',
            'Espaço em Disco: 8 GB'
        ],
        downloadLink: 'https://example.com/download/grounded'
    },
    {
        id: 'raft',
        title: 'Raft',
        image: 'https://via.placeholder.com/600x300?text=Raft',
        description: 'Preso em uma pequena jangada no meio do vasto oceano, você deve sobreviver. Colete lixo, expanda sua jangada e evite os perigos do oceano, incluindo tubarões famintos. Explore ilhas e mergulhe em uma aventura de sobrevivência única.',
        requirements: [
            'Sistema Operacional: Windows 7 ou superior',
            'Processador: Intel Core i5 2.6GHz ou similar',
            'Memória RAM: 4 GB',
            'Placa de Vídeo: NVIDIA GeForce GTX 500 series ou similar',
            'Espaço em Disco: 10 GB'
        ],
        downloadLink: 'https://example.com/download/raft'
    },
    {
        id: '7-days-to-die',
        title: '7 Days to Die',
        image: 'https://via.placeholder.com/600x300?text=7+Days+to+Die',
        description: 'Uma mistura única de RPG, tiro em primeira pessoa, terror e sobrevivência. Em um mundo pós-apocalíptico infestado de zumbis, você deve procurar recursos, construir defesas e se preparar para a horda de mortos-vivos que chega a cada sete dias.',
        requirements: [
            'Sistema Operacional: Windows 7 ou superior (64-bit)',
            'Processador: 2.4 Ghz Dual Core CPU',
            'Memória RAM: 8 GB',
            'Placa de Vídeo: 2GB Dedicada',
            'Espaço em Disco: 12 GB'
        ],
        downloadLink: 'https://example.com/download/7-days-to-die'
    },
    {
        id: 'elden-ring',
        title: 'Elden Ring',
        image: 'https://via.placeholder.com/600x300?text=Elden+Ring',
        description: 'Um vasto mundo de fantasia sombria, repleto de desafios e segredos a serem descobertos. Neste RPG de ação, você pode explorar livremente as Terras Intermédias e enfrentar inimigos lendários, à medida que desvenda o mistério por trás do Anel Prístino.',
        requirements: [
            'Sistema Operacional: Windows 10',
            'Processador: Intel Core i5-8400 ou AMD Ryzen 3 3300X',
            'Memória RAM: 12 GB',
            'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB ou AMD Radeon RX 580 4GB',
            'Espaço em Disco: 60 GB'
        ],
        downloadLink: 'https://example.com/download/elden-ring'
    },
];

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

    // Criar o HTML para exibir os detalhes do jogo
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

    // Inserir o HTML no container
    container.innerHTML = gameHtml;
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', renderGameDetails);