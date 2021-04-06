//variable para el objeto form
const myForm = document.getElementById('lform');

function validate() {

    //variable para controlar que todas las validaciones estén hechas
    let validator = true;
    
    //variables para los elementos del formulario
    let email = document.forms["lform"]["email"];
    let password = document.forms["lform"]["password"];

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
    //devolvemos si son correctos o no los campos
    return validator;    
}

//funciones para validar formatos
function emailVerify(email) {
  //expresión regular  
	var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //devuelve true si la expresión es correcta
	return expresion.test(email) ? true : false;
}

function passwordVerify(password) {
  //8 caracteres May, min y números
  var expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8}$/;
  
	return expresion.test(password) ? true : false;
}
