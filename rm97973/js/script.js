// dicas no mdn web docs

// Capturando a tag com ID e colocando em uma variavél var
var h1Elemento = document.getElementById("titulo-1")

// Adicionando um listener de evento 
h1Elemento.addEventListener("click",function(){

    alert("agora sou atônomo!")

})

// Declaração de vaiaveis como LET, VAR e CONST

// const nome = "Pedro" //conteudo não pode ser alterado depois

var nome = "Pedro" // é considerado global

if(nome != ""){
    var nome = "Emanuelle"
}
//Imprimindo o valor da variável
console.log(nome)

// let nome = "Pedro"
