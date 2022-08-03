//Seleccionar a Narciso
function seleccionarNarciso() {
    snarciso = localStorage.getItem('clicknarciso');
    if(snarciso == null) {
        $("#lautaro").css("border", "none");
        $("#alek").css("border", "none");
        $("#ciro").css("border", "none");
        $("#melta").css("border", "none");
        $("#togo").css("border", "none");
        var x = document.getElementById("narciso").style;
        x.border="4px double #f59f15";
        x.borderRadius="75px";
        document.getElementById("siguiente").href = "narciso.html";
        localStorage.setItem('clicknarciso', "1");
    } else {
        var x = document.getElementById("narciso").style;
        x.border="none";
        document.getElementById("siguiente").href = "";
        localStorage.removeItem('clicknarciso');
    }
}

//Seleccionar a Lautaro
function seleccionarLautaro() {
    slautaro = localStorage.getItem('clicklautaro');
    if(slautaro == null) {
        $("#narciso").css("border", "none");
        $("#alek").css("border", "none");
        $("#ciro").css("border", "none");
        $("#melta").css("border", "none");
        $("#togo").css("border", "none");
        var x = document.getElementById("lautaro").style;
        x.border="4px double #f59f15";
        x.borderRadius="75px";
        document.getElementById("siguiente").href = "lautaro.html";
        localStorage.setItem('clicklautaro', "1");
    } else {
        var x = document.getElementById("lautaro").style;
        x.border="none";
        document.getElementById("siguiente").href = "";
        localStorage.removeItem('clicklautaro');
    }
}

//Seleccionar a Alek
function seleccionarAlek() {
    salek = localStorage.getItem('clickalek');
    if(salek == null) {
        $("#lautaro").css("border", "none");
        $("#narciso").css("border", "none");
        $("#ciro").css("border", "none");
        $("#melta").css("border", "none");
        $("#togo").css("border", "none");
        var x = document.getElementById("alek").style;
        x.border="4px double #f59f15";
        x.borderRadius="75px";
        document.getElementById("siguiente").href = "alek.html";
        localStorage.setItem('clickalek', "1");
    } else {
        var x = document.getElementById("alek").style;
        x.border="none";
        document.getElementById("siguiente").href = "";
        localStorage.removeItem('clickalek');
    }
}

//Seleccionar a Ciro
function seleccionarCiro() {
    sciro = localStorage.getItem('clickciro');
    if(sciro == null) {
        $("#narciso").css("border", "none");
        $("#alek").css("border", "none");
        $("#lautaro").css("border", "none");
        $("#melta").css("border", "none");
        $("#togo").css("border", "none");
        var x = document.getElementById("ciro").style;
        x.border="4px double #f59f15";
        x.borderRadius="75px";
        document.getElementById("siguiente").href = "ciro.html";
        localStorage.setItem('clickciro', "1");
    } else {
        var x = document.getElementById("ciro").style;
        x.border="none";
        document.getElementById("siguiente").href = "";
        localStorage.removeItem('clickciro');
    }
}

//Seleccionar a Togo
function seleccionarTogo() {
    stogo = localStorage.getItem('clicktogo');
    if(stogo == null) {
        $("#narciso").css("border", "none");
        $("#alek").css("border", "none");
        $("#ciro").css("border", "none");
        $("#melta").css("border", "none");
        $("#lautaro").css("border", "none");
        var x = document.getElementById("togo").style;
        x.border="4px double #f59f15";
        x.borderRadius="75px";
        document.getElementById("siguiente").href = "togo.html";
        localStorage.setItem('clicktogo', "1");
    } else {
        var x = document.getElementById("togo").style;
        x.border="none"
        document.getElementById("siguiente").href = "";
        localStorage.removeItem('clicktogo');
    }
}

//Seleccionar a Melta
function seleccionarMelta() {
    smelta = localStorage.getItem('clickmelta');
    if(smelta == null) {
        $("#narciso").css("border", "none");
        $("#alek").css("border", "none");
        $("#ciro").css("border", "none");
        $("#lautaro").css("border", "none");
        $("#togo").css("border", "none");
        var x = document.getElementById("melta").style;
        x.border="4px double #f59f15";
        x.borderRadius="75px";
        document.getElementById("siguiente").href = "melta.html";
        localStorage.setItem('clickmelta', "1");
    } else {
        var x = document.getElementById("melta").style;
        x.border="none";
        document.getElementById("siguiente").href = "";
        localStorage.removeItem('clickmelta');
    }
}