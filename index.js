function convertTemperature() {
    var celsiusInput = document.getElementById("c");
    var fahrenheitInput = document.getElementById("far");
    var conversionType = document.getElementById("conversion-type").value;

    if (conversionType === "celsius-to-fahrenheit") {
        var celsiusValue = parseFloat(celsiusInput.value);
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(4);
    } else if (conversionType === "fahrenheit-to-celsius") {
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(4);
    }
}

function resetValues() {
    document.getElementById("c").value = 0;
    document.getElementById("far").value = 32;
}


