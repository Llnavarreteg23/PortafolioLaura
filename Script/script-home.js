
//! Sección de Home
//Typing effect (animación de máquina de escribir)

const animacion = ["Desarrolladora Web", "Laura Navarrete"]; 

let indice = 0; //Indice de control (indice 0 - array animacion)
let posicion = 0;// Indice de control (posicion del cursor)
let typing = true; // Interruptor (Escribir (True) o borrar(False))

const typingElemento = document.getElementById('typing'); //Conexión con HTML (id)
const cursor = document.getElementById('cursor'); //Conexión con HTML (id)

function typeRole() {
    if (typing) { 

        if (posicion < animacion[indice].length) {
            typingElemento.textContent += animacion[indice][posicion];//Si hay caracteres por escribir
            posicion++; //Incrementa posicion
            setTimeout(typeRole, 90); //Tiempo de duración
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else { //Borrar
        if (posicion > 0) {
            typingElemento.textContent = animacion[indice].substring(0, posicion - 1);
            posicion--;
            setTimeout(typeRole, 40);
        } else {
            typing = true;
            indice = (indice + 1) % animacion.length;
            setTimeout(typeRole, 400);
        }
    }
}
document.addEventListener("DOMContentLoaded", typeRole);

document.getElementById('btnLeerMas').addEventListener('click', function() {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});









