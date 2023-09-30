//////// seccion introduccion logo /////////////////
let intro = document.querySelector('.introduccion');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', (e) => {

    setTimeout(() => {

        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);

        });
        setTimeout(() => {
            logoSpan.forEach(element => {

            }); ((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
        

       
    });
})


////////////// section nav responsive////////////////////
let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}





// typing animation //

var typed = new Typed(".typing", {
    strings: ["AMAPOLAS CALZADOS", "¡CON LOS ZAPATOS BIEN PUESTOS!"],
    typeSpeed: 150,
    BackSpeed: 60,
    loop: true
    

})


// const contenedor1 = document.querySelector(".container-1");

// contenedor1.addEventListener("mouseover", (e)=>{

var typed = new Typed(".intro", {
    strings: ["Aqui veras toda la informacion sobre este sitio web "],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: false

})


