const calculos ={

    status:{

        get pvT(){

            return(
                ficha.status.pvC.fixo +
                calculos.talentos.rk * (ficha.status.pvC.mult)+
                ficha.status.pvC.modP -
                ficha.status.pvC.modN
                
            );

        },

        get pvPT(){
        // pvP agora é objeto nomeado -> Object.values() extrai só os valores pra poder usar reduce
            return Object.values(temporario.status.pvP).reduce((acc, pv) => acc + pv, 0);

        },

        get pvA(){

            return(
                calculos.status.pvT +
                temporario.status.pvE -
                calculos.status.pvPT
            );

        },

        get sanT(){

            return(
                ficha.status.sanC.fixo +
                calculos.talentos.rk * (ficha.status.sanC.mult)+
                ficha.status.sanC.modP -
                ficha.status.sanC.modN
                
            );

        },

        get sanPT(){
        // pvP agora é objeto nomeado -> Object.values() extrai só os valores pra poder usar reduce
            return Object.values(temporario.status.sanP).reduce((acc, pv) => acc + pv, 0);

        },

        get sanA(){

            return(
                calculos.status.sanT +
                temporario.status.sanE -
                calculos.status.sanPT
            );

        },
        
        get peT(){

            return(
                ficha.status.peC.fixo +
                calculos.talentos.rk * (ficha.status.peC.mult)+
                ficha.status.peC.modP -
                ficha.status.peC.modN
                
            );

        },

        get pePT(){
        // pvP agora é objeto nomeado -> Object.values() extrai só os valores pra poder usar reduce
            return Object.values(temporario.status.peP).reduce((acc, pv) => acc + pv, 0);

        },

        get peA(){

            return(
                calculos.status.peT +
                temporario.status.peE -
                calculos.status.pePT
            );

        }

    },

    talentos:{

        get rk(){
            return Math.floor(ficha.talentos.pec / 15);
        }

    }

}
