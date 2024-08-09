
//TRABAJANDO CON FUNCTION
// $(document).ready(() => {
//     $(".text-body-secondary").click(function() {
//       var idBoton = $(this).attr("id");
//       $("#detalles" + idBoton).toggle();
//     });


//   $(".btn-close").click(function() {
//     let idDetalle = $(this).parents()[1].id;
//     $(`#${idDetalle}`).toggle();
//     });
// });


//TRABAJANDO CON FUNCIONES FLECHAS

$(document).ready(() => {

  $(".text-body-secondary").click((e) => {
    var idBoton = $(e.target).attr("id"); // Aquí usamos e.target en lugar de this
    $("#detalles" + idBoton).toggle();
  });

  $(".btn-close").click((e) => {
    let idDetalle = $(e.target).parents()[1].id; // Aquí usamos e.target en lugar de this
    $(`#${idDetalle}`).toggle();
  });

});