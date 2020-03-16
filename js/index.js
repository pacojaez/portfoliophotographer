const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function ver (foto){
	// crea una figura nueva
		var figura = document.createElement('figure');
	//ponerle la clase grande
		figura.className = 'grande';
	//hacer que al hacer click se elimine
		figura.onclick = function (){this.remove();};
	//crear una imagen nueva
		var imagen = document.createElement('img');
	//pone el src de la foto que le llega por parametro
		imagen.src = foto.src;
	//coloca la imagen en la figura
		figura.appendChild(imagen);
	//coloca la fiogura en el body del documento
		document.body.appendChild(figura);
}