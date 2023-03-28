

//Capturando a tag com ID e colocando em uma variável var
var h1Elemento = document.getElementById("titulo-1")

//Adicionando um Listener de Evento
h1Elemento.addEventListener("click",function(){

    alert("Agora sou autonômo!")
    h1Elemento.innerHTML= "NOVO TÍTULO";
    h1Elemento.style.backgroundColor = "#ff0000"

}) 

h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "34px"
})
//Declaração de variáveis com LET e VAR e CONST

//const nome = "Pedro"

var nome = "Pedro"

if(nome != ""){
    var nome = "Emanuelle"
}

//Imprimindo o valor da variável
console.log(nome)

let nome = null
console.log (nome)

if (nome!="" && nome != undefined){
    console.log("A variavel está preenchida!")
}else if (nome = null)
    console.log ("A variavel é null")
else {
    console.log ("A variavel está preenchida")
}

let num1 = 10;
let num2 = 5;

let resultado = 10%5 ? "PAR" : "IMPAR"
console.log("o numero é " + resultado)