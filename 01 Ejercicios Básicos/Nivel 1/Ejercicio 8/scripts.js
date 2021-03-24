
function muestraDatos(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operador").value;
    let resultado = calculadora(operator,num1,num2);
    document.getElementById("respuesta").innerHTML = resultado;
}

function calculadora(operador,num1,num2){  
    let n1 = parseInt(num1);  
    let n2 = parseInt(num2);  
    let op = operador;  

    let resultado;
    resultado = eval(n1 + op + n2);

    return resultado;   
    
}



/*OTRA MANERA*/
function muestraDatos2(){    
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operador").value;
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
        default:
        alert("Introduce un operador correcto");
    }
    document.getElementById("respuesta2").innerHTML = res;
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
