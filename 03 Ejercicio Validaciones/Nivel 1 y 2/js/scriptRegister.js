/****provincias, municipios y código postales******/
let prov = document.getElementById('ps-prov');
let mun = document.getElementById('ps-mun');
let code = document.getElementById('code');

// Creamos PS
new Pselect().create(prov, mun);

//Mostramos código postal
document.getElementById('ps-mun').addEventListener('change', function onChange() {
      code.value =  document.getElementById('ps-mun').value;
});

/****    FORMULARIO    ******/
//variable para el objeto form
const myForm = document.getElementById('lform');

function validate() {

    //variable para controlar que todas las validaciones estén hechas
    let validator = true;

    //eliminamos la clase invalid de todo el formulario
    myForm.classList.remove('is-invalid');

    //variables para los elementos del formulario
    let email = document.forms["lform"]["email"];
    let password = document.forms["lform"]["password"];
    let password2 = document.forms["lform"]["password2"];
    let usrName = document.forms["lform"]["usrName"];
    let surName = document.forms["lform"]["surName"];
    let user = document.forms["lform"]["user"];
    let street = document.forms["lform"]["street"];
    let numStreet = document.forms["lform"]["numStreet"];
    let floor = document.forms["lform"]["floor"];
    let letter = document.forms["lform"]["letter"];
 
    //validaciones nombre
    if(usrName.value == "") {
          usrName.classList.add("is-invalid");
          document.getElementById("invalidUsrName").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(!txtVerify(usrName.value)){
          usrName.classList.add("is-invalid");
          document.getElementById("invalidUsrName").textContent = "Solo puedes introducir letras";
          validator = false;
    }
    //validaciones apellido
    if(surName.value == "") {
          surName.classList.add("is-invalid");
          document.getElementById("invalidSurName").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(!txtVerify(usrName.value)){
          surName.classList.add("is-invalid");
          document.getElementById("invalidSurName").textContent = "Solo puedes introducir letras";
          validator = false;
    }
    //validaciones calle
    if(street.value == "") {
          street.classList.add("is-invalid");
          document.getElementById("invalidStreet").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(!txtVerify(street.value)){
          street.classList.add("is-invalid");
          document.getElementById("invalidStreet").textContent = "Solo puedes introducir letras";
          validator = false;
    }
    //validaciones número de calle
    if(numStreet.value == "") {
          numStreet.classList.add("is-invalid");
          document.getElementById("invalidNumStreet").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(!numVerify(numStreet.value)){
          numStreet.classList.add("is-invalid");
          document.getElementById("invalidNumStreet").textContent = "Solo puedes introducir números";
          validator = false;
    }
    //validaciones piso
    if(floor.value == "") {
            floor.classList.add("is-invalid");
            document.getElementById("invalidFloor").textContent = "Es campo es obligatorio";
            validator = false;
    }else if(!numVerify(floor.value) && floor.value != ""){
            floor.classList.add("is-invalid");
            document.getElementById("invalidFloor").textContent = "Solo puedes introducir números";
            validator = false;
      }
    //validaciones letra
    if(letter.value == "") {
            letter.classList.add("is-invalid");
            document.getElementById("invalidLetter").textContent = "Es campo es obligatorio";
            validator = false;
    }else if(!txtVerify(letter.value) && letter.value != ""){
            letter.classList.add("is-invalid");
            document.getElementById("invalidLetter").textContent = "Solo puedes introducir letras";
            validator = false;
      }
    //validaciones de provincia, saber si está seleccionado
    if(prov.value == -1){
            prov.classList.add("is-invalid");
            document.getElementById("invalidProv").textContent = "Tienes que seleccionar la provincia";
            validator = false;
     }
     //validaciones de municipio, saber si está seleccionado
    if(mun.value == -1){
            mun.classList.add("is-invalid");
            document.getElementById("invalidMun").textContent = "Tienes que seleccionar el municipio";
            validator = false;
     }
    //validaciones nombre usuario
    if(user.value == "") {
          user.classList.add("is-invalid");
          document.getElementById("invalidUser").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(!userVerify(user.value)){
          user.classList.add("is-invalid");
          document.getElementById("invalidUser").textContent = "Solo puedes introducir letras";
          validator = false;
    }
    //validaciones email
    if(email.value == "") {
          email.classList.add("is-invalid");
          document.getElementById("invalidEmail").textContent = "Es campo es obligatorio";
          validator = false;
      }else if(!emailVerify(email.value)){
          email.classList.add("is-invalid");
          document.getElementById("invalidEmail").textContent = "Tienes que insertar un formato correcto";
          validator = false;
    }
    //validaciones password
    if(password.value == "") {
          password.classList.add("is-invalid");
          document.getElementById("invalidPassword").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(!passwordVerify(password.value)){
          password.classList.add("is-invalid");
          document.getElementById("invalidPassword").textContent = "Tiene que contener 8 caracteres, mayúsculas, minúsculas y números";
          validator = false;
    }
    if(password2.value == "") {
          password2.classList.add("is-invalid");
          document.getElementById("invalidPassword2").textContent = "Es campo es obligatorio";
          validator = false;
    }else if(password.value != password2.value){
          password.classList.add("is-invalid");
          password2.classList.add("is-invalid");
          document.getElementById("invalidPassword").textContent = "Los campos de password deben coincidir";
          validator = false;
    }
    //devolvemos si son correctos o no los campos
    return validator;    
}

//funciones para validar formatos
function txtVerify(name){
    //solo letras
    var expresion = /^[a-zA-Z0]/;    
    return expresion.test(name) ? true : false;
}
function numVerify(num){
    //solo números
    var expresion = /^[0-9]/;    
    return expresion.test(num) ? true : false;
}

function userVerify(user){
    //solo una palabra sin espacios letras y números y caracteres especiales
    var expresion = /^[a-zA-Z0-9]/;    
    return expresion.test(user) ? true : false;
}
function emailVerify(email) {
    //expresión regular  
    var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //devuelve true si la expresión es correcta
    return expresion.test(email) ? true : false;
}

function passwordVerify(password) {
    //8 caracteres May 1 mínimo, min y números
    var expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8}$/;    
    return expresion.test(password) ? true : false;
}

//mostrar u ocultar password
function fShowPassword(){
      if(password.type === "password"){
            //mostrar textos
            password.type = "text";            
      }else{
            //ocultar
            password.type = "password";            
      }
}
// eliminar los invalid de todo el form
myForm.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);



      