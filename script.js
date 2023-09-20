
function lerFormulario(){

    let formulario = document.querySelectorAll("input")
    let espaco = document.getElementById("espaco")

    espaco.innerHTML = `Nome: ${formulario[0].value}
                        Idade: ${formulario[1].value}`
   
}

function calcular(){
    let formulario = document.querySelectorAll("input")
    let espaco2 = document.getElementById("espaco2")
    let saldo = formulario[0].value - formulario[1].value

    if(saldo>0){
    espaco.innerHTML = `Seu saldo é de: <span class="verde">${saldo}</span>`
    }else{
        espaco.innerHTML = `Seu saldo é de: <span class="vermelho">${saldo}</span>`
    }
}

