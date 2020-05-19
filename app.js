//new Pageable("#fullpage");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

$(".gallery-image").hover3d({
	selector: ".gallery-image img"
});