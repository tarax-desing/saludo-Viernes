const saludoTxt = document.getElementById('saludo');
const nameInputContainer = document.getElementById('name-input-container');
const nameinput = document.getElementById('name-input');
const submitButton = document.getElementById('submit-name');


function guardarNombre() {
    const name = nameinput.value.trim();
    if (name.length > 1) {
        localStorage.setItem('nombreUsuario', name);
        mostrarNombre(name);
    }
}

function mostrarNombre(name) {
    const hora = new Date().getHours();
  
    let mensaje = "Bienvenido";
    if (hora >= 6 && hora < 12) {
        mensaje = "Buenos días";
    } else if (hora >= 12 && hora < 19) {
        mensaje = "Buenas tardes";
    } else {
        mensaje = "Buenas noches";
    }


    saludoTxt.textContent = `¡${mensaje}, ${name}!`;
    nameInputContainer.style.display = 'none';
}



submitButton.addEventListener('click', guardarNombre);
nameinput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        guardarNombre();
    }
});




/////comprobar si ya hay un nombre guardad
////si hay un nombre guardad lo muestro


const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    mostrarNombre(nombreGuardado);
}