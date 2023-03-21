///Capturando a tag com id e colocando em uma variavel VAR

var h1Elemento = document.getElementById("titulo-1")

//adicionando um listener/escitador de evento

h1Elemento.addEventListener("click", function(){
    alert("Agora sou autonomo")
})
//Declaração de variaveis com LET VAR e CONST

var   Nome = "Pedro"
let   nome = "Pedro"
const noMe = "Pedro" // const nao pode ter seu valor alterado