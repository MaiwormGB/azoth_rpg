function salvar(){

    const menu = document.getElementById('menu');

    const inputs = menu.querySelectorAll('input');

    inputs.forEach((input) =>{

        indice = {

            p: input.dataset.p,
            s: input.dataset.s,
            t: input.dataset.t,
            q: input.dataset.q

        }

        objeto = ficha

        // Checa se o valor é um numero ou não
        val = Number(input.value) && Number(input.value !== 0)? 
            Number(input.value) : 
            input.value;

        if(!val){

            console.log('vazio')
            return;

        }

        console.log(val)

        if(!indice.t){

            if(!ficha[indice.p][indice.s] &&
                ficha[indice.p][indice.s] !== 0
            ){

                objeto = temporario

            }

            objeto[indice.p][indice.s] = val
            console.log(objeto.status)
            return;

        }

        if(!indice.q){

            if(!ficha[indice.p][indice.s][indice.t] &&
                ficha[indice.p][indice.s][indice.t] !== 0
             ){

                objeto = temporario

            }

            console.log(indice)

            objeto[indice.p][indice.s][indice.t] = val


            console.log(objeto.status)
            return;

        }else{

            if(!ficha[indice.p][indice.s][indice.t][indice.q] &&
                ficha[indice.p][indice.s][indice.t][indice.q] !== 0
            ){

                objeto = temporario

            }

            objeto[indice.p][indice.s][indice.t][indice.q] = val
            console.log(objeto.status)
            return;

        }


    })


}