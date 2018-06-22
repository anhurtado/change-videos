window.onload = function () {
	changeVideo('pvCo9AA74kQ');
}

function changeVideo(code) {
	// Variables necesarias
	let container = document.getElementById('main');
	let baseUrl = "https://www.youtube.com/embed/";
	let currentVideo = baseUrl + code;

	// Toggle Video (Ocultar y mostrar)
	container.style.display = 'none';
	setTimeout(function() { container.style.display = 'block'; }, 1000);

	// Añadiendo el video actual
	container.src = currentVideo;
}