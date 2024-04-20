function calcularCompra() {
    var resultado = document.getElementById("resultadoCompra")
    var numbooks = parseInt(document.getElementById("numBooks").value)
    if(numbooks >=7){
        valorCompra = 15*numbooks
    }
    else {
        valorCompra = 22*numbooks
    }
    resultado.innerText = `O valor da sua compra é de ${valorCompra} reais`
}

function calcularMulta(){
    var resultadoMulta = document.getElementById('resultadoMulta')
    var velocidade = parseInt(document.getElementById('velocidade').value)
    var multa = 0
    
    if(velocidade >60) {
        multa = (velocidade - 60)*100
    }
    resultadoMulta.innerText = `O valor da sua multa é de ${multa} reais`
}

const cargo = document.getElementById('cargo').value
let salario = 3_000

switch 
