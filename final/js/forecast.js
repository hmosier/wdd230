const forecast = document.querySelector('#forecast')

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=38.9807&lon=-77.1003&appid=2c5b9238c69ab8caead4ac1eaebe1cb0&units=imperial"

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
}

function  displayResults(weatherData) {
    forecast.innerHTML = `<p>Tomorrow's High: <strong>${weatherData.main.temp_max.toFixed(1)}&#176F</strong></p>`;
  
    const desc = weatherData.weather[0].description;
  
    description.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`;

    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
};

apiFetch();