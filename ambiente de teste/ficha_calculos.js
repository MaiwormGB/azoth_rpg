const status = {

    get pvT(){

        return(
            ficha.pvC[0] +
            talentos.rk * (ficha.pvC[1] * ficha.atributos.Vig) +
            ficha.pvC[2] -
            ficha.pvC[3]
        );

    },

    get pvPT(){
        // pvP agora é objeto nomeado -> Object.values() extrai só os valores pra poder usar reduce
        return Object.values(temporario.pvP).reduce((acc, pv) => acc + pv, 0);

    },

    get pvA(){

        return(
            this.pvT +
            temporario.pvE -
            this.pvPT
        );

    },

    get sanT(){

        return(
            ficha.sanC[0] +
            talentos.rk * (ficha.sanC[1] * ficha.atributos.Int) +
            ficha.sanC[2] -
            ficha.sanC[3]
        );

    },

    get sanPT(){
        return Object.values(temporario.sanP).reduce((acc, san) => acc + san, 0);

    },

    get sanA(){
        return(
            this.sanT +
            temporario.sanE -
            this.sanPT
        )

    },

    get peT(){

        return(
            ficha.peC[0] +
            talentos.rk * (ficha.peC[1] * ficha.atributos.Pre) +
            ficha.peC[2] -
            ficha.peC[3]
        );

    },

    get peA(){
        return(
            this.peT +
            temporario.peE -
            temporario.peP
        );
    },
 
    get defT(){

        return(
            ficha.defC[0] +
            ficha.atributos.Agi +
            ficha.atributos.Vig +
            ficha.defC[1] -
            ficha.defC[2]
        );

    },

    get defA(){
        return(
            this.defT +
            temporario.defE[0] -
            temporario.defE[1]
        );
    },

    get intgrT(){

        return(
            ficha.intgrC[0] +
            ficha.atributos.Pres +
            ficha.atributos.Vig +
            ficha.intgrC[1] -
            ficha.intgrC[2]
        );

    },

    get intgrA(){
        return(
            this.intgrT +
            temporario.intgrE[0] -
            temporario.intgrE[1]
        );
    },

    get forcaA(){
        return ficha.atributos.For + temporario.atributosModP.For - temporario.atributosModN.For;
    },

    get agilidadeA() {
        return ficha.atributos.Agi + temporario.atributosModP.Agi - temporario.atributosModN.Agi;
    },

    get intelectoA() {
        return ficha.atributos.Int + temporario.atributosModP.Int - temporario.atributosModN.Int;
    },

    get presencaA() {
        return ficha.atributos.Pres + temporario.atributosModP.Pres - temporario.atributosModN.Pres;
    },

    get vigorA() {
        return ficha.atributos.Vig + temporario.atributosModP.Vig - temporario.atributosModN.Vig;
    },

    // parâmetro renomeado de "indice" para "nome" -> chamar com string, ex: status.sofrerDanoPV("Corte", 5)
    sofrerDanoPV(nome, valor){
        const danoFinal = Math.max(
            0,
            valor - combate.resistenciaF(nome)
        );

        temporario.pvP[nome] += danoFinal;

        return danoFinal;
    },

    sofrerDanoSan(nome, valor){
        const danoFinal = Math.max(
            0,
            valor - combate.resistenciaM(nome)
        );

        temporario.sanP[nome] += danoFinal;

        return danoFinal;
    },

    perderPE(valor){
        
        temporario.peP = Math.max(0,temporario.peP + valor)
        
        return this.peA;
    },

    recuperarDanoPV(nome, valor){

        temporario.pvP[nome] = Math.max(0,temporario.pvP[nome] - valor);

        return this.pvA;
    },

    recuperarDanoSan(nome, valor){

        temporario.sanP[nome] = Math.max(0,temporario.sanP[nome] - valor);

        return this.sanA;
    },

    recuperarPE(valor){

        temporario.peP = Math.max(0,temporario.peP - valor)
        return this.peA;

    }

}

const pericias = {

    get totalTreinamento(){
        // pericias agora é objeto -> Object.values() extrai os booleans pra poder usar filter
        return Object.values(ficha.pericias).filter(valor => valor).length;
    },

    checarLimite(){
        if(this.totalTreinamento > ficha.limitePericias){
            return false;
        }else{
            return true;
        }
    },

    // parâmetro renomeado de "indice" para "nome" -> chamar com string, ex: pericias.treinamento("Luta")
    treinamento(nome){
        return ficha.pericias[nome] ? true : false
    },

    bonus(nome){
        return ficha.periciasBonus[nome]
    },

    bonusTemp(nome){
        return temporario.periciasBonusTemp[nome]
    },

    total(nome){
        return (
            //treinamento
            (ficha.pericias[nome] ? 5 : 0) +
            //bonus duradouro
            ficha.periciasBonus[nome] +
            //bonus temporario
            temporario.periciasBonusTemp[nome]
        );
    }

}

const combate = {

    get fervorT(){
        return 2 + ficha.atributos.For + ficha.atributos.Agi + ficha.fervorC[0] - ficha.fervorC[1]
    },

    get fervorA(){
        return this.fervorT - temporario.fervorP
    },
    //Fervor a recuperar
    get fervorR(){
        
        if(ficha.atributos.Vig > 3){
            return ficha.atributos.Vig
        }else{
            return 3
        }
    },

    // Grupos de categoria antes eram definidos por faixa numérica de índice;
    // agora que são objetos nomeados, definimos os grupos como listas de nomes.
    _CATEGORIAS_FISICO_BASE: ["Corte", "Balistico", "Impacto", "Perfuracao"],
    _CATEGORIAS_FISICO_EXT: ["Corte", "Balistico", "Impacto", "Perfuracao", "Termico", "Quimico", "Fisico"],
    _CATEGORIAS_PARANORMAL_F: ["Mundano", "Ambicao", "Fogo", "Fome"],

    // parâmetro renomeado de "indice" para "nome" -> chamar com string, ex: combate.resistenciaF("Corte")
    resistenciaF(nome){

        let resistencia = ficha.resistenciasF[nome];

        // Física vale para corte, balístico, impacto e perfuração
        if(this._CATEGORIAS_FISICO_BASE.includes(nome)){
            resistencia += ficha.resistenciasF.Fisico;
        }

        if(this._CATEGORIAS_FISICO_EXT.includes(nome)){
            resistencia += ficha.resistenciasF.Mundano;
        }

        // Marcado vale para todos os danos paranormais
        if(this._CATEGORIAS_PARANORMAL_F.includes(nome)){
            resistencia += ficha.resistenciasF.Marcado;
        }

        // Real vale para tudo
        resistencia += ficha.resistenciasF.Real;

        return resistencia;

    },

    _CATEGORIAS_PARANORMAL_M: ["Ambicao", "Fogo", "Fome", "Podre"],

    resistenciaM(nome){

        let resistencia = ficha.resistenciasM[nome];

        if(this._CATEGORIAS_PARANORMAL_M.includes(nome)){
            resistencia += ficha.resistenciasM.Marcado;
        }

        resistencia += ficha.resistenciasM.Mental;

        return resistencia;

    },

    perderFervor(valor){

        temporario.fervorP += valor;
        return this.fervorA;

    },

    recuperarFervor(){

        temporario.fervorP = Math.max(0,temporario.fervorP -= this.fervorR);
        return this.fervorA;

    }

}

const relvas = {

    get totalRelvas(){
        return ficha.relvas.filter(valor => valor).length;
    },

    get limiteRelvas(){
        return ficha.atributos.Int + ficha.atributos.Pres + ficha.limiteRelvasMod
    },

    checarLimite(){
        if(this.totalRelvas > this.limiteRelvas){
            return false;
        }else{
            return true;
        }
    },

}

const talentos = {

    get rk() {
        return Math.floor(ficha.pec/15);

    },

    adicionar(id) {
        ficha.talentos.push(id);
    }

}

const inventario = {

    cargaT(){
    
        if (ficha.atributos.For <= 0){

            return 1 + ficha.cargaMod

        }else{

            return ficha.cargaMult * ficha.atributos.For + ficha.cargaMod

        }

    }

}