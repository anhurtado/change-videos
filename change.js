window.onload = function () {
	changeVideo('pvCo9AA74kQ');
}

function changeVideo(code) {
	// Variables necesarias
	let container = document.getElementById('main');
	let baseUrl = "https://www.youtube.com/embed/";
	let currentVideo = baseUrl + code;

	// Añadiendo el video actual
	container.src = currentVideo;
}