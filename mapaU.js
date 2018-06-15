function mapaUFun(){
var direcciones = [
    {
        "direccion":"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBAxCojP44eRH4mSGUD92mPtvIMmxJSb6U&origin=Mercado+36+Tepito&waypoints=Lorenzo+Boturini+428&waypoints=Jose+Maria+Mata+19&destination=Calle+Valencia+35&avoid=tolls|highways",
        "perfil":"perfil1.jpg",
        "nombre":" René",
      },
    {
        "direccion":"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBAxCojP44eRH4mSGUD92mPtvIMmxJSb6U&origin=Museo+del+Instituto+de+Geología+de+la+UNAM&waypoints=Plaza+Garibaldi|Jose+Maria+Mata+19&destination=Bioparque+Estrella+Oficina&avoid=tolls|highways",
        "perfil":"perfil2.jpg",
        "nombre":" Luis",
      },
    {
        "direccion":"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBAxCojP44eRH4mSGUD92mPtvIMmxJSb6U&origin=Museo+del+Instituto+de+Geología+de+la+UNAM&waypoints=Plaza+Garibaldi|Jose+Maria+Mata+19&destination=Bioparque+Estrella+Oficina&avoid=tolls|highways",
        "nombre":" Hernan",
      },
    {
        "direccion":"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBAxCojP44eRH4mSGUD92mPtvIMmxJSb6U&origin=Amatlán+18&waypoints=Zamora+177,Int.101&destination=Atlixco+5&avoid=tolls|highways",
        "perfil":"perfil4.jpg",
        "nombre":" José Luis",
      },  

    ];

    for(var i=0; i<direcciones.length; i++){
        var content = "";
        content += "<div>";
        content += "<iframe width='100%' height='250' frameborder='0' style='border:0' src=" + direcciones[i].direccion + " allowfullscreen></iframe><br>";
        content += "<img class='perfil' src='perfiles/" + direcciones[i].perfil +"'/>";
        content += "<p>" + direcciones[i].nombre + "</p>";
        // content += "<img class='imgtype' src='pokedex/img/types/" + amigos[i].type +"'/>";
        content += "</div>";

        
    }
    document.getElementById("result").innerHTML = content;

}

 