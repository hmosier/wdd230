

// const baseURL = "https://api.openweathermap.org/data/2.5/weather?lat=39.3318&lon=-82.9817&appid=2c5b9238c69ab8caead4ac1eaebe1cb0&units=imperial"

// async function findWeather(baseURL) {
//     let response = await fetch(baseURL);
//     if (response.ok) {
//         let forecast = await response.json();
//         output(forecast);
//     }
// };

// const output = (weather) => {
//     let article = document.getElementById("windChill")

//     let temperature = document.createElement("h3")
//     temperature.textContent = `Current Temperature: ${weather.main.temp} F`;

//     let feelsLike = document.createElement("p")
//     feelsLike.textContent = `Feels like: ${weather.main.feels_like} F`;

//     let windSpeed = document.createElement("p")
//     windSpeed.textContent = `Wind Speed: ${weather.wind.speed} mph`;

//     let windChill = document.createElement("p")
//     if (temperature <= 50 && windSpeed > 3.0) {
//         windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16;
    
//         article.appendChild(windChill).textContent = `Wind Chill = ${windChill}`;
//     } else {
//         article.appendChild(windChill).textContent = `N/A`
//     };

//     article.appendChild(temperature);
//     article.appendChild(windSpeed);
//     article.appendChild(windChill);
// };
