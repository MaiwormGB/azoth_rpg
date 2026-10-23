function preencher(){

    const inputs = menu.id.querySelectorAll('input');

    inputs.forEach((input) =>{

        indice = {

            p: input.dataset.p,
            s: input.dataset.s,
            t: input.dataset.t,
            q: input.dataset.q

        }

        objeto = ficha
    
        if(!indice.t){

                if(!ficha[indice.p][indice.s] &&
                    ficha[indice.p][indice.s] !== 0
                ){

                    objeto = temporario

                }

                input.value = objeto[indice.p][indice.s] 
                return;

            }

            if(!indice.q){

                if(!ficha[indice.p][indice.s][indice.t] &&
                    ficha[indice.p][indice.s][indice.t] !== 0
                ){

                    objeto = temporario

                }

                input.value = objeto[indice.p][indice.s][indice.t] 
                return;

            }else{

                if(!ficha[indice.p][indice.s][indice.t][indice.q] &&
                    ficha[indice.p][indice.s][indice.t][indice.q] !== 0
                ){

                    objeto = temporario

                }

                input.value = objeto[indice.p][indice.s][indice.t][indice.q]
                return;

            }
    
    })

}