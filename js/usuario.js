function nombreUsuario(){
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    let usuario = nombreUsuario.toUpperCase();
    console.log(usuario);
    if (nombreUsuario.length>=3){
		document.getElementById('siguienteUsuario').style.display = 'none';
        document.getElementById('validarUsuario').style.display = 'none';
        document.getElementById('comenzarUsuario').style.display = 'block';
	}else{
		document.getElementById('validarUsuario').style.display = 'block';
	}
}