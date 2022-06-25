const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector("#windspeed");
const windchill = document.querySelector("#windchill");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=39.3318&lon=-82.9817&appid=2c5b9238c69ab8caead4ac1eaebe1cb0&units=imperial"

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    } else {
        throw Error(await response.text());
    }

  }

  apiFetch();


function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`;

    windspeed.textContent = `Wind Speed: ${weatherData.wind.speed}`;
    
    if (currentTemp <= 50 && windspeed > 3.0) {
        windchill.textContent = `Windchill: ${35.74 + 0.6215 * currentTemp - 35.75 * windspeed ** 0.16}`;
    } else {
        windchill.textContent = `Windchill: N/A`
    };
};