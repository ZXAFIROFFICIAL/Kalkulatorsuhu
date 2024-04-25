document.getElementById('convertBtn').addEventListener('click', function() {
    convertTemperature();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    resetForm();
});

document.getElementById('reverseBtn').addEventListener('click', function() {
    reverseConversion();
});

function convertTemperature() {
    var tempInput = parseFloat(document.getElementById('tempInput').value);
    if (isNaN(tempInput)) {
        alert('Silakan masukkan angka yang valid untuk suhu.');
        return;
    }
    var celsiusResult = tempInput;
    var fahrenheitResult = (tempInput * 9/5) + 32;
    var calculationMethod = 'Untuk mengonversi suhu dari Celsius ke Fahrenheit, Anda dapat menggunakan rumus berikut: Fahrenheit = (Celsius × 9/5) + 32.';
    
    document.getElementById('celsiusResult').innerHTML = celsiusResult + ' Celsius sama dengan ' + fahrenheitResult.toFixed(2) + ' Fahrenheit.';
    document.getElementById('fahrenheitResult').innerHTML = fahrenheitResult.toFixed(2) + ' Fahrenheit sama dengan ' + celsiusResult + ' Celsius.';
    document.getElementById('calculationMethod').innerHTML = calculationMethod;
}

function resetForm() {
    document.getElementById('tempForm').reset();
    document.getElementById('celsiusResult').innerHTML = '';
    document.getElementById('fahrenheitResult').innerHTML = '';
    document.getElementById('calculationMethod').innerHTML = '';
}

function reverseConversion() {
    var tempInput = parseFloat(document.getElementById('tempInput').value);
    if (isNaN(tempInput)) {
        alert('Silakan masukkan angka yang valid untuk suhu.');
        return;
    }
    var fahrenheitResult = tempInput;
    var celsiusResult = (tempInput - 32) * 5/9;
    var calculationMethod = 'Untuk mengonversi suhu dari Fahrenheit ke Celsius, Anda dapat menggunakan rumus berikut: Celsius = (Fahrenheit - 32) × 5/9.';
    
    document.getElementById('celsiusResult').innerHTML = celsiusResult.toFixed(2) + ' Celsius sama dengan ' + fahrenheitResult + ' Fahrenheit.';
    document.getElementById('fahrenheitResult').innerHTML = fahrenheitResult + ' Fahrenheit sama dengan ' + celsiusResult.toFixed(2) + ' Celsius.';
    document.getElementById('calculationMethod').innerHTML = calculationMethod;
}
function convertTemperature() {
    var tempInput = parseFloat(document.getElementById('tempInput').value);
    if (isNaN(tempInput)) {
        alert('Silakan masukkan angka yang valid untuk suhu.');
        return;
    }
    if (tempInput === 0) {
        alert('Silakan masukkan angka yang bukan nol untuk suhu.');
        return;
    }
    var celsiusResult = tempInput;
    var fahrenheitResult = (tempInput * 9/5) + 32;
    var calculationMethod = 'Untuk mengonversi suhu dari Celsius ke Fahrenheit, Anda dapat menggunakan rumus berikut: Fahrenheit = (Celsius × 9/5) + 32.';
    
    document.getElementById('celsiusResult').innerHTML = celsiusResult + ' Celsius sama dengan ' + fahrenheitResult.toFixed(2) + ' Fahrenheit.';
    document.getElementById('fahrenheitResult').innerHTML = fahrenheitResult.toFixed(2) + ' Fahrenheit sama dengan ' + celsiusResult + ' Celsius.';
    document.getElementById('calculationMethod').innerHTML = calculationMethod;
}

function reverseConversion() {
    var tempInput = parseFloat(document.getElementById('tempInput').value);
    if (isNaN(tempInput)) {
        alert('Silakan masukkan angka yang valid untuk suhu.');
        return;
    }
    if (tempInput === 0) {
        alert('Silakan masukkan angka yang bukan nol untuk suhu.');
        return;
    }
    var fahrenheitResult = tempInput;
    var celsiusResult = (tempInput - 32) * 5/9;
    var calculationMethod = 'Untuk mengonversi suhu dari Fahrenheit ke Celsius, Anda dapat menggunakan rumus berikut: Celsius = (Fahrenheit - 32) × 5/9.';
    
    document.getElementById('celsiusResult').innerHTML = celsiusResult.toFixed(2) + ' Celsius sama dengan ' + fahrenheitResult + ' Fahrenheit.';
    document.getElementById('fahrenheitResult').innerHTML = fahrenheitResult + ' Fahrenheit sama dengan ' + celsiusResult.toFixed(2) + ' Celsius.';
    document.getElementById('calculationMethod').innerHTML = calculationMethod;
}
