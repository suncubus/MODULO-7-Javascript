$.validator.setDefaults( {
    submitHandler: function () {
    alert( "submitted!" );
    }
    } );
/*VALIDACIÓN*/
$("#lform").validate({
    rules: {
        usrName: "letrasEspacios",
        surName: "letrasEspacios",
        user:{
            minlength: 3
        },
        password: "ExpPassword",
        password2:{
            equalTo:"#password",
            ExpPassword:true
        },
        email:{
            email:true
        }
      },
      messages:{
        usrName:{
            required: "El nombre es obligatorio"
        },
        surName:{
            required: "El apellido es obligatorio"
        },
        user:{
            required: "Este campo es obligatorio",
            minlength: jQuery.validator.format("Mínimo tiene que tener {0} caracteres")
        },
        email:{
            required: "Este campo es obligatorio",
            email:"Introduce una dirección válida"
        },
        password:{
            required: "Este campo es obligatorio",            
        },
        password2:{
            required: "Este campo es obligatorio",          
            equalTo: "Las contraseñas tienen que coincidir"
        }
      }

});

//Entre8 y 16 caracteres Dígitos, minúsculas y mayúsculas
jQuery.validator.addMethod("ExpPassword", function(value, element) {
    return this.optional(element) ||  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value);
}, "Debe contener 1 mayuscula, 1 minuscula y algún número"); 



/*Solo letras*/
jQuery.validator.addMethod("letrasEspacios", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
}, "Solo se pueden introducir letras y espacios"); 


  
