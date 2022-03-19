
export function mensajeEnviado(){
    document.querySelector(".cartel-enviado").classList.add("mensaje-enviado");

    setTimeout(()=>{
        document.querySelector(".cartel-enviado").classList.remove("mensaje-enviado");
    },3000);
};