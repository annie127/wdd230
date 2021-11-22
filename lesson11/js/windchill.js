let temp = parseFloat(document.querySelector('#current').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);

let windchill;
if (temp <= 50 && speed > 3) {
    f = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16))+ (0.4275 * temp * (speed ** 0.16));
    windchill = `${f.toFixed(0)} \u00B0F`;
}
else {
    windchill = 'N/A';
}

document.querySelector('#wind').textContent = windchill;