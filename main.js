// typing animation //

var typed = new Typed(".typing", {
    strings: ["AMAPOLAS CALZADOS", "(CON LOS ZAPATOS BIEN PUESTOS!!)"],
    typeSpeed: 150,
    BackSpeed: 60,
    loop: true

})


var typed = new Typed(".intro", {
    strings: ["Aqui veras toda la informacion sobre este sitio web "],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: false

})




const images = document.querySelectorAll('show');

function triggerAnimation(entries) {
    entries.array.forEach(entry => {
        const image = entry.target.querySelector('descripcion');
        image.classlist.toggle('unset', entry.isIntersecting);



    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image => {
    observer.observe(image);

});