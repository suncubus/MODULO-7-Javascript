//FUNCIÓN CALCULADORA

function calcular(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operador").value;
    let resultado = calculadora(operator,num1,num2);
    respuesta.innerHTML = resultado;
}


function calculadora(operator,num1,num2){    

    let res;
    switch (operator){
        case "+":
            res = opSuma(num1,num2);
            break;
        case "-":
            res = opResta(num1,num2);
            break;   
        case "*":
            res = opMultiplicacion(num1,num2);
            break;
        case "/":
            res = opDivision(num1,num2);
            break;
        case "%":
            res = opResto(num1,num2);
            break;
        default:
        alert("Introduce un operador correcto");
    }
    return res;
}

function opSuma(num1,num2){
    return num1 + num2;
}
function opResta(num1,num2){
    return num1 - num2;
}
function opMultiplicacion(num1,num2){
    return num1 * num2;
}
function opDivision(num1,num2){
    return num1 / num2;
}
function opResto(num1,num2){
    return num1 % num2;
}
