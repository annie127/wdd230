// Preston

let tempPreston = parseFloat(document.querySelector('#currentPreston').textContent);
let speedPreston = parseFloat(document.querySelector('#speedPreston').textContent);

let windchillPreston;
if (tempPreston <= 50 && speedPreston > 3) {
    f = 35.74 + (0.6215 * tempPreston) - (35.75 * (speedPreston ** 0.16))+ (0.4275 * tempPreston * (speedPreston ** 0.16));
    windchillPreston = `${f.toFixed(0)} \u00B0F`;
}
else {
    windchillPreston = 'N/A';
}

document.querySelector('#windPreston').textContent = windchillPreston;



