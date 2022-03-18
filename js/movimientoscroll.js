
var links = document.querySelectorAll(".header-nav a");

links.forEach((boton) => {
    boton.addEventListener("click",function(evento){
        evento.preventDefault();
        
        let link = evento.currentTarget.getAttribute('href');

        document.querySelector(link).scrollIntoView({
            behavior: 'smooth'
          });
    });
})
