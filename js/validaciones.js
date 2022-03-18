
const tipoDeError =["valueMissing","patternMismatch","tooShort"];

const mensajeDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío",
        tooShort: "Debe tener al menor 4 caracteres"
    },
    email:{
        valueMissing: "El campo email no puede estar vacío",
        patternMismatch: "No coincide con una dirección de mail válida (nombre@dominio.xxx)"
    },
    asunto:{
        valueMissing: "El campo asunto no puede estar vacío"
    },
    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacío"
    },
}


export function validar(input){

    if(input.validity.valid){
        input.parentElement.classList.remove("contacto--invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML="";
    }else{
        input.parentElement.classList.add("contacto--invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML= mostrarMensajeError(input);
    }
    
} 

function mostrarMensajeError(input){
    let mensaje = "";
    tipoDeError.forEach( (error) => {

        if(input.validity[error]){
            mensaje = mensajeDeError[input.dataset.tipo][error];
        };
    });
    
    return mensaje;
};


