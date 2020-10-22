const API_URL = 'https://icanhazdadjoke.com/';

const params = {
	method: 'GET',
	headers: { Accept: 'application/json' },
};

const appendJoke = (joke) => {
  const jokeContainer = document.querySelector('.jokeContainer');
  const p = document.createElement('p');
  p.innerText = joke;
  jokeContainer.appendChild(p);
}

const fetchJoke = () => {
  fetch(API_URL, params)
			.then((response) => response.json())
      .then((data) => appendJoke(data.joke))
      .catch((error) => appendJoke(error));
};

window.onload = () => fetchJoke();
