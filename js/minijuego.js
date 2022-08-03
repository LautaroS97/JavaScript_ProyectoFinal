//Definición de atributos de los personajes
class Personaje {
    constructor(id, nombre, carta, nombrePoder1, nombrePoder2, nombreDefensa, puntosVitales, puntosPoder, ataqueUnoDaño, ataqueUnoCosto, ataqueDosDaño, ataqueDosCosto, defensa, defensaCosto, habilidadPasiva) {
        this.id = id
        this.nombre = nombre;
        this.carta = carta;
        this.nombrePoder1 = nombrePoder1;
        this.nombrePoder2 = nombrePoder2;
        this.nombreDefensa = nombreDefensa;
        this.puntosVitales = puntosVitales;
        this.puntosPoder = puntosPoder;
        this.ataqueUnoDaño = ataqueUnoDaño;
        this.ataqueUnoCosto = ataqueUnoCosto;
        this.ataqueDosDaño = ataqueDosDaño;
        this.ataqueDosCosto = ataqueDosCosto;
        this.defensa = defensa;
        this.defensaCosto = defensaCosto;
    }
}

//Asignación de atributos de los personajes
const personajes = [];
personajes.push(new Personaje(1, 'NARCISO', './img/narciso.png', 'GUADAÑAZO', 'ALIENTO DE FUEGO', 'VUELO EVASIVO', 100, 100, 25, 10, 50, 25, 0, 25));
personajes.push(new Personaje(2, 'LAUTARO', './img/lautaro.png', 'ZARPAZO', 'BOLEADORAS', 'OJOS DE ÁGUILA', 100, 100, 20, 10, 35, 15, 0, 15));
personajes.push(new Personaje(3, 'CIRO', './img/ciro.png', 'ESPADAZO', 'SERPIENTE DE ARENA', 'REGENERACIÓN DE POLVO', 80, 80, 10, 5, 50, 25, 0.8, 10));
personajes.push(new Personaje(4, 'ALEK', './img/alek.png', 'TRIDENTAZO', 'BRAZO-ARPÓN', 'VISIÓN DE HIELO', 120, 80, 25, 10, 45, 20, 0.7, 5));
personajes.push(new Personaje(5, 'MELTA', './img/melta.png', 'HACHAZO', 'DESCARGA A TIERRA', 'BLOQUEO DIRECTO', 120, 120, 25, 10, 50, 25, 0.3, 5));
personajes.push(new Personaje(6, 'TOGO', './img/togo.png', 'FLECHAZO', 'DISPARO DE FALANGES', 'ESCUDO DE HUESOS', 100, 120, 25, 10, 50, 25, 0.6, 25));

//Convertir a JSON
const atributos = JSON.stringify(personajes);
console.log(atributos)

//Asignación de rival
function asignarRival(rival) {
    return rival[Math.floor(Math.random()*rival.length)]
}

let rivales = ['NARCISO', 'LAUTARO', 'CIRO','ALEK','MELTA','TOGO'];
let rivalAsignado = (asignarRival(rivales));
console.log(rivalAsignado);

//Mostrar rival asignado
function mostrarRival(lista, personaje){
    return lista.find(objeto => objeto.nombre === personaje);
}
const oponente = mostrarRival(personajes, rivalAsignado);
let cartaRival = oponente.carta;
document.getElementById("oponente").src = cartaRival;

//Extraer atributos rival del JSON
let idRival = oponente.id - 1;

fetch('js/data.json')
    .then((resp)=> resp.json())
    .then((data)=> {
        var vidaRival = data[idRival].puntosVitales;
        document.getElementById("vidaRival").textContent = "❤ "+vidaRival+" PV";
        var poderRival = data[idRival].puntosPoder;
        document.getElementById("poderRival").textContent = "⚔ "+poderRival+" PP";
    })

//Comenzar
function mostrarAtaques(){
    document.getElementById("atributosjugador").style.display = 'block';
    document.getElementById("atributosrival").style.display = 'block';
    document.getElementById("menudeataques").style.display = 'block';
    document.getElementById("comenzar").style.display = 'none';
    document.getElementById("reducirespacio1").style.display = 'none';
    document.getElementById("elegiste").style.display = 'none';
}