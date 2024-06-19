// this is javascript

// to active the button convert
document.getElementById('convertButton').addEventListener('click', function() {
    const celcius = parseFloat(document.getElementById('inputCelcius').value);
    if (!isNaN(celcius)) {
        const fahrenheit = (celcius * 9/5) + 32 ;
        document.getElementById('inputFahrenheit').value = fahrenheit.toFixed(2);
        document.querySelector('.result-Calculation').value = `${celcius}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert("Please enter a valid number for celsius!");
    }
});

// to active the button reverse
document.getElementById('reverseButton').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celcius = (fahrenheit - 32) * 5/9 ;
        document.getElementById('inputCelcius').value = celcius.toFixed(2);
        document.querySelector('.result-Calculation').value = `${fahrenheit}°F - 32 * 5/9 = ${celcius.toFixed(2)}°C`;
    } else {
        alert("Please enter a valid number for Fahrenheit!");
    }
});

// to active button reset
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputCelcius').value = '';
    document.getElementById('inputFahrenheit').value = '';
    document.querySelector('.result-Calculation').value = '';
});