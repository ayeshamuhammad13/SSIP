// script.js
const kelvinField = document.querySelector("#kelvin");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToKelvin() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;k`;
    } else if (tempType.value === "Celsius") {
      const CelsiusToFahernheit = (celsius * 9/5) + 32;
      fahrenheitField.innerHTML = `${CelsiusToFahernheit.toFixed(3)} &deg;k`;
    }
  }, 1200)
}