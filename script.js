//1º: ADICIONAR IDS NOS BOTOES(4 BOTOES)
//2º: SELECIONAR OS BOTOES
//3º: INTERCEPTAR O EVENTO DE CLIQUE
//4º: RECUPERAR O ID ADICIONADO

//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_OpcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener('click', indentificaropcoes)

//EXECUTANDO ACAO DEPOIS DO CLIQUE
function indentificaropcoes(event){

    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const elemento = event.target

    //VERIFICANDO SE È UM LI
    if(elemento.tagName == "LI"){

        //RECUPERANDO O ID
        const id = elemento.id
        
        //SELECIONANDO UAM SECAO UTILIZANDO O ID (ESCOLHA DO USUARIO)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()

        //ADICIONAR UMA CLASSE
        secaoEscolha.classList.add("mostrar")
    }
}

//FUNCAO PARA REMOVER AS CLASSES DAS DIVS
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}