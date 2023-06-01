  //EJERCICIO OBLIGATORIO JAVASCRIPT
  // FUNCION CALCULAR VALOR DE LOS PRECIO DEL BOLETO

  document.getElementById("resumen").addEventListener("click", function() {
    var precioTiquet = 200;

    // Obtener el campo de entrada por su ID
    var campoResultado = document.getElementById("resultado");

    // Obtener el elemento <select> por su ID
    var selectElement = document.getElementById("inputState");

    // Obtener la cantidad de boletos por su ID
    var cantidadBoletos = parseInt(document.getElementById("inputCity").value);

    // Verificar que la cantidad de boletos sea un número válido
    if (isNaN(cantidadBoletos)) {
      campoResultado.value = "Ingresa una cantidad válida";
      return;
    }

    // Obtener el valor seleccionado
    var selectedOption = selectElement.value;

    // Realizar acciones basadas en la opción seleccionada
    if (selectedOption === "estudiante") {
      // Calcular el total con descuento para el curso de Estudiante
      var totalPagar = precioTiquet * cantidadBoletos * 0.8;
      campoResultado.value = "Total a pagar: $" + totalPagar;
      console.log("Estudiante - Total a pagar: $" + totalPagar);
    } else if (selectedOption === "trainee") {
      // Calcular el total con descuento para el curso de Trainee
      var totalPagar = precioTiquet * cantidadBoletos * 0.5;
      campoResultado.value = "Total a pagar: $" + totalPagar;
      console.log("Trainee - Total a pagar: $" + totalPagar);
    } else if (selectedOption === "junior") {
      // Calcular el total con descuento para el curso de Junior
      var totalPagar = precioTiquet * cantidadBoletos * 0.15;
      campoResultado.value = "Total a pagar: $" + totalPagar;
      console.log("Junior - Total a pagar: $" + totalPagar);
    } else {
      // Acción para cualquier otra opción seleccionada
      campoResultado.value = "Selecciona una opción válida";
      console.log("Selecciona una opción válida");
    }
  });


  document.getElementById("borrar").addEventListener("click", function() {
    // Obtener el formulario por su ID
    var formulario = document.getElementById("myForm");

    // Restablecer el formulario
    formulario.reset();
  });