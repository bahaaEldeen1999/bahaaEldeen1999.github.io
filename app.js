
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



let cols = document.querySelectorAll('.col')
let headers = document.querySelectorAll('h1,h2,h3,.main-header,p')
console.log(cols)
for(let col of cols){
    col.setAttribute('data-aos','zoom-in')
}
for(let h of headers){

    h.setAttribute('data-aos','flip-up')
}
AOS.init({ once: true});