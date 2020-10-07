const initialData = {
	backgroundColor: 'rgba(0, 0, 0, 0.05)',
	color: '#333',
	fontSize: '15px',
	lineHeight: '22px',
	fontFamily: 'Arial, Helvetica, sans-serif',
}

document.body.onload = function () {
	if (typeof (Storage) != "undefined") {
		if (localStorage.getItem('data') === null) {
			localStorage.setItem('data', JSON.stringify(initialData));
		}
		document.querySelector('.restart').addEventListener('click', restartSettings);
		document.querySelector('.update').addEventListener('click', updateSettings);
		loadSettings();
	} else {
		document.body.innerHTML = '<div class="empty"><h2>Sem suporte para Web Storage :c</h2></div>';
	}
}

function loadSettings() {
	const settings = JSON.parse(localStorage.getItem('data'));
	const inputs = document.querySelectorAll('.input-block input');
	inputs.forEach(input => {
		input.placeholder = settings[input.id]
	})
	updatePage();
}

function updatePage() {
	const settings = JSON.parse(localStorage.getItem('data'));
	const body = document.body;
	for (setting in settings) {
		body.style[setting] = settings[setting];
	}
}

function updateSettings() {
	const settings = JSON.parse(localStorage.getItem('data'));
	const inputs = document.querySelectorAll('.input-block input');
	inputs.forEach(input => {
		if (input.value !== settings[input.id] && input.value !== "") {
			settings[input.id] = input.value;
		}
	});
	localStorage.setItem('data', JSON.stringify(settings));
	updatePage();
}

function restartSettings() {
	localStorage.setItem('data', JSON.stringify(initialData));
	updatePage();	
}