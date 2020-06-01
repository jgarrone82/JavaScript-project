// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  var errores = false;
  document.getElementById("errornombres").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("errorContrasena").innerHTML = "";
  document.getElementById("errorConfirmacion").innerHTML = "";
  document.getElementById("errorTipo").innerHTML = "";
  document.getElementById("errorAcepto").innerHTML = "";
    
  //Expresion regular del correo
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value.trim())){
    document.getElementById("errorEmail").innerHTML = "Campo inválido";    
    errores=true;
  }  

  if (!formulario.acepto.checked){
    document.getElementById("errorAcepto").innerHTML = "Este campo es obligatorio";
    errores=true;
  }

  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerHTML = "Este campo es obligatorio";
    errores=true;
  }

  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerHTML = "Este campo es obligatorio";
    errores=true;
  }

  if (formulario.contrasena.value.trim().length < 6) {
    document.getElementById("errorContrasena").innerHTML = "Debe tener al menos 7 caracteres";
    errores=true;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerHTML = "No coincide con contraseña";
    errores=true;
  }

  if (formulario.tipo.value == "-1") {
    document.getElementById("errorTipo").innerHTML = "Este campo es obligatorio";
    errores=true;
  }

  if (errores == true) {
    return false;
  }
  else {
    return true;
  }

}
