const menu = {

    id: document.getElementById('menu'),

    status: {

        id: document.getElementById('menu_status'),
        button: document.getElementById('menu_status_btn')

    },

    configurar(){

        // Apenas ativa o abrir novamente ao clicar diretamente no menu
        menu.id.addEventListener('click', (event) => {
            if (event.target === menu.id) {
                menu.abrir(event);
            }
        });


        menu.status.button.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.abrir(event);
        });

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

        const inputs = menu.id.querySelectorAll('input')
        const ativos = []

        inputs.forEach(input => {
            
            const estilo = getComputedStyle(input)
            
            if (estilo.display === 'none'){

                return;

            }

            ativos.push(input);

        });

        

    }


}

menu.configurar();