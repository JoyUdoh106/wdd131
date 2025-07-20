const currentYearSpan = document.querySelector("#current-year");
const lastModifiedSpan = document.querySelector("#last-modified");

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

currentYearSpan.textContent = currentYear;
lastModifiedSpan.textContent = `Last Modification: ${lastModified}`;

const temperatureSpan = document.querySelector("#temperature");
const windSpeedSpan = document.querySelector("#wind-speed");
const windChillSpan = document.querySelector("#wind-chill");

const temperature = parseFloat(temperatureSpan.textContent);
const windSpeed = parseFloat(windSpeedSpan.textContent);

function calculateWindChill(temp, speed) {
    const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return windChill.toFixed(1);
}

if (temperature <= 50 && windSpeed > 3.0) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = `${windChillValue}°F`;
} else {
    windChillSpan.textContent = "N/A";
}