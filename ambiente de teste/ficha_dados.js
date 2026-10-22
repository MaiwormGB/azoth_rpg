//objeto da ficha -> salvar no local storage E gerar JSON baixavel para salvamento mais aprofundado
let ficha = {

    status:{

        pvC:{

            fixo: 10,
            mult: 2,
            modP: 0,
            modN: 0

        },

        sanC:{

            fixo: 10,
            mult: 2,
            modP: 0,
            modN: 0

        },

        peC:{

            fixo: 10,
            mult: 2,
            modP: 0,
            modN: 0

        },

        atributos:{

            For:{

                fixo: 1,
                modP: 0,
                modN: 0

            },
            Agi:{

                fixo: 1,
                modP: 0,
                modN: 0

            },
            Int:{

                fixo: 1,
                modP: 0,
                modN: 0

            },
            Pre:{

                fixo: 1,
                modP: 0,
                modN: 0

            },
            Vig:{

                fixo: 1,
                modP: 0,
                modN: 0

            }

        }

    },

    pericias:{

        lista:{

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

            limite: 10,

        },

        bonus:{

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

        }
    },

    combate:{

        defC:{

            fixo: 10,
            modp: 0,
            modn: 0

        },        

        intgrC:{

            fixo: 10,
            modp: 0,
            modn: 0

        },  

        resisenciasF: {

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

        resistenciasM: {

            Mundano: 0,
            Ambicao: 0,
            Fogo: 0,
            Fome: 0,
            Podre: 0,
            Marcado: 0,
            Mental: 0,

        },
        
        proficiencias: {

            Ageis: 0,
            Balanceadas: 0,
            Brutas: 0

        },

        fervor:{

            modP: 0,
            modN: 0

        },

        manobras: []

    },

    relvas:{
    
        lista: [],

        limite:{

            mopP: 0,
            modN: 0

        },

        marcas: {

            Ambicao: 0,
            Fogo: 0,
            Fome: 0,
            Podre: 0

        },

        intensidade:{

            modP: 0,
            modN: 0

        }

    },

    talentos:{

        lista: [],

        pec: 15

    },

    inventario:{

        lista: [],

        limites:{

            armas: 1,
            amuletos: 1,
            mochilas: 1,
            protecao: 1

        },

        carga:{

            mult: 2,
            modP: 0,
            modN: 0

        },

        equipado:{

            armas: [],
            amuletos: [],
            mochilas: [],
            protecoes: [],

        },

    },

    credencial:{

       
        estirpe: {

            nome: '',
            tracos: [],
            defeitos: [],
           
        },

        info:{

            nome: '',
            jogador: '',
            idade: '',
            aniversario: '',
            peso: '',
            altura: '',
            bio: '',
            gosta: '',
            naoGosta: '',
            objetivo: ''

        }


    }


};

let temporario = {

    status:{

        pvP:{

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

        pvE: 0,

        sanP: {

            Mundano: 0,
            Ambicao: 0,
            Fogo: 0,
            Fome: 0,
            Podre: 0,
            Marcado: 0,
            Mental: 0,

        },

        sanE: 0,

        peP:{

            real: 0

        },

        peE: 0,

    },

    pericias:{

        bonus:{

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

        }

    },

    combate:{

        defE:{

            modP: 0,
            modN: 0

        },

        intgrE:{

            modP: 0,
            modN:0

        },

        condicoes:{

            fisico: [],

            mental:[]

        },

        fervorP: 0,

        fervorE: 0
        

    }

};