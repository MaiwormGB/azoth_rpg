const menu = {

    id: document.getElementById('menu'),

    recursos: {

        id: document.getElementById('menu_recursos'),
        button: document.getElementById('menu_recursos_btn')

    },

    configurar(){

        // Apenas ativa o abrir novamente ao clicar diretamente no menu
        menu.id.addEventListener('click', (event) => {
            if (event.target === menu.id) {
                menu.abrir(event);
            }
        });


        menu.recursos.button.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.abrir(event);
        });

    },

    abrir(event){

        const elemento = event.target.dataset.sessao;

        menu.id.classList.toggle('aberto');

        if(!elemento){

            return;

        }



    }


}

menu.configurar();