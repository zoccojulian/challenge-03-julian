
import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll(".input-padron");

inputs.forEach( (input) => {
    input.addEventListener("blur",(evento)=> {
        validar(evento.target);
    });

});


