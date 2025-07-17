document.getElementById("convertBtn").addEventListener("click", function () {
  let temperature = document.getElementById("temperature").value;
  let conversionType = document.getElementById("conversionType").value;
  let resultElement = document.getElementById("result");
  let errorElement = document.getElementById("error");

  resultElement.textContent = "";
  errorElement.textContent = "";

  let temp = parseFloat(temperature);

  if (isNaN(temp)) {
    errorElement.textContent = "Please enter a valid number.";
    return;
  }

  let result;

  if (conversionType === "toCelsius") {
    result = ((temp - 32) * 5) / 9;
    resultElement.textContent = `${temp}°F = ${result.toFixed(2)}°C`;
  } else if (conversionType === "toFahrenheit") {
    result = (temp * 9) / 5 + 32;
    resultElement.textContent = `${temp}°C = ${result.toFixed(2)}°F`;
  }
});
