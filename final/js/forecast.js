const forecast = document.querySelector('#forecast')
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#description');
const humidity = document.querySelector("#humidity");

const forecastURL ="https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&exclude=hourly,minutely&appid=2c5b9238c69ab8caead4ac1eaebe1cb0&units=imperial"

async function apiFetch() {
    const response = await fetch(forecastURL);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `Current Temperature: <strong>${weatherData.current.temp.toFixed(1)}&#176F</strong>`;
    const desc = weatherData.current.weather[0].description;
    description.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`;

    humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;

    let date = new Date(weatherData.daily[1].dt * 1000).toLocaleString("default", { weekday: "long" });
    forecast.innerHTML = `<div><h3 class="forecast">${date}</h3> <p>High: <strong>${weatherData.daily[1].temp.max.toFixed(1)}&#176F</strong></p> <p>Low: <strong>${weatherData.daily[1].temp.min.toFixed(1)}&#176F</strong></p> <p>Humidity: ${weatherData.daily[1].humidity}% <p>${weatherData.daily[1].weather[0].description.charAt(0).toUpperCase()}${weatherData.daily[1].weather[0].description.slice(1)}</p></div>`;

    let date2 = new Date(weatherData.daily[2].dt * 1000).toLocaleString("default", { weekday: "long" });
    let day2 = document.createElement('div');
    day2.innerHTML = `<h3 class="forecast">${date2}</h3> <p>High: <strong>${weatherData.daily[2].temp.max.toFixed(1)}&#176F</strong></p> <p>Low: <strong>${weatherData.daily[2].temp.min.toFixed(1)}&#176F</strong></p> <p>Humidity: ${weatherData.daily[2].humidity}% <p>${weatherData.daily[2].weather[0].description.charAt(0).toUpperCase()}${weatherData.daily[2].weather[0].description.slice(1)}</p>`;
    forecast.appendChild(day2);

    let date3 = new Date(weatherData.daily[3].dt * 1000).toLocaleString("default", { weekday: "long" });
    let day3 = document.createElement('div');
    day3.innerHTML = `<h3 class="forecast">${date3}</h3> <p>High: <strong>${weatherData.daily[3].temp.max.toFixed(1)}&#176F</strong></p> <p>Low: <strong>${weatherData.daily[3].temp.min.toFixed(1)}&#176F</strong></p> <p>Humidity: ${weatherData.daily[3].humidity}% <p>${weatherData.daily[3].weather[0].description.charAt(0).toUpperCase()}${weatherData.daily[3].weather[0].description.slice(1)}</p>`
    forecast.appendChild(day3);

};

apiFetch();