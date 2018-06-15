function show_driver_signup() {
    var toggle2 = document.getElementById("myCheck1");
    var toggle = document.getElementById("myCheck2");


    if(toggle.checked == true) {
        result = "<div class='ingresa_text_div'>" +
        "<p class='ingresa_text' >Cuentanos de tu vehiculo:</p>" +
        "</div>" +

        "<div class='input-group mb-3 drop_div'>" +
        "<div class='input-group-prepend'>" +
        "<label class='input-group-text' for='inputGroupSelect01'>Tipo de vehiculo:</label>" +
        "</div>" +
        "<select class='custom-select' id='inputGroupSelect01'>" +
        "<option selected>Choose...</option>" +
        "<option value='1'>Coche</option>" +
        "<option value='2'>Camioneta</option>" +
        "<option value='3'>Bicileta</option>" +
        "<option value='3'>Motocicleta</option>" +
        "</select>" +
        "</div>" +
        "<div class='input-group mb-3 drop_div'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroup-sizing-default'>Capacidad (Kg):</span>" +
        "</div>" +
        "<input type='text' class='form-control' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
        "</div>";
    } else if(toggle2.checked == true) {
        result = ""
    }
        document.getElementById("result").innerHTML = result;
}



function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }