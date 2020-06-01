// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var proximos = [];
var pasados = [];
var eventos;
var hoy;
var html_proximos="";
var html_pasados="";

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url:"../info.json"
  }).done(function (resultado) {
    //Guarda el resultado en variables
  hoy = resultado.fechaActual;
  eventos = resultado.eventos;  
  
  
  //Clasifica los eventos segun la fecha actual del JSON
  for (var i = 0; i < eventos.length; i++) {
    if (eventos[i].fecha < hoy) {
        pasados.push(eventos[i]);
    } else {
        proximos.push(eventos[i]);
    }
}
  //Ordena los eventos segun la fecha (los mas cercanos primero)
  pasados = pasados.sort(function (x, y) {
    if (x.fecha < y.fecha) {
        return 1;
    }
    return -1;
});
  //Extrae solo dos eventos
  pasados = pasados.slice(0, 2);  

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  proximos = proximos.sort(function (x, y) {
    if (x.fecha > y.fecha) {
        return 1;
    }
    return -1;
});
  //Extrae solo dos eventos
  proximos = proximos.slice(0, 2);

  //Crea un string que contenga el HTML que describe el detalle del evento
  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado
  for (var j = 0; j < proximos.length; j++) {
    html_proximos += `<div class="col-md-6">
                <div class="card flex-md-row mb-4  h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                    <h3 class="mb-0">
                      <a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a>
                    </h3>
                    <div class="mb-1 text-muted">${proximos[j].fecha}</div>
                    <p class="card-text mb-auto">${proximos[j].descripcion}
                    </p>
                  </div>
                </div>
              </div>`
}
document.getElementById("proximos").innerHTML = html_proximos
  
  //Crea un string que contenga el HTML que describe el detalle del evento
  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado
  for (var j = 0; j < pasados.length; j++) {
    html_pasados += `<div class="col-md-6">
                <div class="card flex-md-row mb-4  h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                    <h3 class="mb-0">
                      <a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a>
                    </h3>
                    <div class="mb-1 text-muted">${pasados[j].fecha}</div>
                    <p class="card-text mb-auto">${pasados[j].descripcion}
                    </p>
                  </div>
                </div>
              </div>`
}
document.getElementById("pasados").innerHTML = html_pasados

});
});
