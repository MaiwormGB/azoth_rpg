const menu = {

    id: document.getElementById('menu'),

    status: {

        id: document.getElementById('menu_status'),
        button: document.getElementById('menu_status_btn')

    },

    preencher(){

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

    },

    /*preencher: {

        recursos(id){

            const campo = document.getElementById(`${id}_inputs`)
            const inputs = campo.querySelectorAll('input');
            const atributo = document.getElementById(`${id}_atributo`)

            const select = document.getElementById(`${id}_select`)

            switch (`${select.value}C`){

                case 'pvC':
                    atributo.textContent = `VIG | ${ficha.status.atributos.Vig.fixo}`
                break;

                case 'sanC':
                    atributo.textContent = `INT| ${ficha.status.atributos.Int.fixo}`
                break;

                case 'peC':
                    atributo.textContent = `PRE | ${ficha.status.atributos.Pre.fixo}`
                break;

            }
            
            inputs.forEach((input, index) => {

                input.dataset.tipo = `${select.value}C`

                if (index === 4){

                    const extra = `${select.value}E`

                    input.value = temporario[extra]
                    return;

                }

                input.value = ficha[`${select.value}C`][index];

            });

        },

        atributos(id){

            const campo = document.getElementById(`${id}_inputs`)
            const inputs = campo.querySelectorAll('input');
            
            const select = document.getElementById(`${id}_select`)

            inputs.forEach((input, index) => {

                input.dataset.tipo = select.value

                switch (index){

                    case 0:
                        input.value = ficha.atributos[select.value]
                    break;

                    case 1:
                        input.value = temporario.atributosModP[select.value]
                    break;

                    case 2:
                        input.value = temporario.atributosModN[select.value]
                    break;
                }

            });


        }

    },*/

    alterarInputs(){

        selects = menu.id.querySelectorAll('select');
        
        selects.forEach((select) => {

            tipo = select.dataset.p;
            form = select.parentElement;
            val = select.value;
            inputs = form.querySelectorAll('input')

            switch (tipo){

                case 'recursos': 
                    
                    atributos = {

                        pv: 'Vig',
                        san: 'Int',
                        pe: 'Pre'

                    }

                    texto = document.getElementById('menu_recursos_atributo');

                    texto.textContent = `${atributos[val].toUpperCase()} | ${ficha.status.atributos[atributos[val]].fixo}`

                    inputs.forEach((input, indice) => {

                        input.dataset.s = `${val}C`

                        if(indice === 4){

                            input.dataset.s = `${val}E`

                        }

                    })
                    break;

                case 'atributos':
                    
                    inputs.forEach((input) =>{

                        input.dataset.t = val;

                    }) 


            }

        })

    },

    configurar(){

        // Apenas ativa o abrir novamente ao clicar diretamente no menu
        menu.id.addEventListener('click', (event) => {
            if (event.target === menu.id ||
                event.target === document.getElementById('menu_main')
            ) {
                menu.abrir(event);
            }
        });


        menu.status.button.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.abrir(event);
        });

        const selects = menu.id.querySelectorAll('select')

        selects.forEach(select => {

            select.addEventListener('change', () =>{

                menu.atualizar();

            })

        })

    },

    abrir(event){

        const elemento = event.target.dataset.sessao;

        //Ativa a classe se ela não existir, remove a classe se ela já existir
        menu.id.classList.toggle('aberto');

        if(!elemento){

            return;

        }

        menu.atualizar()

    },

    atualizar(){


        menu.alterarInputs()
        menu.preencher()

    },

    salvar(){

        const inputs = menu.id.querySelectorAll('input');

        inputs.forEach((input) =>{

            indice = {

                p: input.dataset.p,
                s: input.dataset.s,
                t: input.dataset.t,
                q: input.dataset.q

            }

            objeto = ficha

            // Checa se o valor é um numero ou não
            val = Number(input.value) || Number(input.value) === 0? 
                Number(input.value) : 
                input.value;

            if(!val && val !== 0){

                console.log('vazio')
                return;

            }

            if(!indice.t){

                if(!ficha[indice.p][indice.s] &&
                    ficha[indice.p][indice.s] !== 0
                ){

                    objeto = temporario

                }

                objeto[indice.p][indice.s] = val
                return;

            }

            if(!indice.q){

                if(!ficha[indice.p][indice.s][indice.t] &&
                    ficha[indice.p][indice.s][indice.t] !== 0
                ){

                    objeto = temporario

                }

                objeto[indice.p][indice.s][indice.t] = val
                return;

            }else{

                if(!ficha[indice.p][indice.s][indice.t][indice.q] &&
                    ficha[indice.p][indice.s][indice.t][indice.q] !== 0
                ){

                    objeto = temporario

                }

                objeto[indice.p][indice.s][indice.t][indice.q] = val
                return;

            }


        })

        alert('SUCESSO:: FICHA SALVA!')

    }



}



menu.configurar();