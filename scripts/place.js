const temperature = 25; // in Celsius
const windSpeed = 5; // km/h

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + '&deg;C';
}

const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

temperatureElement.innerHTML = `${temperature}&deg;C`;
windSpeedElement.innerHTML = `${windSpeed} km/h`;
windChillElement.innerHTML = `${windChill}`;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}
