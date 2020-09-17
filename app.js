document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// let cols = document.querySelectorAll('.col')
// let headers = document.querySelectorAll('h1,h2,h3,.main-header,p');
// let i =0;
// for(let col of cols){
//     if(i > 1) col.setAttribute('data-aos','zoom-in');
//     i++;
// }
// i=0;
// for(let h of headers){

//    if(i > 1) h.setAttribute('data-aos','flip-up');
//     i++;
// }
// AOS.init({ once: true});
