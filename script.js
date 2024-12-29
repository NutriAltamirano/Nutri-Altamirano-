// Función para abrir la calculadora de IMC
function openIMCCalculator() {
    document.getElementById('imcCalculator').style.display = 'flex';
}

// Función para cerrar la calculadora de IMC
function closeIMCCalculator() {
    document.getElementById('imcCalculator').style.display = 'none';
}

// Función para calcular el IMC
function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Por favor, ingresa un peso y una altura válidos.');
        return;
    }

    var imc = weight / (height * height);
    var resultText = "Tu IMC es: " + imc.toFixed(2);

    if (imc < 18.5) {
        resultText += " (Bajo peso)";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultText += " (Normal)";
    } else if (imc >= 25 && imc < 29.9) {
        resultText += " (Sobrepeso)";
    } else {
        resultText += " (Obesidad)";
    }

    document.getElementById('imcResult').innerText = resultText;
}
