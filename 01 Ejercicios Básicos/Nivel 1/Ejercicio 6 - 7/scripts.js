//EJERCICIO 6
let frase = "Tengo un coche de color azul";

//reemplazar verde por azul
function mostrarColor(){
    let res1 = frase.replace("azul", "verde");
    document.getElementById("resultado1").innerHTML =   res1;
}

//reemplazar o por u
function mostrarVocales(){
    let res2 = "";
    let i;
    for(i=0;i<frase.length;i++){
        if(frase[i] == "o"){
            res2 += "u";
        }else{
            res2 += frase[i];
        }        
    }
    resultado2.innerHTML = res2; 
}

function mostrarVocales2(){
    let res4 = frase.replace(/o/g,"u");
    resultado4.innerHTML = res4; 
}
//EJERCICIO 7
let lista = ["mesa", "silla", "ordenador", "libreta"];

function mostrarListado(){
    let i;
    let res3 = "";
    for(i=0;i<lista.length;i++){
        res3 += `El objeto ${lista[i]} está en la posición ${i} <br>`;
    }
    resultado3.innerHTML = res3; 
    lista.forEach(element => console.log(element));
}

function mostrarListado2(){
   lista.forEach(mostrar);
}
function mostrar(item, index) {
    resultado5.innerHTML += "El objeto " + item + " esta en la posición " + index + "<br>";
}

