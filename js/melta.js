//Atributos activos del rival
var vidaRivalActivo = personajes[idRival].puntosVitales;
var poderRivalActivo = personajes[idRival].puntosPoder;

//Atributos activos del jugador
var vidaMelta = personajes[4].puntosVitales;
var poderMelta = personajes[4].puntosPoder;

//Aleatorizador de ataque del rival
let inicio = 1;
let fin = 3;

function movimientoDelRival(){
    var x = inicio+Math.floor(Math.random()*fin);
    console.log(x);
    if(x == 1){
        reduccion2 = 1;
        daño2 = personajes[idRival].ataqueUnoDaño;
        poder2 = personajes[idRival].ataqueUnoCosto;
        movimientoRival = personajes[idRival].nombrePoder1;
    }else if(x == 2){
        reduccion2 = 1;
        daño2 = personajes[idRival].ataqueDosDaño;
        poder2 = personajes[idRival].ataqueDosCosto;
        movimientoRival = personajes[idRival].nombrePoder2;}
    else{(x == 3)
        reduccion2 = personajes[idRival].defensa;
        daño2 = 0;
        poder2 = personajes[idRival].defensaCosto;
        movimientoRival = personajes[idRival].nombreDefensa;}
    }

//Resumen juego
function resumenJuego(){
    if(vidaMelta <= 0) {
        document.getElementById("atributosrival").style.display = 'none';
        document.getElementById("menudeataques").style.display = 'none';
        document.getElementById("resumen2").style.display = 'none';
        document.getElementById("resumen").textContent = 'PERDISTE 🎱 (Te quedaste sin vida).';
        document.getElementById("nuevoJuego").style.display = 'block';
    }else if(poderMelta<=0){
        document.getElementById("atributosrival").style.display = 'none';
        document.getElementById("menudeataques").style.display = 'none';
        document.getElementById("resumen2").style.display = 'none';
        document.getElementById("resumen").textContent = 'PERDISTE 🎱 (Te quedaste sin energía).';
        document.getElementById("nuevoJuego").style.display = 'block';
    }else if(poderRivalActivo<=0){
        document.getElementById("atributosrival").style.display = 'none';
        document.getElementById("menudeataques").style.display = 'none';
        document.getElementById("resumen2").style.display = 'none';
        document.getElementById("resumen").textContent = 'GANASTE 🏆 (Tu rival se quedó sin energía).';
        document.getElementById("nuevoJuego").style.display = 'block';
    }else if(vidaRivalActivo<=0){
        document.getElementById("atributosrival").style.display = 'none';
        document.getElementById("menudeataques").style.display = 'none';
        document.getElementById("resumen2").style.display = 'none';
        document.getElementById("resumen").textContent = 'GANASTE 🏆 (Tu rival se quedó sin vida).';
        document.getElementById("nuevoJuego").style.display = 'block';
    }else{
        continuar = 1;
    }
}

//Habilidades de Melta
function attack1Melta (){
    movimientoDelRival()
    daño = personajes[4].ataqueUnoDaño*reduccion2;
    poder = personajes[4].ataqueUnoCosto;
    swal({
        title: "USASTE HACHAZO. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderMelta = poderMelta - poder;
    document.getElementById("poderMeltaInicial").textContent = "⚔ "+poderMelta+" PP";
    vidaMelta = vidaMelta - daño2;
    document.getElementById("vidaMelta").textContent = "❤ "+vidaMelta+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
    }

function attack2Melta (){
    movimientoDelRival()
    daño = personajes[4].ataqueDosDaño*reduccion2;
    poder = personajes[4].ataqueDosCosto;
    swal({
        title: "USASTE DESCARGA A TIERRA. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderMelta = poderMelta - poder;
    document.getElementById("poderMeltaInicial").textContent = "⚔ "+poderMelta+" PP";
    vidaMelta = vidaMelta - daño2;
    document.getElementById("vidaMelta").textContent = "❤ "+vidaMelta+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
}
function defendMelta (){
    movimientoDelRival()
    daño = 0;
    reduccion = personajes[4].defensa;
    poder = personajes[4].defensaCosto;
    daño2 = daño2*reduccion;
    swal({
        title: "USASTE BLOQUEO DIRECTO. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderMelta = poderMelta - poder;
    document.getElementById("poderMeltaInicial").textContent = "⚔ "+poderMelta+" PP";
    vidaMelta = vidaMelta - daño2;
    document.getElementById("vidaMelta").textContent = "❤ "+vidaMelta+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
}