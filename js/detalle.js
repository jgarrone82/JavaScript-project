// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () { 
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "../info.json"
  }).done(function (resultado) {

    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    
    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
    var id = location.search.match(/id=(\d)*/)[1]

    //Busca el elemento en el arreglo
    evento = eventos.find(function (element) {
      return element.id == id
    })

    //Modifica el DOM agregando el html generado dentro del div con id=evento    
    var html = `<div class="col-md-6">
                <div class="card flex-md-row mb-4  h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                    <h3 class="mb-0">
                      ${evento.nombre}
                    </h3>
                    <div class="mb-1 text-muted">${evento.fecha}</div>                    
                    <p class="card-text mb-auto">Lugar: ${evento.lugar}</p
                    <p class="card-text mb-auto">Descripción: ${evento.descripcion}</p>
                    <p class="card-text mb-auto">Costo: ${evento.precio}</p>
                    <p class="card-text mb-auto">Invitados: ${evento.invitados}</p>                    
                  </div>
                </div>
              </div>`
    document.getElementById("evento").innerHTML = html
  });
});
