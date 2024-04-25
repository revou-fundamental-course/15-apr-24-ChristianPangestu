function celsiusToFahrenheit(_selcius){
    return (_selcius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function validateInput(input) {
    input = input.trim();
    if (isNaN(input)) {
        alert("Masukkan harus berupa angka.");
        return false;
    }
    if (input === "") {
        alert("Masukkan tidak boleh kosong.");
        return false;
    }
    return true;
}

function convert() {
    var input = document.getElementById("input").value;
    var unit = document.getElementById("Unit").value;
    var result;
    if (!validateInput(input)) {
        return;
    }
    if (unit === "celsius") {
        result = celsiusToFahrenheit(parseFloat(input));
        document.getElementById("output").innerHTML = result.toFixed(2) + " Fahrenheit";
        document.getElementById("calculationMethod").textContent = "("+input + "°C * 9/5) + 32 = "+result+"°F";
    } else{
        result = fahrenheitToCelsius(parseFloat(input));
        document.getElementById("output").innerHTML = result.toFixed(2) + " Celsius";
        document.getElementById("calculationMethod").textContent = "("+input + "°F - 32) * 5/9 = "+result+"°C";
    }
}

function reset() {
    document.getElementById("input").value = "";
    document.getElementById("output").textContent = "";
    document.getElementById("unit").value;
    document.getElementById("calculationMethod").textContent = "";
}
