// Próximo passo :
// Declarar os elementos em que irei usar , Adicionar os Eventos que ocorreram em "cada click", Fazer as funções a serem realizadas nos clicks/eventos
// CÓDIGO BASE:
// Elementos
// const input= document.querySelector("input")
// const lista= document.querySelector("li")

// Funções:
// function handleKeyUp(e) {
//     if (e.key ==="Enter") {
//         const newLi= document.createElement("li");
//         newLi.innerHTML = input.value;
//         lista.appendChild(newLi);

//         input.value= " ";
//     }
    
// }
// EVENTOS 
// input.addEventListener("keyup", handleKeyUp);

// Numero do cartão
// input do numero do cartão
// nome no cartão
// input do nome no cartão
// validade
// input validade
// cvv
// input cvv

const lbl_numcartao= document.getElementById("numero-cartao-visual")
const txt_numcartao=document.getElementById("numero-cartao")
const lbl_nomecartao=document.getElementById("nome-cartao-visual")
const txt_nomecartao=document.getElementById("nome-cartao")
const lbl_val=document.getElementById("validade-cartao-visual")
const txt_mesval=document.getElementById("mes-validade")
const txt_anoval=document.getElementById("ano-validade")
const lbl_cvv=document.getElementById("codigo-cvv-visual")
const txt_cvv=document.getElementById("codigo-cvv")

// Evento 
txt_numcartao.addEventListener("keyup", mudaTexto);
// Função
function mudaTexto() {
    lbl_numcartao.innerText=txt_numcartao.value
}
// Evento 
txt_nomecartao.addEventListener("keyup", mudaTexto1);
// Função
function mudaTexto1() {
    lbl_nomecartao.innerText=txt_nomecartao.value
}
// Evento
txt_mesval.addEventListener("keyup", mudaTexto2);
txt_anoval.addEventListener("keyup", mudaTexto2);

// Função
function mudaTexto2() {
    lbl_val.innerText=txt_mesval.value+ "/" + txt_anoval.value
}

// Evento 
txt_cvv.addEventListener("keyup", mudaTexto3);
// Função
function mudaTexto3() {
    lbl_cvv.innerText=txt_cvv.value;
}


