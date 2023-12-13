const calculateTemp = () => {
    const calculTemp = () => {
        const numberTemp = document.getElementById('temp').value;
        //console.log(typeof(parseInt(numberTemp)));
        const tempSelected = document.getElementById('temp_diff');
        const valueTemp = tempSelected.value;
      
        const celToFah = (celf) => {
          celf = parseFloat(celf);
          let celsiusFahrenheit = ((celf * 1.8) + 32);
          let celsiusFahrenheitFinal = celsiusFahrenheit.toFixed(2);
          return celsiusFahrenheitFinal;
        }
      
        const fahToCel = (fahc) => {
          fahc = parseFloat(fahc);
          let fahrenheitCelsius = ((fahc - 32) / 1.8);
          let fahrenheitCelsiusFinal = fahrenheitCelsius.toFixed(2);
          return fahrenheitCelsiusFinal;
        }
        const celToKel = (celk) => {
          celk = parseFloat(celk);
          let celsiusKelvin = celk + 273.15;
          let celsiusKelvinFinal = celsiusKelvin.toFixed(2);
          return celsiusKelvinFinal;
        }
        const kelToCel = (kelc) => {
          kelc = parseFloat(kelc);
          let kelvinCelsius = kelc - 273.15;
          let kelvinCelsiusFinal = kelvinCelsius.toFixed(2);
          return kelvinCelsiusFinal;
        }
        const fahToKel = (fahk) => {
          fahk = parseFloat(fahk);
          let fahrenheitKelvin = ((fahk - 32) / 1.8) + 273.15;
          let fahrenheitKelvinFinal = fahrenheitKelvin.toFixed(2);
          return fahrenheitKelvinFinal;
        }
        const kelToFah = (kelf) => {
          kelf = parseFloat(kelf);
          let kelvinCelsius = ((kelf - 273.15) * 1.8) + 32;
          let kelvinCelsiusFinal = kelvinCelsius.toFixed(2);
          return kelvinCelsiusFinal;
        }
      
        let resultTemp;
        if (valueTemp == "cel_fah") {
          resultTemp = celToFah(parseInt(numberTemp));
          document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °Fahrenheit`;
        }
        else if (valueTemp == "fah_cel") {
          resultTemp = fahToCel(parseInt(numberTemp));
          document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °Celsius`;
        }
        else if (valueTemp == "cel_kel") {
          resultTemp = celToKel(parseInt(numberTemp));
          document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °Kelvin`;
        }
        else if (valueTemp == "kel_cel") {
          resultTemp = kelToCel(parseInt(numberTemp));
          document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °Celsius`;
        }
        else if (valueTemp == "fah_kel") {
          resultTemp = fahToKel(parseInt(numberTemp));
          document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °Kelvin`;
        }
        else if (valueTemp == "kel_fah") {
          resultTemp = kelToFah(parseInt(numberTemp));
          document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °Fahrenheit`;
        }
      }
      
        document.querySelector('.temperature-calc__submit').addEventListener('click', () => {
          calculTemp();
        });
      
        document.querySelector(".temperature-calc__reset").addEventListener('click', () => {
          document.querySelector('#temp').value = "";
          document.getElementById('resultContainer').innerHTML = "";
        });

}

export default calculateTemp;