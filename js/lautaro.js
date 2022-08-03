//Atributos activos del rival
var vidaRivalActivo = personajes[idRival].puntosVitales;
var poderRivalActivo = personajes[idRival].puntosPoder;

//Atributos activos del jugador
var vidaLautaro = personajes[1].puntosVitales;
var poderLautaro = personajes[1].puntosPoder;

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
    if(vidaLautaro <= 0) {
        document.getElementById("atributosrival").style.display = 'none';
        document.getElementById("menudeataques").style.display = 'none';
        document.getElementById("resumen2").style.display = 'none';
        document.getElementById("resumen").textContent = 'PERDISTE 🎱 (Te quedaste sin vida).';
        document.getElementById("nuevoJuego").style.display = 'block';
    }else if(poderLautaro<=0){
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

//Habilidades de Lautaro
function attack1Lautaro (){
    movimientoDelRival()
    daño = personajes[1].ataqueUnoDaño*reduccion2;
    poder = personajes[1].ataqueUnoCosto;
    swal({
        title: "USASTE ZARPAZO. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderLautaro = poderLautaro - poder;
    document.getElementById("poderLautaroInicial").textContent = "⚔ "+poderLautaro+" PP";
    vidaLautaro = vidaLautaro - daño2;
    document.getElementById("vidaLautaro").textContent = "❤ "+vidaLautaro+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
    }

function attack2Lautaro (){
    movimientoDelRival()
    daño = personajes[1].ataqueDosDaño*reduccion2;
    poder = personajes[1].ataqueDosCosto;
    swal({
        title: "USASTE BOLEADORAS. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderLautaro = poderLautaro - poder;
    document.getElementById("poderLautaroInicial").textContent = "⚔ "+poderLautaro+" PP";
    vidaLautaro = vidaLautaro - daño2;
    document.getElementById("vidaLautaro").textContent = "❤ "+vidaLautaro+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
}
function defendLautaro (){
    movimientoDelRival()
    daño = 0;
    reduccion = personajes[1].defensa;
    poder = personajes[1].defensaCosto;
    daño2 = daño2*reduccion;
    swal({
        title: "USASTE OJOS DE ÁGUILA. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderLautaro = poderLautaro - poder;
    document.getElementById("poderLautaroInicial").textContent = "⚔ "+poderLautaro+" PP";
    vidaLautaro = vidaLautaro - daño2;
    document.getElementById("vidaLautaro").textContent = "❤ "+vidaLautaro+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
}