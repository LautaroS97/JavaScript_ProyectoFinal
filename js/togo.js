//Atributos activos del rival
var vidaRivalActivo = personajes[idRival].puntosVitales;
var poderRivalActivo = personajes[idRival].puntosPoder;

//Atributos activos del jugador
var vidaTogo = personajes[5].puntosVitales;
var poderTogo = personajes[5].puntosPoder;

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
    if(vidaTogo <= 0) {
        document.getElementById("atributosrival").style.display = 'none';
        document.getElementById("menudeataques").style.display = 'none';
        document.getElementById("resumen2").style.display = 'none';
        document.getElementById("resumen").textContent = 'PERDISTE 🎱 (Te quedaste sin vida).';
        document.getElementById("nuevoJuego").style.display = 'block';
    }else if(poderTogo<=0){
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

//Habilidades de Togo
function attack1Togo (){
    movimientoDelRival()
    daño = personajes[5].ataqueUnoDaño*reduccion2;
    poder = personajes[5].ataqueUnoCosto;
    swal({
        title: "USASTE FLECHAZO. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderTogo = poderTogo - poder;
    document.getElementById("poderTogoInicial").textContent = "⚔ "+poderTogo+" PP";
    vidaTogo = vidaTogo - daño2;
    document.getElementById("vidaTogo").textContent = "❤ "+vidaTogo+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
    }

function attack2Togo (){
    movimientoDelRival()
    daño = personajes[5].ataqueDosDaño*reduccion2;
    poder = personajes[5].ataqueDosCosto;
    swal({
        title: "USASTE DISPARO DE FALANGES. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderTogo = poderTogo - poder;
    document.getElementById("poderTogoInicial").textContent = "⚔ "+poderTogo+" PP";
    vidaTogo = vidaTogo - daño2;
    document.getElementById("vidaTogo").textContent = "❤ "+vidaTogo+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
}
function defendTogo (){
    movimientoDelRival()
    daño = 0;
    reduccion = personajes[5].defensa;
    poder = personajes[5].defensaCosto;
    daño2 = daño2*reduccion;
    swal({
        title: "USASTE ESCUDO DE HUESOS. \n Y TU RIVAL USÓ "+movimientoRival+"...",
        text: "- Inflingiste  "+daño+"  de daño y recibiste "+daño2+".\n - Consumiste "+poder+" de energía y tu rival "+poder2+".",
        button: "CONTINUAR",
        })
    vidaRivalActivo = vidaRivalActivo - daño;
    document.getElementById("vidaRival").textContent = "❤ "+vidaRivalActivo+" PV";
    poderTogo = poderTogo - poder;
    document.getElementById("poderTogoInicial").textContent = "⚔ "+poderTogo+" PP";
    vidaTogo = vidaTogo - daño2;
    document.getElementById("vidaTogo").textContent = "❤ "+vidaTogo+" PV";
    poderRivalActivo = poderRivalActivo - poder2;
    document.getElementById("poderRival").textContent = "⚔ "+poderRivalActivo+" PP";
    resumenJuego();
}