// Banco com 160 perguntas sobre veterinária, fazenda e rodeio
const allQuestions = [
    // --- Bovina / Ruminantes / Zoonoses ---
    {
        question: "Woody precisa saber: Qual é o tempo de gestação médio de uma égua (como o Bala no Alvo)?",
        answers: [
            { text: "9 meses", correct: false },
            { text: "11 meses", correct: true },
            { text: "5 meses", correct: false },
            { text: "14 meses", correct: false }
        ]
    },
    {
        question: "Jessie está cuidando das vacas. Quantos compartimentos tem o estômago de um animal ruminante?",
        answers: [
            { text: "Apenas 1", correct: false },
            { text: "3 compartimentos", correct: false },
            { text: "4 compartimentos", correct: true },
            { text: "2 compartimentos", correct: false }
        ]
    },
    {
        question: "Qual dos seguintes compartimentos do estômago do boi é conhecido como 'folhoso'?",
        answers: [
            { text: "Rúmen", correct: false },
            { text: "Reticulo", correct: false },
            { text: "Omaso", correct: true },
            { text: "Abomaso", correct: false }
        ]
    },
    {
        question: "Qual é o estômago verdadeiro (gástrico/químico) dos ruminantes?",
        answers: [
            { text: "Abomaso", correct: true },
            { text: "Rúmen", correct: false },
            { text: "Omaso", correct: false },
            { text: "Retículo", correct: false }
        ]
    },
    {
        question: "Um cavalo na fazenda está com febre. Qual a temperatura corporal considerada normal para um equino adulto?",
        answers: [
            { text: "37,5°C a 38,5°C", correct: true },
            { text: "35,0°C a 36,0°C", correct: false },
            { text: "39,5°C a 40,5°C", correct: false },
            { text: "41,0°C a 42,0°C", correct: false }
        ]
    },
    {
        question: "A Jessie avistou um animal que NÃO é ruminante na fazenda vizinha. Qual destes NÃO rumina?",
        answers: [
            { text: "Ovelha", correct: false },
            { text: "Cabra", correct: false },
            { text: "Vaca", correct: false },
            { text: "Cavalo", correct: true }
        ]
    },
    {
        question: "Qual zoonose pode ser transmitida aos humanos através do consumo de leite cru/não pasteurizado?",
        answers: [
            { text: "Brucelose", correct: true },
            { text: "Cinomose", correct: false },
            { text: "Parvovirose", correct: false },
            { text: "Gripe aviária", correct: false }
        ]
    },
    {
        question: "Qual vacina é obrigatória para prevenção da paralisia e raiva nos herbívoros da fazenda?",
        answers: [
            { text: "Vacina Antirrábica", correct: true },
            { text: "Vacina V8", correct: false },
            { text: "Vacina de Hepatite", correct: false },
            { text: "Vacina de Leptospirose Canina", correct: false }
        ]
    },
    {
        question: "A Febre Aftosa afeta principalmente quais tipos de animais?",
        answers: [
            { text: "Animais de casco fendido (bovinos, suínos, ovinos)", correct: true },
            { text: "Apenas equinos e mulas", correct: false },
            { text: "Apenas aves e répteis", correct: false },
            { text: "Cães e gatos", correct: false }
        ]
    },
    {
        question: "O que significa a sigla 'IATP' ou 'IATF' na reprodução bovina?",
        answers: [
            { text: "Inseminação Artificial em Tempo Fixo", correct: true },
            { text: "Infecção Aguda por Toxinas do Pasto", correct: false },
            { text: "Inspeção de Alimentos de Origem Terrestre", correct: false },
            { text: "Índice Anual de Transferência de Prenhez", correct: false }
        ]
    },
    {
        question: "Qual é o tempo médio de gestação de uma vaca?",
        answers: [
            { text: "Aproximadamente 9 meses (280 a 290 dias)", correct: true },
            { text: "Aproximadamente 5 meses", correct: false },
            { text: "Aproximadamente 12 meses", correct: false },
            { text: "Aproximadamente 3 meses", correct: false }
        ]
    },
    {
        question: "Como é chamada a primeira caca/leite rico em anticorpos que o bezerro deve mamar logo após nascer?",
        answers: [
            { text: "Colostro", correct: true },
            { text: "Soro de leite", correct: false },
            { text: "Coalhada", correct: false },
            { text: "Suplemento proteico", correct: false }
        ]
    },
    {
        question: "O mastite bovina é uma inflamação em qual órgão da vaca?",
        answers: [
            { text: "Glândula mamária (úbere)", correct: true },
            { text: "Cascos", correct: false },
            { text: "Pulmões", correct: false },
            { text: "Fígado", correct: false }
        ]
    },
    {
        question: "Qual o nome da doença provocada pela falta de mineral magnésio nos pastos, que afeta o sistema nervoso das vacas?",
        answers: [
            { text: "Tetania das pastagens", correct: true },
            { text: "Anemia infecciosa", correct: false },
            { text: "Laminite", correct: false },
            { text: "Tétano", correct: false }
        ]
    },
    {
        question: "Como chamamos a técnica de identificação bovina com brincos de código de barras ou chips?",
        answers: [
            { text: "Rastreabilidade animal", correct: true },
            { text: "Descorna simplificada", correct: false },
            { text: "Pesagem eletrônica", correct: false },
            { text: "Vermifugação visual", correct: false }
        ]
    },

    // --- Rodeio em Touros ---
    {
        question: "No rodeio em touros, quantos segundos o peão precisa permanecer montado no animal para pontuar?",
        answers: [
            { text: "8 segundos", correct: true },
            { text: "10 segundos", correct: false },
            { text: "6 segundos", correct: false },
            { text: "12 segundos", correct: false }
        ]
    },
    {
        question: "Qual é a pontuação máxima possível em uma montaria perfeita de rodeio (somando a nota do peão e do animal)?",
        answers: [
            { text: "100 pontos", correct: true },
            { text: "80 pontos", correct: false },
            { text: "50 pontos", correct: false },
            { text: "120 pontos", correct: false }
        ]
    },
    {
        question: "No rodeio em touros, qual equipamento o peão segura firme com apenas uma das mãos?",
        answers: [
            { text: "Corda americana", correct: true },
            { text: "Rédea de couro de cobra", correct: false },
            { text: "Peitilho de sisal", correct: false },
            { text: "Cabresto duplo", correct: false }
        ]
    },
    {
        question: "O que acontece se o peão tocar no touro ou em si mesmo com a 'mão livre' durante a montaria?",
        answers: [
            { text: "É desqualificado (nota zero)", correct: true },
            { text: "Perde apenas 5 pontos", correct: false },
            { text: "Ganha 10 segundos extra", correct: false },
            { text: "Nada, é permitido tocar", correct: false }
        ]
    },
    {
        question: "Qual a função dos 'Salva-Vidas' (ou anjos do rodeio) dentro da arena?",
        answers: [
            { text: "Distrair o touro para proteger o peão após a queda", correct: true },
            { text: "Segurar o touro pelo chifre", correct: false },
            { text: "Dar a nota dos juízes", correct: false },
            { text: "Abrir o portão da brete", correct: false }
        ]
    },
    {
        question: "O que é o 'Sedém' utilizado nos touros e cavalos de rodeio?",
        answers: [
            { text: "Uma fita de lã macia que estimula o animal a pular por reflexo", correct: true },
            { text: "Um ferro pontiagudo de machucar", correct: false },
            { text: "Um freio de ferro colocado na boca", correct: false },
            { text: "Um cinto de couro para prender a cela", correct: false }
        ]
    },
    {
        question: "Qual é a raça bovina famosa pela força e capacidade de pulo nas arenas brasileiras e norte-americanas?",
        answers: [
            { text: "Raças cruzadas (Zebu x Continental)", correct: true },
            { text: "Holandês puro de leite", correct: false },
            { text: "Gir Leiteiro", correct: false },
            { text: "Jersey", correct: false }
        ]
    },
    {
        question: "Como é chamado o compartimento de metal de onde o touro e o peão saem para a arena?",
        answers: [
            { text: "Brete", correct: true },
            { text: "Tronco", correct: false },
            { text: "Redondel", correct: false },
            { text: "Gaiola", correct: false }
        ]
    },
    {
        question: "Quem avalia o desempenho tanto do touro quanto do peão durante o rodeio?",
        answers: [
            { text: "Os juízes do rodeio", correct: true },
            { text: "O locutor", correct: false },
            { text: "O público da arquibancada", correct: false },
            { text: "O laçador de pista", correct: false }
        ]
    },
    {
        question: "Em uma montaria em touros, quantos pontos normalmente valem a atuação do ANIMAL?",
        answers: [
            { text: "Até 50 pontos", correct: true },
            { text: "Até 25 pontos", correct: false },
            { text: "Até 100 pontos", correct: false },
            { text: "Até 10 pontos", correct: false }
        ]
    },

    // --- Rodeio em Cutiano (Estilo Brasileiro) ---
    {
        question: "O que caracteriza a modalidade de rodeio em 'Cutiano'?",
        answers: [
            { text: "É uma modalidade genuinamente brasileira de montaria em cavalos", correct: true },
            { text: "É a montaria em touros sem corda", correct: false },
            { text: "É uma prova de laço com dois cavaleiros", correct: false },
            { text: "É uma corrida de velocidade ao redor de tambores", correct: false }
        ]
    },
    {
        question: "Qual o equipamento de apoio para as mãos utilizado na modalidade Cutiano?",
        answers: [
            { text: "Duas rédeas presas ao peitilho", correct: true },
            { text: "Uma corda americana com alça rígida", correct: false },
            { text: "Uma cela de aba larga sem rédea", correct: false },
            { text: "Um tirante de couro preso na garupa", correct: false }
        ]
    },
    {
        question: "No Cutiano, o que significa a regra de 'Marcar o Cavalo' na saída do brete?",
        answers: [
            { text: "Tocar as esporas no pescoço/paleta do cavalo antes de tocar o chão", correct: true },
            { text: "Fazer uma marca com tinta na garupa do cavalo", correct: false },
            { text: "Gritar bem alto ao abrir a porteira", correct: false },
            { text: "Segurar na crina com as duas mãos", correct: false }
        ]
    },
    {
        question: "Em qual tipo de arreio o peão se senta na modalidade de Cutiano?",
        answers: [
            { text: "Arreio cutiano tradicional", correct: true },
            { text: "Sela americana estilo Bareback", correct: false },
            { text: "Sela australiana de aba alta", correct: false },
            { text: "Sela de adestramento clássico", correct: false }
        ]
    },
    {
        question: "Qual movimento de pernas é avaliado pelos juízes na montaria em Cutiano?",
        answers: [
            { text: "O ritmo constante de esporada (do paleto à garupa)", correct: true },
            { text: "Manter as pernas totalmente imóveis", correct: false },
            { text: "Cruzar as pernas no peito do cavalo", correct: false },
            { text: "Chutar apenas para frente", correct: false }
        ]
    },
    {
        question: "Qual o papel do 'Madrinhador' no rodeio em cavalos (Cutiano e Sela Americana)?",
        answers: [
            { text: "Resgatar o peão do cavalo após o apito dos 8 segundos", correct: true },
            { text: "Narrar as montarias com o locutor", correct: false },
            { text: "Ajustar o sedém dentro do brete", correct: false },
            { text: "Cuidar do tratamento veterinário pós-prova", correct: false }
        ]
    },
    {
        question: "As esporas utilizadas nas montarias de rodeio devem obrigatoriamente ser:",
        answers: [
            { text: "Sem pontas afiadas (rosetas lisas ou travadas)", correct: true },
            { text: "Pontiagudas para perfurar a pele do animal", correct: false },
            { text: "Feitas de plástico flexível", correct: false },
            { text: "Fixadas diretamente nos joelhos do peão", correct: false }
        ]
    },
    {
        question: "Qual cidade paulista é considerada a Capital do Rodeio e recebe a maior festa do peão do Brasil?",
        answers: [
            { text: "Barretos", correct: true },
            { text: "Americana", correct: false },
            { text: "Jaguariúna", correct: false },
            { text: "Sorocaba", correct: false }
        ]
    },

    // --- Equinos / Cavalos / Mulas ---
    {
        question: "Como é chamado o cruzamento entre um jumento e uma égua?",
        answers: [
            { text: "Mula (fêmea) ou Burro (macho)", correct: true },
            { text: "Pônei", correct: false },
            { text: "Bardo", correct: false },
            { text: "Cavalo Marchador", correct: false }
        ]
    },
    {
        question: "Burros e mulas são animais férteis (capazes de se reproduzir normalmente)?",
        answers: [
            { text: "Não, na maioria esmagadora são estéreis", correct: true },
            { text: "Sim, reproduzem como qualquer cavalo", correct: false },
            { text: "Apenas se alimentados com ração especial", correct: false },
            { text: "Apenas as fêmeas com cavalos puros", correct: false }
        ]
    },
    {
        question: "O que é a 'Cólica Equina', uma das principais emergências veterinárias nos cavalos?",
        answers: [
            { text: "Dor abdominal aguda provocada por problemas gastrointestinais", correct: true },
            { text: "Uma infecção nos olhos provocada por moscas", correct: false },
            { text: "Uma lesão muscular na pata traseira", correct: false },
            { text: "Inflamação no casco causada por ferradura errada", correct: false }
        ]
    },
    {
        question: "Qual estrutura do casco do cavalo funciona como um 'coração periférico' ajudando na circulação?",
        answers: [
            { text: "Tilha ou Ranilha", correct: true },
            { text: "Muralha", correct: false },
            { text: "Sola", correct: false },
            { text: "Corona", correct: false }
        ]
    },
    {
        question: "A doença inflamatória extremamente grave que afeta as lâminas do casco dos cavalos chama-se:",
        answers: [
            { text: "Laminite", correct: true },
            { text: "Garatilho", correct: false },
            { text: "Garrotilho", correct: false },
            { text: "Anemia Falciforme", correct: false }
        ]
    },
    {
        question: "De quanto em quanto tempo, em média, deve-se rebarbar ou refazer o casqueamento e ferratagem de um cavalo?",
        answers: [
            { text: "A cada 45 a 60 dias", correct: true },
            { text: "A cada 10 dias", correct: false },
            { text: "Uma vez por ano", correct: false },
            { text: "Apenas quando a ferradura quebrar", correct: false }
        ]
    },
    {
        question: "Qual o nome do hábito nocivo em que o cavalo morde a madeira e engole ar?",
        answers: [
            { text: "Aerofagia (ou 'aerofágico')", correct: true },
            { text: "Coprofagia", correct: false },
            { text: "Ruminação reversa", correct: false },
            { text: "Bruxismo equino", correct: false }
        ]
    },
    {
        question: "A Anemia Infecciosa Equina (AIE) é uma doença grave transmitida principalmente por:",
        answers: [
            { text: "Picada de moscas grandes (mutucas) e agulhas contaminadas", correct: true },
            { text: "Água gelada no inverno", correct: false },
            { text: "Ração de milho mofada", correct: false },
            { text: "Poeira da arena de rodeio", correct: false }
        ]
    },
    {
        question: "Qual a raça de cavalo mais famosa no mundo pelas corridas de curta distância e agilidade nas provas de rodeio?",
        answers: [
            { text: "Quarto de Milha", correct: true },
            { text: "Mangalarga Marchador", correct: false },
            { text: "Puro Sangue Inglês", correct: false },
            { text: "Crioulo", correct: false }
        ]
    },
    {
        question: "A raça de cavalo símbolo do Rio Grande do Sul e do trabalho de campo no Pampa é:",
        answers: [
            { text: "Cavalo Crioulo", correct: true },
            { text: "Cavalo Árabe", correct: false },
            { text: "Appaloosa", correct: false },
            { text: "Friesian", correct: false }
        ]
    },

    // --- Ovinos e Caprinos (Ovelhas e Cabras) ---
    {
        question: "Qual é a principal diferença visual entre a cauda de uma ovelha e a de uma cabra?",
        answers: [
            { text: "A cabra mantém a cauda para cima; a ovelha para baixo", correct: true },
            { text: "A ovelha não tem cauda de nascimento", correct: false },
            { text: "A cabra tem cauda de penas", correct: false },
            { text: "Não há diferença visual", correct: false }
        ]
    },
    {
        question: "O processo de retirada da lã da ovelha é chamado de:",
        answers: [
            { text: "Tosa ou Esquila", correct: true },
            { text: "Descorna", correct: false },
            { text: "Depilação caprina", correct: false },
            { text: "Muda estacional", correct: false }
        ]
    },
    {
        question: "Qual parasita interno (verme) é o maior inimigo da criação de ovelhas e causa grave anemia?",
        answers: [
            { text: "Haemonchus contortus", correct: true },
            { text: "Tênia do boi", correct: false },
            { text: "Lembriga canina", correct: false },
            { text: "Bicho geográfico", correct: false }
        ]
    },
    {
        question: "O método 'FAMACHA' usado em ovelhas serve para avaliar o quê?",
        answers: [
            { text: "O grau de anemia olhando a mucosa do olho do animal", correct: true },
            { text: "A quantidade de leite produzida", correct: false },
            { text: "O peso do capricho da lã", correct: false },
            { text: "A idade dos dentes de leite", correct: false }
        ]
    },
    {
        question: "Qual o período de gestação médio de uma ovelha ou cabra?",
        answers: [
            { text: "Cerca de 5 meses (150 dias)", correct: true },
            { text: "Cerca de 9 meses", correct: false },
            { text: "Cerca de 2 meses", correct: false },
            { text: "Cerca de 11 meses", correct: false }
        ]
    },

    // --- Suínos (Porcos) ---
    {
        question: "Porcos não possuem glândulas sudoríparas eficientes. Como eles se resfriam no calor?",
        answers: [
            { text: "Lama, água ou ambientes climatizados", correct: true },
            { text: "Scolando as orelhas rapidamente", correct: false },
            { text: "Suando pelo nariz", correct: false },
            { text: "Correndo no vento", correct: false }
        ]
    },
    {
        question: "Qual o tempo médio de gestação de uma porca (regra dos 3)?",
        answers: [
            { text: "3 meses, 3 semanas e 3 dias (114 dias)", correct: true },
            { text: "3 meses exatos", correct: false },
            { text: "6 meses e 3 dias", correct: false },
            { text: "30 dias exatos", correct: false }
        ]
    },
    {
        question: "O que é a 'Peste Suína Africana'?",
        answers: [
            { text: "Uma doença viral grave altamente contagiosa que afeta porcos", correct: true },
            { text: "Uma picada de inseto sem gravidade", correct: false },
            { text: "Uma alergia a ração de milho", correct: false },
            { text: "Uma micose de pele comum", correct: false }
        ]
    },

    // --- Aves de Capoeira / Galinhas ---
    {
        question: "Quanto tempo dura a incubação (choca) de um ovo de galinha até nascer o pintainho?",
        answers: [
            { text: "21 dias", correct: true },
            { text: "30 dias", correct: false },
            { text: "14 dias", correct: false },
            { text: "40 dias", correct: false }
        ]
    },
    {
        question: "Qual órgão das aves serve para triturar os alimentos duros (substituindo os dentes)?",
        answers: [
            { text: "Moela", correct: true },
            { text: "Papo", correct: false },
            { text: "Proventrículo", correct: false },
            { text: "Cloaca", correct: false }
        ]
    },
    {
        question: "O 'papo' das aves tem qual função principal?",
        answers: [
            { text: "Armazenar e amolecer o alimento ingerido", correct: true },
            { text: "Filtrar a água consumida", correct: false },
            { text: "Produzir a casca do ovo", correct: false },
            { text: "Respirar em altas altitudes", correct: false }
        ]
    },
    {
        question: "Onde se formam a clara e a casca do ovo nas galinhas?",
        answers: [
            { text: "No Oviduto", correct: true },
            { text: "Na Moela", correct: false },
            { text: "No Fígado", correct: false },
            { text: "No Estômago Químico", correct: false }
        ]
    },
    {
        question: "A doença de Newcastle é uma zoonose/virose que afeta qual grupo de animais?",
        answers: [
            { text: "Aves", correct: true },
            { text: "Bovinos", correct: false },
            { text: "Peixes", correct: false },
            { text: "Felinos", correct: false }
        ]
    },

    // --- Cães e Gatos da Fazenda ---
    {
        question: "Qual a função histórica do cão da raça 'Bordie Collie' na fazenda?",
        answers: [
            { text: "Pastoreio de ovelhas e gado", correct: true },
            { text: "Caça de javalis de grande porte", correct: false },
            { text: "Puxar carroças pesadas", correct: false },
            { text: "Proteger o cocho contra pássaros", correct: false }
        ]
    },
    {
        question: "Qual doença viral gravíssima afeta cães e pode ser evitada com a vacina V8/V10?",
        answers: [
            { text: "Cinomose", correct: true },
            { text: "Aftosa", correct: false },
            { text: "Anemia Infecciosa", correct: false },
            { text: "Garrete", correct: false }
        ]
    },
    {
        question: "Por que os gatos da fazenda ajudam na saúde preventiva dos celeiros?",
        answers: [
            { text: "Controle natural de roedores (ratos) que transmitem leptospirose", correct: true },
            { text: "Eles limpam o poeirão do milho", correct: false },
            { text: "Avisam sobre tempestades com miados", correct: false },
            { text: "Não têm utilidade prática", correct: false }
        ]
    },
    {
        question: "Gatos são carnívoros estritos. Qual aminoácido essencial NUNCA pode faltar em sua dieta?",
        answers: [
            { text: "Taurina", correct: true },
            { text: "Vitamina C sintética", correct: false },
            { text: "Amido purificado", correct: false },
            { text: "Lactose pura", correct: false }
        ]
    },
    {
        question: "Qual parasiticida previne o Bicho do Coração (Dirofilariose) em cães de fazenda?",
        answers: [
            { text: "Ivermectina / Vermífugos preventivos específicos", correct: true },
            { text: "Soro fisiológico", correct: false },
            { text: "Pomada de zinco", correct: false },
            { text: "Shampoo neutro", correct: false }
        ]
    },

    // --- Outras Provas de Rodeio e Esportes Equestres ---
    {
        question: "Na prova dos 'Três Tambores', qual o objetivo principal da cavaleira/cavaleiro?",
        answers: [
            { text: "Contornar 3 tambores no menor tempo possível sem derrubá-los", correct: true },
            { text: "Derrubar todos os tambores no menor tempo", correct: false },
            { text: "Ficar 8 segundos equilibrado em cima do tambor", correct: false },
            { text: "Laçar o tambor à distância", correct: false }
        ]
    },
    {
        question: "Na prova dos Três Tambores, o que acontece se o competidor derrubar um tambor?",
        answers: [
            { text: "Recebe uma penalidade de 5 segundos no tempo final", correct: true },
            { text: "É desqualificado imediatamente", correct: false },
            { text: "Ganha 2 segundos de bônus", correct: false },
            { text: "Precisa descer do cavalo e levantar o tambor", correct: false }
        ]
    },
    {
        question: "Na prova de 'Team Roping' (Laço em Dupla), quais são as duas posições dos laçadores?",
        answers: [
            { text: "Cabeceiro (laça a cabeça) e Pezeiro (laça os pés)", correct: true },
            { text: "Ressaltador e Atacante", correct: false },
            { text: "Guarda e Batedor", correct: false },
            { text: "Piloto e Navegador", correct: false }
        ]
    },
    {
        question: "O que é a prova do 'Bulldogging' (ou Steer Wrestling)?",
        answers: [
            { text: "O peão salta do cavalo em movimento e imobiliza o novilho pelas aspas", correct: true },
            { text: "Uma corrida de cães da raça Bulldog na arena", correct: false },
            { text: "Laçar um boi pela cauda usando duas cordas", correct: false },
            { text: "Montar em um boi bravo sem segurar com as mãos", correct: false }
        ]
    },
    {
        question: "O esporte 'Vaquejada', muito popular no Nordeste brasileiro, consiste em:",
        answers: [
            { text: "Dois vaqueiros emparelharem o boi a cavalo e derrubá-lo na faixa apropriada", correct: true },
            { text: "Montar em cavalos sem sela por 10 segundos", correct: false },
            { text: "Saltar obstáculos de madeira com touros", correct: false },
            { text: "Corrida de mulas em linha reta", correct: false }
        ]
    },

    // --- Mais Saúde Animal e Práticas de Fazenda ---
    {
        question: "Qual o órgão responsável pela filtração do sangue e produção de urina nos animais?",
        answers: [
            { text: "Rins", correct: true },
            { text: "Fígado", correct: false },
            { text: "Pâncreas", correct: false },
            { text: "Baço", correct: false }
        ]
    },
    {
        question: "Qual a função do sal mineral no cocho para o gado de corte e leite?",
        answers: [
            { text: "Suprir deficiências minerais que o capim sozinho não consegue dar", correct: true },
            { text: "Apenas dar sede para beberem mais água", correct: false },
            { text: "Substituir a necessidade de vacinação", correct: false },
            { text: "Servir de pesticida contra moscas", correct: false }
        ]
    },
    {
        question: "A insolação e o estresse térmico em vacas holandesas reduzem drasticamente o quê?",
        answers: [
            { text: "A produção de leite", correct: true },
            { text: "A quantidade de ossos no corpo", correct: false },
            { text: "A cor dos olhos do animal", correct: false },
            { text: "A velocidade de crescimento dos cascos", correct: false }
        ]
    },
    {
        question: "Como se chama a técnica de corte das pontas dos chifres dos bezerros para evitar ferimentos no rebanho?",
        answers: [
            { text: "Descorna", correct: true },
            { text: "Casqueamento", correct: false },
            { text: "Tosa de cernelha", correct: false },
            { text: "Castração", correct: false }
        ]
    },
    {
        question: "Qual o principal sintoma do 'Tétano' em cavalos que não foram vacinados?",
        answers: [
            { text: "Rigidez muscular acentuada ('posição de cavalete')", correct: true },
            { text: "Queda de pelos na cauda", correct: false },
            { text: "Espirros em série", correct: false },
            { text: "Aumento exagerado de apetite", correct: false }
        ]
    },
    {
        question: "A babesiose e anaplasmose bovina (conhecidas como Tristeza Parasitária Bovina) são transmitidas por:",
        answers: [
            { text: "Carrapatos e moscas hematófagas", correct: true },
            { text: "Poeira de curral", correct: false },
            { text: "Ração industrial mofada", correct: false },
            { text: "Contato com répteis", correct: false }
        ]
    },
    {
        question: "O que é o 'Pastejo Rotacionado' na fazenda?",
        answers: [
            { text: "Dividir o pasto em piquetes e alternar o gado para a grama descansar", correct: true },
            { text: "Fazer as vacas andarem em círculos para exercitar", correct: false },
            { text: "Alimentar o gado apenas durante a noite", correct: false },
            { text: "Mudar a ração todos os dias da semana", correct: false }
        ]
    },

    // --- Perguntas Adicionais para Completar o Banco (100 a 160) ---
    {
        question: "Qual é a temperatura corporal média considerada normal para uma vaca adulta?",
        answers: [
            { text: "38,5°C a 39,2°C", correct: true },
            { text: "35,0°C a 36,0°C", correct: false },
            { text: "41,5°C a 42,5°C", correct: false },
            { text: "32,0°C a 34,0°C", correct: false }
        ]
    },
    {
        question: "A doença do 'Timpanismo' em bovinos é caracterizada por:",
        answers: [
            { text: "Acúmulo excessivo de gases no rúmen causando estufamento", correct: true },
            { text: "Infecção bacteriana nos ouvidos do boi", correct: false },
            { text: "Cegueira temporária por sol forte", correct: false },
            { text: "Inflamação muscular na garupa", correct: false }
        ]
    },
    {
        question: "O vestuário tradicional do peão de Cutiano inclui a 'chapeira' ou 'perneira' de couro para:",
        answers: [
            { text: "Proteger as pernas do atrito intenso com o cavalo e arreio", correct: true },
            { text: "Manter as pernas aquecidas no verão", correct: false },
            { text: "Pesada para ajudar a cair mais rápido", correct: false },
            { text: "Apenas decoração estética", correct: false }
        ]
    },
    {
        question: "No rodeio em touros, a corda americana possui um peso preso na parte inferior. Qual a função desse peso?",
        answers: [
            { text: "Fazer a corda cair do touro assim que o peão solta a mão", correct: true },
            { text: "Machucar o dorso do touro durante o pulo", correct: false },
            { text: "Aumentar o tempo de montaria", correct: false },
            { text: "Equilibrar a postura do peão", correct: false }
        ]
    },
    {
        question: "O 'Slinky' é um cão de qual raça no filme Toy Story?",
        answers: [
            { text: "Dachshund (Salsicha)", correct: true },
            { text: "Basset Hound", correct: false },
            { text: "Poodle", correct: false },
            { text: "Pastor Alemão", correct: false }
        ]
    },
    {
        question: "Qual o termo veterinário usado para o parto das éguas?",
        answers: [
            { text: "Parição ou Parição equina", correct: true },
            { text: "Ovospostura", correct: false },
            { text: "Eclosão", correct: false },
            { text: "Lactação imediata", correct: false }
        ]
    },
    {
        question: "Animais 'Monogástricos' são aqueles que possuem:",
        answers: [
            { text: "Apenas um estômago simples (como cavalos, porcos e cães)", correct: true },
            { text: "Quatro estômagos complexos", correct: false },
            { text: "Estômago duplo com moela", correct: false },
            { text: "Ausência total de estômago", correct: false }
        ]
    },
    {
        question: "Qual é o nome da técnica de reprodução assistida onde se colhem embriões de uma fêmea doadora e implantam em 'receptoras'?",
        answers: [
            { text: "Transferência de Embriões (TE)", correct: true },
            { text: "Clonagem simples por vacina", correct: false },
            { text: "Castração seletiva", correct: false },
            { text: "Inseminação Natural Direta", correct: false }
        ]
    },
    {
        question: "Qual é o vetor responsável por transmitir o 'Carbunculo Sintomático' (Manqueira) aos bovinos?",
        answers: [
            { text: "Bactérias do gênero Clostridium presentes no solo", correct: true },
            { text: "Vírus da gripe de pombos", correct: false },
            { text: "Mordida de cães contaminados", correct: false },
            { text: "Água salobra de lagoa", correct: false }
        ]
    },
    {
        question: "O peito de couro decorado usado em cavalos no rodeio para prender a cela/arreio chama-se:",
        answers: [
            { text: "Peitilho", correct: true },
            { text: "Maneia", correct: false },
            { text: "Ligo", correct: false },
            { text: "Cabeçada", correct: false }
        ]
    },
    {
        question: "No rodeio profissional, quantos juízes normalmente pontuam cada montaria?",
        answers: [
            { text: "2 a 4 juízes", correct: true },
            { text: "10 juízes", correct: false },
            { text: "Apenas 1 juiz", correct: false },
            { text: "Nenhum, o público decide no aplauso", correct: false }
        ]
    },
    {
        question: "A doença 'Garranchor/Garrotilho' que afeta o sistema respiratório de potros é causada por:",
        answers: [
            { text: "Uma bactéria (Streptococcus equi)", correct: true },
            { text: "Picada de cobra cascavel", correct: false },
            { text: "Falta de exercício", correct: false },
            { text: "Uso de ferradura de ferro", correct: false }
        ]
    },
    {
        question: "Como se chama o dente canino grande e afiado nos porcos machos (varões)?",
        answers: [
            { text: "Presa ou Defesa", correct: true },
            { text: "Dente de leite", correct: false },
            { text: "Molar de atrito", correct: false },
            { text: "Incisivo superior", correct: false }
        ]
    },
    {
        question: "O termo 'Silagem' na alimentação do gado refere-se a:",
        answers: [
            { text: "Forragem verde (milho, sorgo) picada e fermentada sem oxigênio", correct: true },
            { text: "Capim seco ao sol em fardos", correct: false },
            { text: "Mistura de minerais com água purificada", correct: false },
            { text: "Grãos crus de soja inteiros", correct: false }
        ]
    },
    {
        question: "Qual é o tempo médio de vida de uma vaca bem cuidada na fazenda?",
        answers: [
            { text: "15 a 20 anos", correct: true },
            { text: "3 a 5 anos", correct: false },
            { text: "40 a 50 anos", correct: false },
            { text: "1 a 2 anos", correct: false }
        ]
    },
    {
        question: "A raça bovina 'Nelore', muito comum no Brasil, é originária de qual país?",
        answers: [
            { text: "Índia", correct: true },
            { text: "Estados Unidos", correct: false },
            { text: "Holanda", correct: false },
            { text: "Holanda e Inglaterra", correct: false }
        ]
    },
    {
        question: "O que caracteriza os bovinos da espécie 'Bos indicus' (Zebus)?",
        answers: [
            { text: "Presença de cupim, orelhas mais longas e alta resistência ao calor", correct: true },
            { text: "Ausência total de chifres e pelos longos de neve", correct: false },
            { text: "Produção exclusiva de lã", correct: false },
            { text: "Porte pequeno e ausência de cupim", correct: false }
        ]
    },
    {
        question: "O 'Sela Americana' é um estilo de montaria em cavalos de rodeio importado de qual país?",
        answers: [
            { text: "Estados Unidos", correct: true },
            { text: "Austrália", correct: false },
            { text: "Argentina", correct: false },
            { text: "Espanha", correct: false }
        ]
    },
    {
        question: "Qual é a principal diferença entre o Bareback e o Cutiano no rodeio em cavalos?",
        answers: [
            { text: "No Bareback o peão monta quase 'pelado' (sem sela), segurando-se com uma mão só em um alça rígida", correct: true },
            { text: "No Bareback se usa arreio de couro pesado com duas rédeas", correct: false },
            { text: "No Cutiano montam-se em touros em vez de cavalos", correct: false },
            { text: "Não existe diferença", correct: false }
        ]
    },
    {
        question: "A pulga e o carrapato podem transmitir aos animais domésticos parasitas no sangue como a:",
        answers: [
            { text: "Ehrlichia e Anaplasma", correct: true },
            { text: "Gripe Aftosa", correct: false },
            { text: "Catarata felina", correct: false },
            { text: "Rinite alérgica", correct: false }
        ]
    },
    {
        question: "Qual suplemento é essencial para os pintinhos recém-nascidos no berçário do aviário?",
        answers: [
            { text: "Água limpa e ração inicial rica em proteína e energia", correct: true },
            { text: "Milho inteiro sem quebrar", correct: false },
            { text: "Apenas capim fresco", correct: false },
            { text: "Leite de vaca morno", correct: false }
        ]
    },
    {
        question: "Qual a função do 'Cupim' nas raças zebus (como o Nelore)?",
        answers: [
            { text: "Reserva de gordura e energia para períodos de escassez", correct: true },
            { text: "Armazenar água como os camelos", correct: false },
            { text: "Apenas os machos usam para pular no rodeio", correct: false },
            { text: "Ajudar no equilíbrio durante a corrida", correct: false }
        ]
    },
    {
        question: "A doença infecciosa 'Brucelose' em vacas causa principalmente:",
        answers: [
            { text: "Aborto no final da gestação e problemas reprodutivos", correct: true },
            { text: "Perda imediata dos dentes", correct: false },
            { text: "Crescimento descontrolado dos cascos", correct: false },
            { text: "Paralisia das orelhas", correct: false }
        ]
    },
    {
        question: "O que é o 'Feno'?",
        answers: [
            { text: "Capim desidratado ao sol e embalado para conservação do alimento", correct: true },
            { text: "Capim ensilado com água e vinagre", correct: false },
            { text: "Ração de farelo de trigo com sal", correct: false },
            { text: "Folhas secas de árvores frutíferas", correct: false }
        ]
    },
    {
        question: "Qual a importância de vacinar o rebanho contra a 'Clostridiose'?",
        answers: [
            { text: "Prevenir doenças fatais como Manqueira, Tétano e Botulismo", correct: true },
            { text: "Fazer o gado engordar sem precisar comer", correct: false },
            { text: "Mudar a cor da pelagem do gado", correct: false },
            { text: "Evitar a queda dos chifres", correct: false }
        ]
    },
    {
        question: "No rodeio, se o touro cair com o peão durante os 8 segundos por acidente, o que os juízes concedem?",
        answers: [
            { text: "Um 'Reride' (uma nova montaria em outro animal)", correct: true },
            { text: "Nota zero imediata", correct: false },
            { text: "Vitória automática para o peão", correct: false },
            { text: "Desqualificação de ambos", correct: false }
        ]
    },
    {
        question: "Qual equipamento é proibido no rodeio profissional por violar o bem-estar animal?",
        answers: [
            { text: "Objetos cortantes, choque elétrico e esporas afiadas", correct: true },
            { text: "Corda de algodão e peitilho de couro", correct: false },
            { text: "Sedém de lã macia", correct: false },
            { text: "Capacete e colete de proteção do peão", correct: false }
        ]
    },
    {
        question: "O colete de proteção utilizado pelos peões de rodeio serve para:",
        answers: [
            { text: "Absorver impactos de pisões e padas do animal no tórax", correct: true },
            { text: "Manter a postura bonita para a foto", correct: false },
            { text: "Aumentar o peso para fixar no animal", correct: false },
            { text: "Apenas cumprir patrocinadores", correct: false }
        ]
    },
    {
        question: "Qual destas frases é o famoso bordão do Woody no filme Toy Story?",
        answers: [
            { text: "Tem um cobra na minha bota!", correct: true },
            { text: "Ao infinito e além!", correct: false },
            { text: "Eu sou o Buzz Lightyear!", correct: false },
            { text: "Liberdade para os brinquedos!", correct: false }
        ]
    },
    {
        question: "A Jessie é conhecida no filme Toy Story por qual apelido carinhoso?",
        answers: [
            { text: "A Vaqueira Tagarela (Yodeling Cowgirl)", correct: true },
            { text: "A Rainha do Laço", correct: false },
            { text: "A Xandoca do Sertão", correct: false },
            { text: "A Dama das Montanhas", correct: false }
        ]
    }
];

// Quantidade de perguntas por partida
const QUESTIONS_PER_GAME = 10;

// Variáveis do Jogo
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Elementos da Interface DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionTextElement = document.getElementById('question-text');
const questionNumberElement = document.getElementById('question-number');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const scoreTextElement = document.getElementById('score-text');
const feedbackMessageElement = document.getElementById('feedback-message');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener('click', startQuiz);

// Função de embaralhamento (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    
    // Embaralhar todas as perguntas e selecionar apenas QUESTIONS_PER_GAME para esta partida
    const shuffledQuestions = shuffleArray(allQuestions);
    activeQuestions = shuffledQuestions.slice(0, QUESTIONS_PER_GAME);

    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(activeQuestions[currentQuestionIndex]);
    updateProgressBar();
}

function showQuestion(question) {
    questionNumberElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${activeQuestions.length}`;
    questionTextElement.innerText = question.question;
    
    // Embaralhar também as opções de resposta
    const shuffledAnswers = shuffleArray(question.answers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }
    
    // Revelar resposta correta em verde e desativar botões
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (activeQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        setTimeout(showResults, 1200);
    }
}

function updateProgressBar() {
    const percentage = (currentQuestionIndex / activeQuestions.length) * 100;
    progressBar.style.width = `${percentage}%`;
}

function showResults() {
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    progressBar.style.width = '100%';
    
    scoreTextElement.innerText = `Você acertou ${score} de ${activeQuestions.length} perguntas!`;
    
    // Feedback personalizado
    const percentage = (score / activeQuestions.length) * 100;
    if (percentage === 100) {
        feedbackMessageElement.innerText = "🤠 'Deu no alvo!' Você é um verdadeiro Xerife da Medicina Veterinária e Campeão dos Rodeios! O Bala no Alvo e toda a turma estão orgulhosos!";
    } else if (percentage >= 70) {
        feedbackMessageElement.innerText = "¡Yee-haw! Segurou firme os 8 segundos! Você entende muito de fazenda e rodeio, parceiro!";
    } else if (percentage >= 40) {
        feedbackMessageElement.innerText = "Muito bem! Você conhece um bocado da rotina do campo, mas ainda restou uma duvidazinha. Vamos tentar de novo?";
    } else {
        feedbackMessageElement.innerText = "Epa, o gado estourou da cerca! Vamos dar uma estudada nos manuais da fazenda junto com o Slinky e tentar outra vez!";
    }
            }
