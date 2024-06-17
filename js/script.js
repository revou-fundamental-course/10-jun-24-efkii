// ini javascript

const temperatureInput = document.getElementById('temperature-input');
const conversionType = document.getElementById('conversion-type');
const temperatureOutput = document.getElementById('temperature-output');
const calculation = document.getElementById('calculation');
const textarea = document.getElementById('temperature-input');

// ketika di enter tampil hasilnya
if(keyCode === 13) {
    event.preventDefault();
    countConversion();
    showCalc();
}

// untuk input otomatis
function conversion() {
    countConversion();
    showCalc();
}

// Fungsi untuk membalikkan selection conversion

function conversionType() {
    const selectedOption = conversionType.value;
    let reversedOption;

    switch(selectedOption) {
        case 'celcius-to-fahrenheit':
            reversedOption = 'fahrenheit-to-celicus';
            break;
         case 'fahrenheit-to-celicus':
            reversedOption = 'celcius-to-fahrenheit';
            break;
    }
}
