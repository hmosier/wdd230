let temperature = 33
let windSpeed = 6.9

windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16;

document.querySelector("#windChill").textContent = `Wind Chill = ${windChill}`;