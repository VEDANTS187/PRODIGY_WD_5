document.querySelector('.search-btn').addEventListener('click', async () => {
	const location = document.querySelector('.search-input').value;
	const apiKey = '3cab09dfc4msh3e74d53cc9ab122p1412f0jsn63bfe080cbc1';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		document.querySelector('#location').textContent = `${data.name}, ${data.sys.country}`;
		document.querySelector('.c').textContent = `${Math.round(data.main.temp)}°C`;
		document.querySelector('.f').textContent = `${Math.round((data.main.temp * 9/5) + 32)}°F`;
		document.querySelector('.desc').textContent = data.weather[0].description;
		document.querySelector('.sunrise').textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
		document.querySelector('.sunset').textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
	} catch (error) {
		console.error('Error:', error);
	}
});