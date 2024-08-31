document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number!';
        return;
    }

    const tempValue = parseFloat(temperature);
    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = (tempValue * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        resultDiv.textContent = `${tempValue}°C is ${convertedTemp.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (tempValue - 32) * 5/9;
        convertedUnit = 'Celsius';
        resultDiv.textContent = `${tempValue}°F is ${convertedTemp.toFixed(2)}°C`;
    } else if (unit === 'kelvin') {
        // Assuming Kelvin input is converting to Celsius
        convertedTemp = tempValue - 273.15;
        convertedUnit = 'Celsius';
        resultDiv.textContent = `${tempValue}K is ${convertedTemp.toFixed(2)}°C`;
    }
});
