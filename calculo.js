let valorTicket=200;
let categoriaEstudiante= 0.80;
let categoriaTrainee= 0.50;
let categoriaJunior= 0.15;
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");

const cantidadEntradas=document.getElementById("cantidadEntrada");
const btnResumen=document.getElementById("btnResumen");
const categoria=document.getElementById("inputState");
const totalCompra=document.getElementById("totalCompra");

function total_a_pagar(){
  
     valorTicket = (cantidadEntradas.value)*valorTicket;

     
   
    if (categoria.value=="1") {
        valorTicket=valorTicket - (categoriaEstudiante * valorTicket);
    }
    if (categoria.value=="2") {
        valorTicket=valorTicket - (categoriaTrainee * valorTicket);
    }
    if (categoria.value=="3") {
        valorTicket=valorTicket - (categoriaJunior * valorTicket);
    }
    else {
        valorTicket=valorTicket - (categoriaEstudiante * valorTicket);
    }

    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    totalCompra.innerHTML = (valorTicket);

}




