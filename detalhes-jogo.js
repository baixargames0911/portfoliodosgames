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
        downloadLink: 'https://drive.google.com/file/d/1h0fcT3JQBnscFlWXU-x3RAoFsEp3eN4T/view?usp=sharing',
        categories: ['acao', 'aventura']
    },
    {
        id: 'the-last-of-us-2',
        title: 'The Last of Us 2',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2531310/94b5d8b3165a6fe592e406054b08a2dd24e2f848/capsule_616x353.jpg?t=1750959180',
        description: 'Cinco anos após a perigosa jornada, Ellie e Joel se estabeleceram em Jackson, Wyoming. No entanto, um evento violento perturba essa tranquilidade.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: AMD Ryzen 7 2700X', 'Memória RAM: 16 GB', 'Placa de Vídeo: AMD Radeon RX 5800 XT', 'Espaço em Disco: 100 GB SSD'],
        downloadLink: 'https://drive.google.com/file/d/1dD3MLKq_6lvB1hJGsqLk0gW0XCmU2LDC/view?usp=sharing',
        categories: ['acao', 'aventura'],
        isFeatured: true
    },
    {
        id: 'red-dead-redemption',
        title: 'Red Dead Redemption 2',
        image: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
        description: 'Uma história épica de honra e lealdade em um dos mundos abertos mais vastos e detalhados já criados. Acompanhe Arthur Morgan e a gangue de Van der Linde.',
        requirements: ['Sistema Operacional: Windows 7 SP1 ou superior', 'Processador: Intel Core i5-2500K', 'Memória RAM: 8 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 770 2GB', 'Espaço em Disco: 150 GB'],
        downloadLink: 'https://drive.google.com/file/d/1FpjusRzpvJoTz01teYO_4p7FtGTwZC0n/view?usp=sharing',
        categories: ['acao', 'rpg'],
        isFeatured: true
    },
    {
        id: 'sons-of-the-forest',
        title: 'Sons of The Forest',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/capsule_616x353.jpg?t=1708624856',
        description: 'Você foi enviado para uma ilha remota para encontrar um bilionário desaparecido, mas o que encontra é um inferno infestado de canibais.',
        requirements: ['Sistema Operacional: Windows 10 (64-bit)', 'Processador: Intel Core i5-8400', 'Memória RAM: 12 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB', 'Espaço em Disco: 20 GB'],
        downloadLink: 'https://drive.google.com/file/d/1gXAKv6Nl1H-L6oAJ6DyRVFoRebNAukGE/view?usp=sharing',
        categories: ['sobrevivencia', 'coop', 'online'],
        
    },
    {
        id: 'the-forest',
        title: 'The Forest',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg?t=1699381053',
        description: 'Após um acidente de avião, você se encontra em uma floresta remota, e seu filho está desaparecido. Explore, construa e sobreviva contra uma sociedade de mutantes canibais.',
        requirements: ['Sistema Operacional: Windows 7, 8, 10 (64-bit)', 'Processador: Intel Dual-Core 2.4 GHz', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce 8800GT', 'Espaço em Disco: 5 GB'],
        downloadLink: 'https://drive.google.com/file/d/1plU-9AbAnPHFKDp9clJBen7aMsDjhy8e/view?usp=sharing',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: 'grounded',
        title: 'Grounded',
        image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000068827/cf0ab0f20e7f588ba732a072e34f1ef86cd5430880badf7dd134c7d547bf2d44',
        description: 'Encolhido ao tamanho de uma formiga, você deve sobreviver nos perigos de um quintal. Construa bases, crie ferramentas e enfrente hordas de insetos hostis.',
        requirements: ['Sistema Operacional: Windows 7 (SP1) ou superior', 'Processador: Intel Core i3-3225', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 650 Ti', 'Espaço em Disco: 8 GB'],
        downloadLink: 'https://drive.google.com/file/d/1CSR_RgJliaeaL34HXe_VkcMitAMjdXar/view?usp=sharing',
        categories: ['sobrevivencia', 'coop', 'online'],
        
    },
    {
        id: 'raft',
        title: 'Raft',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648800/capsule_616x353.jpg?t=1727184011',
        description: 'Preso em uma pequena jangada no meio do vasto oceano, você deve sobreviver. Colete lixo, expanda sua jangada e evite os perigos do oceano, incluindo tubarões famintos.',
        requirements: ['Sistema Operacional: Windows 7 ou superior', 'Processador: Intel Core i5 2.6GHz', 'Memória RAM: 4 GB', 'Placa de Vídeo: NVIDIA GeForce GTX 500 series', 'Espaço em Disco: 10 GB'],
        downloadLink: 'https://drive.google.com/file/d/1Q711ad6b0jsIlNDHza2yJFjp1p7jL49V/view?usp=sharing',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        id: '7-days-to-die',
        title: '7 Days to Die',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-YEivZEsVvu6Mr29wFB60POiuK3HepqUA&s',
        description: 'Uma mistura única de RPG, tiro em primeira pessoa, terror e sobrevivência. Em um mundo pós-apocalíptico infestado de zumbis, você deve procurar recursos, construir defesas e se preparar para a horda de mortos-vivos que chega a cada sete dias.',
        requirements: ['Sistema Operacional: Windows 7 ou superior (64-bit)', 'Processador: 2.4 Ghz Dual Core CPU', 'Memória RAM: 8 GB', 'Placa de Vídeo: 2GB Dedicada', 'Espaço em Disco: 12 GB'],
        downloadLink: 'https://drive.google.com/file/d/1QHuPKxWEcNupHSSapeaNdGeXWBbZZme7/view?usp=sharing',
        categories: ['sobrevivencia', 'coop', 'online']
    },
    {
        "id": "elden-ring-nightreign",
    "title": "Elden Ring Nightreign",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2622380/800a6d64a1685c303bf985f084fbf5c08ac2ae5c/capsule_616x353.jpg?t=1753977256",
    "description": "Elden Ring Nightreign é uma aventura cooperativa e independente dentro do universo de Elden Ring, focada em jogabilidade PvE (Jogador contra Ambiente) e elementos de roguelite. Junte-se a outros jogadores para enfrentar as ameaças de uma noite implacável.",
    "requirements": [
        "Sistema Operacional: Windows 10/11 (64-bit)",
        "Processador: Intel Core i5-10600 ou AMD RYZEN 5 5500",
        "Memória RAM: 12 GB",
        "Placa de Vídeo: NVIDIA GeForce GTX 1060 (3 GB) ou AMD Radeon RX 580 (4 GB)",
        "Espaço em Disco: 30 GB"
    ],
        downloadLink: 'https://drive.google.com/file/d/1plh80NPOvkVy9KjYMgBIZSrYIX7SBCtM/view?usp=sharing',
        categories: ['rpg', 'acao', 'online'],
        isNew: true
    },
    {
    "id": "peak",
    "title": "Peak",
    "image": "https://i.ytimg.com/vi/D6io5XZWBHk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAwmET6wN_UqzGzFMtGYDGz1puxg",
    "description": "Um jogo de exploração e sobrevivência em um ambiente montanhoso e hostil. Enfrente o frio, a fome e a natureza enquanto tenta alcançar o pico da montanha.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-8400",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1060 3GB",
      "Espaço em Disco: 10 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1hWpUOraAiEhwXwBFApLFvQ4tAe07DnMK/view?usp=sharing",
    "categories": [
      "sobrevivencia",
      "exploracao",
      "indies",
"online"
    ],
    "isNew": true
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
    "downloadLink": "https://drive.google.com/file/d/19FMg7NH3hBkG4PnlCSaz7eK4orFRmK6X/view?usp=sharing",
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
    "downloadLink": "https://drive.google.com/file/d/1r1hHf9ZPnTTM6zQWm9XTpUS2B8ZStqMA/view?usp=sharing",
    "categories": [
      "rpg",
      "mundo-aberto",
      "acao"
    ],
    "isNew": false
  },
  {
    "id": "assassins-creed-mirage",
    "title": "Assassin's Creed Mirage",
    "image": "https://protocoloxp.com.br/wp-content/uploads/2024/02/assassins-creed-mirage-analise-capa.webp",
    "description": "Jogue como Basim, um astucioso ladrão de rua com visões aterrorizantes em busca de respostas e justiça. Em uma homenagem aos títulos originais, viva uma aventura de ação e parkour fluído, explore uma cidade vibrante e torne-se o Mestre Assassino definitivo.",
    "requirements": [
      "Sistema Operacional: Windows 10/11 (64-bit)",
      "Processador: Intel Core i5-8400 ou AMD Ryzen 5 2600",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1060 (6 GB) ou AMD Radeon RX 570 (4 GB)",
      "Espaço em Disco: 60 GB"
    ],
    "downloadLink": "hhttps://drive.google.com/file/d/1dZCTrZ0pkDra7Ez8ECbJQrm4GS3-DM4f/view?usp=sharing",
    "categories": [
      "acao",
      "aventura",
      "stealth"
    ],
    "isNew": false
  },
  {
    "id": "fifa-23",
    "title": "FIFA 23",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1811260/capsule_616x353.jpg",
    "description": "FIFA 23 é o último jogo da série de simulação de futebol da EA Sports. Com a tecnologia HyperMotion2, crossplay entre plataformas e a inclusão das ligas femininas, explore diversos modos de jogo, como Carreira, Ultimate Team e o retorno do VOLTA Football.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5 6600k ou AMD Ryzen 5 1600",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1050 Ti ou AMD Radeon RX 570",
      "Espaço em Disco: 100 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/18A5C9zhSkcRGbZMmz3uOjfFZwx2CWaVP/view?usp=sharing",
    "categories": [
      "esportes",
      "simulacao"
    ],
    "isNew": false
  },
  {
    "id": "god-of-war-ragnarok",
    "title": "God of War Ragnarok",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1750909504",
    "description": "Nesta sequência da aclamada série God of War, Kratos e Atreus embarcam em uma jornada épica pelos Nove Reinos. Enfrentando inimigos aterrorizantes, eles terão de escolher entre a segurança deles e a dos reinos, enquanto a ameaça do Ragnarök se aproxima.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-4670K ou AMD Ryzen 3 1200",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1060 (6 GB) ou AMD RX 5500 XT (8 GB)",
      "Espaço em Disco: 190 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/16peBk5Zw_SGvnKSwo2fO4k0DSMInt6QY/view?usp=sharing",
    "categories": [
      "acao",
      "aventura",
      "rpg"
    ],
    isFeatured: true
  },
  {
    "id": "grounded-2",
    "title": "Grounded 2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2661300/c324feb96157bbab35db1b760d5f085775657526/header.jpg?t=1756203215",
    "description": "Quando você é encolhido ao tamanho de uma formiga, o que antes era familiar se torna uma fronteira selvagem e inexplorada. Atravesse grandes espaços feitos pelo homem, descubra segredos escondidos e lute para sobreviver em um mundo muito maior que o quintal de casa.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Não especificado",
      "Memória RAM: Não especificado",
      "Placa de Vídeo: Não especificado",
      "Espaço em Disco: Não especificado"
    ],
    "downloadLink": "https://drive.google.com/file/d/1KDV8if1beIhURNjDyQZT6HlZ9xl8GXi0/view?usp=sharing",
    "categories": [
      "sobrevivencia",
      "aventura",
      "cooperativo",
"online"
    ],
    "isNew": true
  },
  {
    "id": "marvels-spider-man-2",
    "title": "Marvel's Spider-Man 2",
    "image": "https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-keyart-01-en-7june24?$facebook$",
    "description": "Peter Parker e Miles Morales enfrentam um desafio definitivo enquanto buscam salvar a cidade e um ao outro da ameaça do simbionte Venom e do caçador Kraven. Explore Nova York, alterne entre os dois heróis e use novas habilidades para derrotar inimigos em combates eletrizantes.",
    "requirements": [
      "Sistema Operacional: Windows 10/11 (64-bit)",
      "Processador: Intel Core i3-8100 ou AMD Ryzen 3 3100",
      "Memória RAM: 16 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1650 ou AMD Radeon RX 5500 XT",
      "Espaço em Disco: 140 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1aga3i5LDbtxx_UPRL5tNZt9Fh6-wlgxn/view?usp=sharing",
    "categories": [
      "acao",
      "aventura"
    ],
    isFeatured: true
  },
  {
    "id": "palworld",
    "title": "Palworld",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_616x353.jpg",
    "description": "Um jogo de sobrevivência e fabricação em mundo aberto com suporte para vários jogadores. Capture criaturas fantásticas conhecidas como 'Pals', use-os para batalhas, trabalho em fazendas, construções e fábricas, ou até mesmo os use como alimento para sobreviver.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-3570K",
      "Memória RAM: 16 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 1050 (2 GB)",
      "Espaço em Disco: 40 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1dM1_Gtx_vRrios1IwngzSAh0ycVlY71G/view?usp=sharing",
    "categories": [
      "acao",
      "aventura",
      "rpg",
      "sobrevivencia",
"online"
    ],
    "isNew": true
  },
  {
    "id": "ready-or-not",
    "title": "Ready or Not",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1144200/header.jpg?t=1753984272",
    "description": "Ready or Not é um jogo de tiro tático e intenso em primeira pessoa que coloca você no papel de um policial SWAT. Lidere sua equipe em situações de alto risco e tome decisões estratégicas para resolver crises com o mínimo de baixas possível. É um jogo que valoriza a tática e a cooperação.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-4430 ou AMD FX-6300",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 960 (2 GB) ou AMD Radeon R7 370 (2 GB)",
      "Espaço em Disco: 50 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1KStRJpGGM1GZ_D702tvAInClSI9yEEG-/view?usp=sharing",
    "categories": [
      "acao",
      "tatico",
      "simulacao",
"online"
    ],
    "isNew": true
  },
  {
    "id": "uncharted-legacy-of-thieves-collection",
    "title": "Uncharted: Legacy of Thieves Collection",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydvAXpZznfpo3QmWsuDA_oy7Hijytm55Eeg&s",
    "description": "Explore as aventuras de Nathan Drake e Chloe Frazer nesta coleção que inclui Uncharted 4: A Thief's End e Uncharted: The Lost Legacy. Embarque em uma jornada por paisagens deslumbrantes, resolva enigmas e enfrente inimigos em uma experiência de ação e aventura cinematográfica.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-4430 ou AMD Ryzen 3 1200",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 960 (4 GB) ou AMD Radeon R9 290X (4 GB)",
      "Espaço em Disco: 125 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1bEwzPODQICj_8UfGMiuIGPuqh0JD1_iW/view?usp=sharing",
    "categories": [
      "acao",
      "aventura"
    ],
    "isNew": false
  },
  {
    "id": "motogp-25",
    "title": "MotoGP 25",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9zLX50-UM7RpFA0GNegRgWgagAcIMsOYHA&s",
    "description": "MotoGP 25 é o jogo oficial do Campeonato Mundial de Motovelocidade da temporada de 2025. Assuma o controle das motos, pilotos e pistas desta temporada. Sinta a adrenalina das corridas e a emoção de competir para se tornar o campeão do mundo.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Não especificado",
      "Memória RAM: Não especificado",
      "Placa de Vídeo: Não especificado",
      "Espaço em Disco: Não especificado"
    ],
    "downloadLink": "https://drive.google.com/file/d/1cn5XmajwnbOXTm00R6aIS57JOZhshDuE/view?usp=sharing",
    "categories": [
      "corrida",
      "simulacao",
      "esportes",
"online"
    ],
    "isNew": true
  },
  {
    "id": "dirt-5",
    "title": "Dirt 5",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1038250/capsule_616x353.jpg",
    "description": "Dirt 5 é uma experiência de corrida arcade off-road amplificada e divertida. Percorra mais de 70 rotas únicas em 10 locais globais, de trilhas congeladas em Nova York a caminhos de terra na Noruega. Com uma enorme variedade de carros e uma carreira estrelada, este é o jogo perfeito para quem ama corridas de rally, off-road e GT.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i3 2130 ou AMD FX 4300",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 970 ou AMD Radeon RX 480",
      "Espaço em Disco: 60 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1lpLuyDYUe9bet6K-_BKIC4cXOPDxtGeM/view?usp=sharing",
    "categories": [
      "corrida",
      "arcade",
      "esportes",
      "online"
    ],
    "isNew": false
  },
  {
    "id": "call-of-duty-black-ops-6",
    "title": "Call of Duty: Black Ops 6",
    "image": "https://substackcdn.com/image/fetch/$s_!sAtY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03c433b0-f112-4978-93a4-f939bdf8f548_1920x1080.jpeg",
    "description": "Um thriller de espionagem e ação em primeira pessoa. Ambientado durante a Guerra Fria, o jogo apresenta uma campanha emocionante, um modo multiplayer com mecânicas de movimento inovadoras e o retorno do aclamado modo Zumbis em rodadas.",
    "requirements": [
      "Sistema Operacional: Windows 10/11 (64-bit)",
      "Processador: Intel Core i5-6600 ou AMD Ryzen 5 1400",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 960 (4 GB) ou AMD Radeon RX 470 (4 GB)",
      "Espaço em Disco: 102 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1TYTYxpkg7vFFihcOrt42x7k3OoOCrcYb/view?usp=sharing",
    "categories": [
      "acao",
      "fps",
      "guerra"
    ],
    "isNew": true
  },
  {
    "id": "forza-horizon-5",
    "title": "Forza Horizon 5",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg",
    "description": "Aventura de corrida definitiva em mundo aberto! Explore as paisagens vibrantes e em constante evolução do México com centenas dos melhores carros do mundo. Encontre amigos ou adversários, crie suas próprias corridas e desfrute de um sistema de física realista e um mundo vivo e dinâmico.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit) versão 18362.0 ou superior",
      "Processador: Intel Core i5-4460 ou AMD Ryzen 3 1200",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 970 ou AMD Radeon RX 470",
      "Espaço em Disco: 110 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1nMhvip272MpRjzjkL7a9hXJeewnkG3jh/view?usp=sharing",
    "categories": [
      "corrida",
      "mundo-aberto",
      "esportes",
      "online"
    ],
    "isNew": false
  },
  {
    "id": "frog-jump",
    "title": "Frog Jump",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3448750/15591c2329e711c3a7015bd2a21e3c8c2fa19c30/capsule_616x353.jpg?t=1750960168",
    "description": "Ajude um sapo a pular entre plataformas e obstáculos para alcançar a vitória. Um jogo casual com controles simples, mas que exige reflexos e precisão. Perfeito para uma diversão rápida e desafiadora.",
    "requirements": [
      "Sistema Operacional: Windows 7 ou superior",
      "Processador: Intel ou AMD",
      "Memória RAM: 4 GB",
      "Placa de Vídeo: Não especificado",
      "Espaço em Disco: 10 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1nkkny5q5y68A7pQAbnpmLUrXtC48MBGH/view?usp=sharing",
    "categories": [
      "casual",
      "arcade",
      "acao",
            "online"
    ],
    "isNew": true
  },
  {
    "id": "days-gone",
    "title": "Days Gone",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1259420/capsule_616x353.jpg",
    "description": "Sobreviva a um mundo pós-apocalíptico como o motoqueiro Deacon St. John. Explore um vasto mundo aberto, crie e use armas, e enfrente hordas de 'Freakers' em uma história emocionante sobre esperança, perda e sobrevivência.",
    "requirements": [
      "Sistema Operacional: Windows 10 (64-bit)",
      "Processador: Intel Core i5-2500K ou AMD FX 6300",
      "Memória RAM: 8 GB",
      "Placa de Vídeo: NVIDIA GeForce GTX 780 (3 GB) ou AMD Radeon R9 290 (4 GB)",
      "Espaço em Disco: 70 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/1e5E0EFAzp4cJumPgR44OkMWJFFXuS7w9/view?usp=sharing",
    "categories": [
      "acao",
      "aventura",
      "mundo-aberto",
      "sobrevivencia"
    ],
    "isNew": false
  },
{
        "id": "ghost-of-tsushima",
        "title": "Ghost of Tsushima DIRECTOR'S CUT",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/capsule_616x353.jpg?t=1750948552",
        "description": "Em um mundo aberto, siga a jornada de Jin Sakai para se tornar um guerreiro renegado e proteger sua terra natal da invasão mongol. Esta versão inclui a expansão Iki Island e o modo multiplayer online Legends.",
        "requirements": [
            "Sistema Operacional: Windows 10 (64-bit)",
            "Processador: Intel Core i5-8600 ou AMD Ryzen 5 3600",
            "Memória RAM: 16 GB",
            "Placa de Vídeo: NVIDIA GeForce RTX 2060 ou AMD Radeon RX 5600 XT",
            "Espaço em Disco: 75 GB SSD"
        ],
        "downloadLink": "https://drive.google.com/file/d/1rKk9uTwwIKE39XsaMmQBCNvHcao_Hrgo/view?usp=sharing",
        "categories": [
            "acao",
            "aventura",
            "mundo-aberto",
            "online"
        ],
        "isNew": false
    },
    {
        "id": "horizon-forbidden-west",
        "title": "Horizon Forbidden West Complete Edition",
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ki0STHGAkIF06Q4AU8Ow4OkV.png",
        "description": "Embarque em uma aventura pós-apocalíptica na qual a heroína Aloy enfrenta máquinas colossais em um mundo futurista.",
        "requirements": [
            "Sistema Operacional: Windows 10 (64-bit)",
            "Processador: Intel Core i5-8600 ou AMD Ryzen 5 3600",
            "Memória RAM: 16 GB",
            "Placa de Vídeo: NVIDIA GeForce RTX 3060 ou AMD Radeon RX 5700",
            "Espaço em Disco: 150 GB SSD"
        ],
        "downloadLink": "https://drive.google.com/file/d/1RQziN8DTFzF4tE1WEbvCoqdDWBEFKXAb/view?usp=sharing",
        "categories": [
            "acao",
            "aventura",
            "rpg",
            "mundo-aberto"
        ],
        "isNew": false
    },
    {
        "id": "starfield",
        "title": "Starfield",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1749757928",
        "description": "Uma nova aventura de RPG espacial dos criadores de The Elder Scrolls e Fallout. Crie seu próprio personagem e explore o universo com liberdade, desvendando o maior mistério da humanidade.",
        "requirements": [
            "Sistema Operacional: Windows 10/11",
            "Processador: AMD Ryzen 5 2600X ou Intel Core i7-6800K",
            "Memória RAM: 16 GB",
            "Placa de Vídeo: AMD Radeon RX 5700 ou NVIDIA GeForce 1070 Ti",
            "Espaço em Disco: 125 GB SSD"
        ],
        "downloadLink": "https://drive.google.com/file/d/1wtoXOR0Vdvy971vDfKb2MBJYcIFAp91q/view?usp=sharing",
        "categories": [
            "rpg",
            "aventura",
            "mundo-aberto",
            "sci-fi"
        ],
        "isNew": false
    },
    {
        "id": "the-elder-scrolls-iv-oblivion",
        "title": "The Elder Scrolls IV: Oblivion",
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202504/0320/b20558f5bab67393b06907603baab2c45d24b82c0f8ea8b9.jpg",
        "description": "Um RPG de mundo aberto em um ambiente de fantasia, onde você desvenda uma conspiração para abrir os portões de Oblivion.",
        "requirements": [
            "Sistema Operacional: Windows 10 (64-bit)",
            "Processador: AMD Ryzen 5 2600X ou Intel Core i7-6800K",
            "Memória RAM: 16 GB",
            "Placa de Vídeo: AMD Radeon RX 5700 ou NVIDIA GeForce 1070 Ti",
            "Espaço em Disco: 125 GB"
        ],
        "downloadLink": "https://drive.google.com/file/d/16Q_ZMdzL_aWYtGiNzIOaH0vqD4Bk3Opv/view?usp=sharing",
        "categories": [
            "rpg",
            "aventura",
            "mundo-aberto",
            "fantasia"
        ],
        "isNew": false
    },
    {
        "id": "hogwarts-legacy",
        "title": "Hogwarts Legacy",
        "image": "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-aa80981dd7c9b3f26b12606974a76dba",
        "description": "Entre no mundo mágico de Harry Potter e explore o mundo bruxo em uma aventura de RPG de ação em mundo aberto.",
        "requirements": [
            "Sistema Operacional: Windows 10 (64-bit)",
            "Processador: Intel Core i5-6600 ou AMD Ryzen 5 1400",
            "Memória RAM: 16 GB",
            "Placa de Vídeo: NVIDIA GeForce GTX 960 ou AMD Radeon RX 470",
            "Espaço em Disco: 85 GB SSD"
        ],
        "downloadLink": "https://drive.google.com/file/d/1LruvbjIlpG_LV4npNisTH0I3QTWe5Qmg/view?usp=sharing",
        "categories": [
            "rpg",
            "aventura",
            "mundo-aberto"
        ],
        "isNew": false,
        "isFeatured": true
    },
    {
        "id": "cyberpunk-2077",
        "title": "Cyberpunk 2077",
        "image": "https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-s1-03-22-22-2560x1440-8b29e725f1ef.jpg?resize=1&w=480&h=270&quality=medium",
        "description": "RPG de ação e aventura em mundo aberto ambientado em Night City, uma megalópole futurista e perigosa. Crie seu personagem e explore uma história de poder e ambição.",
        "requirements": [
            "Sistema Operacional: Windows 10 (64-bit)",
            "Processador: Intel Core i7-6700 ou AMD Ryzen 5 1600",
            "Memória RAM: 12 GB",
            "Placa de Vídeo: NVIDIA GeForce GTX 1060 (6 GB) ou AMD Radeon RX 580 (8 GB)",
            "Espaço em Disco: 70 GB SSD"
        ],
        "downloadLink": "https://drive.google.com/file/d/1Ju0soviLfBTOeUmuKlC5DH1UK5SvtYAV/view?usp=sharing",
        "categories": [
            "rpg",
            "acao",
            "mundo-aberto",
            "sci-fi"
        ],
        "isNew": false,
        "isFeatured": true
    },
    {
    "id": "stalker-2",
    "title": "STALKER 2: Heart of Chornobyl",
    "image": "https://gaming-cdn.com/images/news/articles/9771/cover/1000x563/stalker-2-is-already-profitable-for-gsc-game-world-just-one-month-after-release-cover6762fa1a615e6.jpg",
    "description": "Mergulhe na vasta Zona de Exclusão de Chornobyl neste épico de sobrevivência em mundo aberto. Encontre mutantes perigosos, facções hostis e anomalias mortais em sua busca para descobrir a verdade.",
    "requirements": [
        "Sistema Operacional: Windows 10/11 (64-bit)",
        "Processador: AMD Ryzen 5 1600X ou Intel Core i5-7600K",
        "Memória RAM: 16 GB",
        "Placa de Vídeo: AMD Radeon RX 580 (8GB) ou NVIDIA GeForce GTX 1060 (6GB)",
        "Espaço em Disco: 150 GB SSD"
    ],
    "downloadLink": "https://drive.google.com/file/d/1ZcVkTKWk3ooeOjkDNflZhqMuOBsm5jKJ/view?usp=sharing",
    "categories": [
        "survival-horror",
        "rpg",
        "mundo-aberto"
    ],
    "isNew": true
},
{
    "id": "horizon-zero-dawn",
    "title": "Horizon Zero Dawn",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg?t=1750105817",
    "description": "Em um mundo pós-apocalíptico dominado por máquinas, jogue como a caçadora Aloy e desvende os mistérios do passado. Viaje por um mundo vasto e explore a relação entre a humanidade e o mundo mecânico.",
    "requirements": [
        "Sistema Operacional: Windows 10 (64-bit)",
        "Processador: Intel Core i5-2500K ou AMD FX 6300",
        "Memória RAM: 8 GB",
        "Placa de Vídeo: NVIDIA GeForce GTX 780 (3 GB) ou AMD Radeon R9 290 (4 GB)",
        "Espaço em Disco: 100 GB"
    ],
    "downloadLink": "https://drive.google.com/file/d/13J3Zhfp0wU6zPXmPQXrFUfJ2NEfoIz1F/view?usp=sharing",
    "categories": [
        "acao",
        "rpg",
        "mundo-aberto"
    ],
    "isNew": false
},
{
    "id": "echoes-of-the-end",
    "title": "Echoes of the End",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2821610/e4897736446953ecba7cee4213d5ed86278fa702/capsule_616x353.jpg?t=1755514909",
    "description": "Echoes of the End é um jogo de RPG de aventura narrativa em terceira pessoa. Jogue como Ryn, uma caçadora de tesouros com um mistério para desvendar em um mundo de fantasia visualmente deslumbrante.",
    "requirements": [
        "Sistema Operacional: Windows 10 (64-bit)",
        "Processador: Intel Core i5-4690K ou AMD Ryzen 5 2600",
        "Memória RAM: 16 GB",
        "Placa de Vídeo: NVIDIA GeForce GTX 1070 ou AMD Radeon RX 580",
        "Espaço em Disco: 100 GB SSD"
    ],
    "downloadLink": "https://drive.google.com/file/d/1pRPN1vvnWB6UCIsvufWv5Nu8T9FYe-JO/view?usp=sharing",
    "categories": [
        "aventura",
        "rpg",
        "narrativo"
    ],
    "isNew": true
}
]
    

// O restante do código para detalhes de jogo não foi alterado.
// Função para obter o parâmetro de ID da URL
function getGameIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function updateMetaTags(game) {
    document.title = `${game.title} - Requisitos e Download | PortfolioDosGames`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = game.description;
    } else {
        const newMeta = document.createElement('meta');
        newMeta.name = "description";
        newMeta.content = game.description;
        document.head.appendChild(newMeta);
    }
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

    updateMetaTags(game);
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