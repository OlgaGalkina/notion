// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to convert temperature based on selected unit
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit;

    if (inputUnit === 'celsius') {
        celsius = inputValue;
        fahrenheit = celsiusToFahrenheit(celsius);
        document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else if (inputUnit === 'fahrenheit') {
        fahrenheit = inputValue;
        celsius = fahrenheitToCelsius(fahrenheit);
        document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}°C`;
    } 
}

// Function to reset the converter
function resetConverter() {
    document.getElementById('inputValue').value = '';
    document.getElementById('inputUnit').value = 'celsius';
    document.getElementById('celsiusResult').textContent = '';
    document.getElementById('fahrenheitResult').textContent = '';
    document.getElementById('kelvinResult').textContent = '';
}
