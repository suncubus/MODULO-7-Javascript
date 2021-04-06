//variable para el objeto form
const myForm = document.getElementById('lform');

function validate() {

    //variable para controlar que todas las validaciones estén hechas
    let validator = true;
    
    //variables para los elementos del formulario
    let search = document.forms["lform"]["search"];

    //validaciones email
    if(search.value == "") {
          search.classList.add("is-invalid");
          document.getElementById("invalidSearch").textContent = "Es campo es obligatorio";
          validator = false;
      }else if(search.value.length < 3){
          search.classList.add("is-invalid");
          document.getElementById("invalidSearch").textContent = "Tiene que tener más de 3 caracteres";
          validator = false;
    }

    return validator;    
}


