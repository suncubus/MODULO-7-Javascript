/*variables*/
let fase = 0;//3 fases 0 1 2
let interruptor;
let num1 = "";
let operador = "";
let num2 = "";

function escribir(elementoPulsado) {
    //recogemos el valor del botón 
    let valor = elementoPulsado.value;  
    let resultado;
    interruptor = comprobar(valor);
    switch(fase){
        case 0:            
            if(interruptor){
                alert("Primero tienes que elegir un número para poder operar con él");
            }else{
                pintarNumero(valor, fase);                
                fase=1;
            }
            break;
        case 1:          
            if(interruptor){
                if(valor != "="){
                    operador += valor;
                    pantalla.innerHTML += valor;  
                    fase=2;
                }else{
                    alert("Tienes que seleccionar un operador válido");
                }            
            }else{
                pintarNumero(valor, fase);           
            }
            break;
        case 2:         
            if(interruptor){
                if(valor != "="){
                    alert("Tienes que seleccionar el operador = para saber la solución");
                }else{
                    resultado = eval(num1+operador+num2);
                    pantalla.innerHTML = resultado;
                    fase=3;
                }
            }else{
                pintarNumero(valor, fase); 
                          
            }
            break;
        case 3:
            borrar();
            pintarNumero(valor, fase);        
            break;
    }

}
function pintarNumero(valor, fase){
    let v = valor;
    let f = fase;
    if(f==2){
        //segundo número
        num2 += v;  
    }else{
        //primer número
        num1 += v;          
    }
    pantalla.innerHTML += v;

}
function comprobar(valor){
    let valor1 = valor;
    let int;
    if(isNaN(valor1)){
        int = true;//es un operador
    }else{
        int=false;//es un número
    }
    return int;
}
function borrar(){
    fase = 0;
    num1 = "";
    operador = "";
    num2 = "";
    pantalla.innerHTML = "";
}

