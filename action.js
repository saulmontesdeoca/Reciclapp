var correo = "";

function loadPage(href){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function validar() {

    var usuario= "";

    correo = document.getElementById("correo_val").value;

    console.log(correo);

    

    if(correo=="omar@gmail.com"){
        console.log(usuario);
        loadPage('mapaT.html');
    }
    else {
        loadPage('mapaU.html');     
    }


    document.getElementById("result").innerHTML=usuario
    

}