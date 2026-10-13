const menu = {

    id: document.getElementById('menu'),

    status: {

        id: document.getElementById('menu_status'),
        button: document.getElementById('menu_status_btn')

    } ,

    configurar(){

        menu.id.addEventListener('click', menu.abrir);
        menu.status.button.addEventListener('click', menu.abrir);

    },

    abrir(event){

        const elemento = event.currentTarget;

        if (event.target !== elemento){
            return;
        }

        if (menu.id.style.display === 'none'){

            menu.id.style.display = 'flex'

        }else{

            menu.id.style.display = 'none'

        }

        elemento.addEventListener('click', (event) => {
            event.stopPropagation();

        })
        

        console.log(elemento)




    }


}

menu.configurar();