let temp = parseFloat(document.querySelector('#temp').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);

if (temp <= 50 && speed > 3) {

    let result = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16))+ (0.4275 * temp * (speed ** 0.16));
}
document.querySelector('#wind').innerHTML = result.toFixed(1);