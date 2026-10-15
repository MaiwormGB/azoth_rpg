const menu = {

    id: document.getElementById('menu'),

    status: {

        id: document.getElementById('menu_status'),
        button: document.getElementById('menu_status_btn')

    },

    preencher: {

        recursos(id){

            const campo = document.getElementById(`${id}_inputs`)
            const inputs = campo.querySelectorAll('input');
            const atributo = document.getElementById(`${id}_atributo`)

            const select = document.getElementById(`${id}_select`)

            switch (`${select.value}C`){

                case 'pvC':
                    atributo.textContent = `VIG | ${ficha.atributos.Vig}`
                break;

                case 'sanC':
                    atributo.textContent = `INT| ${ficha.atributos.Int}`
                break;

                case 'peC':
                    atributo.textContent = `PRE | ${ficha.atributos.Pre}`
                break;

            }
            
            inputs.forEach((input, index) => {

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

        const forms = menu.id.querySelectorAll('form')
        const ativos = []

        forms.forEach(form => {
            
            const estilo = getComputedStyle(form)
            
            if (estilo.display === 'none'){

                return;

            }

            ativos.push(form);

        });

        ativos.forEach(form => {

            const id = form.id;

            switch (id){

                // Possui div de inputs
                case "menu_recursos":

                    menu.preencher.recursos(id)

                    break;

                case "menu_atributos":

                    menu.preencher.atributos(id)

                    break;

            }

        })
        

    }

}



menu.configurar();