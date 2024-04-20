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

function calc(){
const cargo = document.getElementById('valorCargo').value;
let salario = 3_000
switch (cargo){
    case "junior":
        salario *=1
    break;
    case "pleno":
        salario *=2
    case "senior":
        salario *=3
    break;
    case "techLead":
        salario *=4
    break;
    case "diretor":
        salario *=10
    break;
    default:
        salario = 0
    resultado.innerText='este cargo não existe'
}
    resultado.innerText=`O salario de ${cargo} é de R$ ${salario}`;
}
