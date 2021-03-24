/*swal ( "Oops" ,  "Something went wrong!" ,  "error" )*/

/*EJERCICIO 1*/
/********************************************************************************************/
let myName = ["P","A","T","R","I","C","I","A"];

function myNameF(){
    let i;
    let txt = "";
    for(i=0;i<myName.length;i++){
        //console.log(myName[i]);
        txt += myName[i];
    }
    //ventana emergente Sweet Alert
    swal({
        title: "Mi Nombre: ",
        text: txt,
        icon: "OK",
      });
}
/*EJERCICIO 2*/
/********************************************************************************************/
function conVocF(){
    let txt = "";
    for(i=0;i<myName.length;i++){
        if( myName[i]=="A" || myName[i]=="E" || myName[i]=="I" || myName[i]=="O" || myName[i]=="U"){
            txt += `He encontrado una vocal: ${myName[i]}\n`;
            //console.log(`He encontrado una vocal: ${myName[i]}`);
        }else{
            txt += `He encontrado una consonante: ${myName[i]}\n`;
            //console.log(`He encontrado una consonante: ${myName[i]}`);
        }    
    }
    //ventana emergente Sweet Alert
    swal({
        title: "Consonantes y Vocales: ",
        text: txt,
        icon: "OK",
    });
}
/*EJERCICIO 3*/
/********************************************************************************************/
let numLetters = new Map();

function countF(){
    //llamamos a la función para contar las letras
    contarLetras(myName);

    let txt = "";

    //mostrar map
    for (let [key, value] of numLetters) {  
        txt += `${key} : ${value} \n`;
        //console.log(key + ': ' + value);
    }
    swal({
        title: "Contar letras: ",
        text: txt,
        icon: "OK",
    });
}

function contarLetras(myName) {
    let allLetters = myName;
    let j;
    let num = 0;
    //recorro array del nombre
    for(j=0;j<allLetters.length;j++){
        //comparo si existe esta letra en el map
        if(numLetters.has(allLetters[j])){
            //existe, sumo
            num = numLetters.get(allLetters[j]);
            num++;
            numLetters.set(allLetters[j],num);
        }else{
            //no existe, creo
            numLetters.set(allLetters[j],1);
        }    
    }  
}
/*EJERCICIO 4*/
/********************************************************************************************/

function nomSurF(){
    let mySurname = ["G","A","R","C","I","A"];
    let fullName = new Array();
    let txt = "";
    let i;
    
    //concateno los dos arrays y meto un espacio en medio
    fullName = myName.concat(" ",mySurname);
    //console.log(fullName);

    for(i=0;i<fullName.length;i++){
        txt += fullName[i];
    }

    swal({
        title: "Nombre y Apellidos: ",
        text: txt,
        icon: "OK",
    });
}


/*EJERCICIO 5*/
/********************************************************************************************/
let textString = 'Una dirección de correo electrónico es la dirección que utiliza para Recibir y enviar correos electrónicos. Se Muestra a los destinatarios de sobre correos electrónicos para que sepan quién le envía un correo electrónico. Cada dirección de correo electrónico Sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero Reducir texto <br> eliminarlas en cualquier momento. Una dirección de correo electrónico consisten en el signo @ (arroba), el número de usuario delante y el dominio detrás, por Ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro Ejemplo se ionos.es. Esta información varía de proveedor a proveedor, por lo que una Parte del dominio també Puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos Proveedores. Si ha registrado sume propio dominio, por Ejemplo, www.el-número-de-sobre-sueños.es, las direcciones de correo electrónico que configura para el dominio el Tienen como Parte del dominio (número-de-usuario@el-número-de-sobre-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El número de usuario se la parte de una dirección de correo electrónico que Reducir texto <br> seleccionar libremente en la medida de lo posible. Puede, por Ejemplo, utilizar sume propio número o el número o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio Deseada ya esté registrada. En este caso, debera considerar alternativas para el número de usuario de super dirección de correo electrónico. Si utiliza sume propio dominio, estas restricciones no se aplican Porque Sólo Usted Reducir texto <br> crear direcciones de correo electrónico que coincidan con super propio dominio. En resumen, nombre-de-usuario@ionos.es es un email '; 

let mailString = new Array();

function emailF(){
    let txt = "";
    let i;

    createArray();
    deleteInvalid();

    //console.log(mailString);

    for(i=0;i<mailString.length;i++){
        txt += `${mailString[i]}\n`;
    }

    swal({
        title: "Direcciones Email: ",
        text: txt,
        icon: "OK",
    });
}


function createArray(){
    let k;
    let temporal ="";
    let interruptor = false;
    for(k=0;k<=textString.length;k++){
        //divido el string, quito espacios, cada palabra es un elemento 
        if(textString.charAt(k)!=" "){  
            //quito los caracteres ()
            if((textString.charAt(k) !== "(") && (textString.charAt(k) !== ")") && (textString.charAt(k) !== ":") ){
                temporal += textString.charAt(k);    
                //compruebo que la palabra tiene una arroba
                if(textString.charAt(k)==="@"){
                    interruptor = true;        
                } 
            }                 
        }else{
            if(interruptor==true){
                mailString.push(temporal);                
            }
            temporal = "";
            interruptor=false;
        }        
    }
}
function deleteInvalid(){
    let i;
    let l;        
    for (i in mailString) {
        //elimino textos que tengan arroba pero menos de 2 caracteres
        if(mailString[i].length<2){
            mailString.splice(i,1);
        }
        //elimino el punto final
        if(mailString[i].charAt(mailString[i].length-1)==="."){
            mailString[i] =  mailString[i].substring(0, mailString[i].length-1);
        }        
        //elimino repetidos
        for(l=i+1;l<mailString.length;l++){
            if(mailString[i]===mailString[l]){
                mailString.splice(i,1);
            }
        }
 
    }     
}


