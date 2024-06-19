// ini javascript

// Untuk mengaktifkan tombol conversion
function conversion(){
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);

    var fahrenheit = (inputTemp * 9/5) + 32;

    var resultFahrenheit = document.getElementById('resultFahrenheit');
    resultFahrenheit.innerHTML = `${fahrenheit.toFixed(2)}`;

    var resultCalculate = document.getElementById('resultCalculate');
    resultCalculate.innerHTML = `
Fahrenheit :
(${inputTemp.toFixed(2)}&degC * 9/5) + 32 = ${fahrenheit.toFixed(2)}&degF
    `;
}
// Untuk mengaktifkan tombol reset
function resetTemp(){
    document.getElementById('inputTemp').value = '';
    document.getElementById('resultFahrenheit').innerHTML = '';
    document.getElementById('resultCalculate').innerHTML = '';
}
// Untuk mengaktifkan tombol reverse
function reverseConversion() {
    var resultCalculate = document.getElementById('resultCalculate');
    var inResult = resultCalculate.innerHTML;

    if (inResult.includes('Fahrenheit')) {
        var celsius = parseFloat(document.getElementById('inputTemp').value);
        var fahrenheit = parseFloat(document.getElementById('resultFahrenheit').value);
        resultCalculate.innerHTML = `
Celsius :
(${fahrenheit.toFixed(2)} °F - 32) * 5/9 = ${celsius.toFixed(2)} °C
        `;
    } else if (inResult.includes('Celsius')) {
        var celsius = parseFloat(document.getElementById('inputTemp').value);
        var fahrenheit = parseFloat(document.getElementById('resultFahrenheit').value);
        resultCalculate.innerHTML = `
Fahrenheit :
(${celsius.toFixed(2)} °C * 9/5) + 32 = ${fahrenheit.toFixed(2)} °F `;
    }
}

//  if (isNaN(resultFahrenheit)) {
//      resultFahrenheit.value = "input angka tidak terdeteksi";
//  } else {
//      resultFahrenheit.value = resultFahrenheit.toFixed(2)
// }

