//objeto da ficha -> salvar no local storage E gerar JSON baixavel para salvamento mais aprofundado
let ficha = {
    //STATUS -------------------------- (mantidos como array, estrutura fixa)

    // 0 - PV Fixo
    // 1 - PV multiplicador
    // 2 - PVT mod positivo
    // 3 - PVT mod negativo
    pvC: [0,2,0,0],

    // 0 - SAN Fixo
    // 1 - SAN multiplicador
    // 2 - SANT mod positivo
    // 3 - SANT mod negativo
    sanC: [0,2,0,0],

    // 0 - PE Fixo
    // 1 - PE multiplicador
    // 2 - PET mod positivo
    // 3 - PET mod negativo
    peC: [0,2,0,0],

    // 0 - DEF fixo
    // 1 - DEF mod positivo
    // 2 - DEF mod negativo
    defC: [10,0,0],

    // 0 - INTGR fixo
    // 1 - INTGR mod positivo
    // 3 - INTGR mod negativo
    intgrC: [10,0,0],

    // ATRIBUTOS -------------------------- (convertido para objeto nomeado)
    atributos: {
        For: 1,
        Agi: 1,
        Int: 1,
        Pres: 1,
        Vig: 1,
    },

    //PERICIAS -------------------------------------- (convertido para objeto nomeado)
    pericias: {
        Acrobacia: false,
        Adestramento: false,
        Artes: false,
        Atletismo: false,
        Ciencias: false,
        Crime: false,
        Confeccao: false,
        Culinaria: false,
        Cultura: false,
        Diplomacia: false,
        Enganacao: false,
        Fortitude: false,
        Furtividade: false,
        Infeccao: false,
        Iniciativa: false,
        Intimidacao: false,
        Intuicao: false,
        Investigacao: false,
        Luta: false,
        Medicina: false,
        Percepcao: false,
        Pontaria: false,
        Reflexos: false,
        Sobrevivencia: false,
        Engenharia: false,
        Vontade: false,
    },

    periciasBonus: {
        Acrobacia: 0,
        Adestramento: 0,
        Artes: 0,
        Atletismo: 0,
        Ciencias: 0,
        Crime: 0,
        Confeccao: 0,
        Culinaria: 0,
        Cultura: 0,
        Diplomacia: 0,
        Enganacao: 0,
        Fortitude: 0,
        Furtividade: 0,
        Infeccao: 0,
        Iniciativa: 0,
        Intimidacao: 0,
        Intuicao: 0,
        Investigacao: 0,
        Luta: 0,
        Medicina: 0,
        Percepcao: 0,
        Pontaria: 0,
        Reflexos: 0,
        Sobrevivencia: 0,
        Engenharia: 0,
        Vontade: 0,
    },

    limitePericias: 10,

    //COMBATE ---------------------------

    // Dano fisico (convertido para objeto nomeado)
    resistenciasF: {
        Corte: 0,
        Balistico: 0,
        Impacto: 0,
        Perfuracao: 0,
        Termico: 0,
        Quimico: 0,
        Fisico: 0,
        Mundano: 0,
        Ambicao: 0,
        Fogo: 0,
        Fome: 0,
        Podre: 0,
        Marcado: 0,
        Real: 0,
    },

    // Dano mental (convertido para objeto nomeado)
    resistenciasM: {
        Mundano: 0,
        Ambicao: 0,
        Fogo: 0,
        Fome: 0,
        Podre: 0,
        Marcado: 0,
        Mental: 0,
    },

    // convertido para objeto nomeado
    proficiencias: {
        Ageis: 0,
        Balanceadas: 0,
        Brutas: 0,
        Ambicao: 0,
        Fogo: 0,
        Fome: 0,
        Podre: 0,
    },

    // 0 - modificador positivo de fervor
    // 1 - modificador negativo de fervor
    fervorC: [0,0],

    manobras: [], // lista dinâmica, sem alteração

    //RELVAS ----------------------- (magias, lista dinâmica, sem alteração)

    relvas: [],

    limiteRelvasMod: 0,

    //TALENTOS -----------------------
    pec: 15,

    talentos: [], // lista dinâmica, sem alteração

    //INVENTARIO -----------------------

    inventario: [], 

    // Quantas armas um caçador pode ter equipada consigo ao mesmo tempo.
    // mudar a arma equipada requer uma ação principal. Uma arma estar "equipada"
    // não quer dizer que ela esta na mão, mas sim que esta a facil acesso
    limiteArmas: 1,

    limiteAmuletos: 1,

    limiteMochila: 1,

    armas: [], 
    
    amuletos: [],

    mochilas: [],

    protecao: "",

    cargaMult: 2,

    cargaMod: 0,

    //CREDENCIAL ------------------------------

    nome: "",
    jogador: "",

    estirpe: "",
    tracos: [],
    defeitos: [],

    idade: 0,
    aniversario: 0,
    peso: 0,
    altura: 0,

    bio: "",
    gosta: "",
    naoGosta: "",
    objetivo: "",

};

//dados finitos que não são permanentes -> apenas salvar no local storage
let temporario = {

    // ATRIBUTOS temporários (convertido para objeto nomeado, mesmas chaves de ficha.atributos)
    atributosModP: {
        For: 0,
        Agi: 0,
        Int: 0,
        Pres: 0,
        Vig: 0,
    },
    atributosModN: {
        For: 0,
        Agi: 0,
        Int: 0,
        Pres: 0,
        Vig: 0,
    },

    //STATUS

    pvE: 0, //PV extra

    // convertido para objeto nomeado, mesmas chaves de ficha.resistenciasF
    pvP: {
        Corte: 0,
        Balistico: 0,
        Impacto: 0,
        Perfuracao: 0,
        Termico: 0,
        Quimico: 0,
        Fisico: 0,
        Mundano: 0,
        Ambicao: 0,
        Fogo: 0,
        Fome: 0,
        Podre: 0,
        Marcado: 0,
        Real: 0,
    },

    sanE: 0, //San extra

    // convertido para objeto nomeado, mesmas chaves de ficha.resistenciasM
    sanP: {
        Mundano: 0,
        Ambicao: 0,
        Fogo: 0,
        Fome: 0,
        Podre: 0,
        Marcado: 0,
        Mental: 0,
    },

    peE: 0, //PE extra

    peP: 0,

    // 0 - def extra positiva
    // 1 - def extra negativa
    defE: [0,0],

    // 0 - intgr extra positiva
    // 1 - intgr extra negativa
    intgrE: [0,0],

    //PERICIAS

    // convertido para objeto nomeado, mesmas chaves de ficha.periciasBonus
    periciasBonusTemp: {
        Acrobacia: 0,
        Adestramento: 0,
        Artes: 0,
        Atletismo: 0,
        Ciencias: 0,
        Crime: 0,
        Confeccao: 0,
        Culinaria: 0,
        Cultura: 0,
        Diplomacia: 0,
        Enganacao: 0,
        Fortitude: 0,
        Furtividade: 0,
        Infeccao: 0,
        Iniciativa: 0,
        Intimidacao: 0,
        Intuicao: 0,
        Investigacao: 0,
        Luta: 0,
        Medicina: 0,
        Percepcao: 0,
        Pontaria: 0,
        Reflexos: 0,
        Sobrevivencia: 0,
        Engenharia: 0,
        Vontade: 0,
    },

    // COMBATE

    fervorP: 0,

}

//Objetos do sistema em suas formas base
const item = {

    "id": "",
    "nome": "",
    "tipo": "",
    "arquetipos": [],
    "permanente": false,
    "pv": 0,
    "carga": 0,
    "usos": 0,

    "descricao": "",

    "talentos":[],
    "manobras":[],
    "modificadores":[],
    "modos":[

            {
                "nome": "",
                "arquetipo": "", 
                "tiposDano":[],
                "alcances": [],
                "dano": ""
            }

    ],
    "bonus":{},
    "requisitos":{} 

}

const manobra = {

    "id":"",
    "nome": "",
    "tipo": "",
    "pericias":[],
    "alcances": [],
    "usos": 0,

    "descricao":"",

    "custos":{

        "fervor": 0,
        "pe": 0,
        "it": 0

    },

    "requisitos":[]

}

const talento = {

    "id":"",
    "nome":"",
    "categoria":"",
    "descricao":"",
    "bonus":{},
    "requisitos":[] 

}

const relva = {

    "id":"",
    "nome":"",
    "significados":[],
        
    "modos":[

        {

            "nome":"",
            "execucao":"",
            "foco": false,
            "pe": 0,
            "it": 0,
            "alcance": 0,
            "tipos":[],
            "alvos":[],
            "descricao":"",
            "requisitos":{}

        }

    ],

    "requisitos":[]

}