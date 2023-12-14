
const volumeCalculator = () => {
    document.querySelector(".volume-units-converter__button").addEventListener("click", function () {
        document.querySelector(".volume-units-converter__millim").value = "";
        document.querySelector(".volume-units-converter__cubic-centim").value = "";
        document.querySelector(".volume-units-converter__liters").value = "";
        document.querySelector(".volume-units-converter__cubic-meters").value = "";
        document.querySelector(".volume-units-converter__gallons").value = "";
        document.querySelector(".volume-units-converter__cubic-cnches").value = "";
        document.querySelector(".volume-units-converter__cubic-feet").value = "";
      });

      let Milliliters= document.querySelector(".volume-units-converter__millim");
      let Cubic_centimeters = document.querySelector(".volume-units-converter__cubic-centim");
      let Liters = document.querySelector(".volume-units-converter__liters");
      let Cubic_meters = document.querySelector(".volume-units-converter__cubic-meters");
      let gallons = document.querySelector(".volume-units-converter__gallons");
      let cubic_inches = document.querySelector(".volume-units-converter__cubic-cnches");
      let cubic_feet = document.querySelector(".volume-units-converter__cubic-feet");

      function millilitersToOther(val) {
        Cubic_centimeters.value = val;
        Liters.value = val * 0.001;
        Cubic_meters.value = val * 0.000001;
        gallons.value = val * 0.000264;
        cubic_inches.value = val * 0.061024;
        cubic_feet.value = val * 0.000035;
      }
      function cubicCentimetersToOther(val) {
        Milliliters.value = val;
        Liters.value = val * 0.001;
        Cubic_meters.value = val * 0.000001;
        gallons.value = val * 0.000264;
        cubic_inches.value = val * 0.061024;
        cubic_feet.value = val * 0.000035;
      }
      function litersToOther(val) {
        Milliliters.value = val * 1000;
        Cubic_centimeters.value = val * 1000;
        Cubic_meters.value = val * 0.001;
        gallons.value = val * 0.264172;
        cubic_inches.value = val * 61.02374;
        cubic_feet.value = val * 0.035315;
      }
      function cubicMetersToOther(val) {
        Milliliters.value = val * 1000000;
        Liters.value = val * 1000;
        Cubic_centimeters.value = val * 1000000;
        gallons.value = val * 264.1721;
        cubic_inches.value = val * 61023.74;
        cubic_feet.value = val * 35.31467;
      }
      function gallonsToOther(val) {
        Milliliters.value = val * 3785.412;
        Cubic_centimeters.value = val * 3785.412;
        Cubic_meters.value = val * 0.003785;
        cubic_inches.value = val * 231;
        cubic_feet.value = val * 0.133681;
        Liters.value = val * 3.785412;
      }
      function cubicInchesToOther(val) {
        Milliliters.value = val * 16.38706;
        Cubic_centimeters.value = val * 16.38706;
        Cubic_meters.value = val * 0.000016;
        gallons.value = val * 0.004329;
        cubic_feet.value = val * 0.000579;
        Liters.value = val * 0.016387;
      }
      function cubicFeetToOther(val) {
        Milliliters.value = val * 28316.85;
        Cubic_centimeters.value = val * 28316.85;
        Liters.value = val * 28.31685;
        gallons.value = val * 7.480519;
        Cubic_meters.value = val * 0.028317; 
        cubic_inches.value = val * 1728;
      }

      function convertToOthers(convertFrom, value) {
        switch (convertFrom) {
          case "Milliliters":
            millilitersToOther(parseFloat(value));
            break;
          case "Cubic_centimeters":
            cubicCentimetersToOther(parseFloat(value)); 
            break;
          case "Liters":
            litersToOther(parseFloat(value));
            break;
          case "gallons":
            gallonsToOther(parseFloat(value));
            break;
          case "cubic_feet":
            cubicFeetToOther(parseFloat(value));
            break;
          case "cubic_inches":
            cubicInchesToOther(parseFloat(value));
            break;
          case "Cubic_meters":
            cubicMetersToOther(parseFloat(value));
            break;
        }
      }

      document.querySelector(".volume-units-converter__millim").addEventListener('input', (e) => {
        convertToOthers('Milliliters', e.target.value)
      })
      document.querySelector(".volume-units-converter__cubic-centim").addEventListener('input', (e) => {
        convertToOthers('Cubic_centimeters', e.target.value)
      })
      document.querySelector(".volume-units-converter__liters").addEventListener('input', (e) => {
        convertToOthers('Liters', e.target.value)
      })
      document.querySelector(".volume-units-converter__cubic-meters").addEventListener('input', (e) => {
        convertToOthers('Cubic_meters', e.target.value)
      })
      document.querySelector(".volume-units-converter__gallons").addEventListener('input', (e) => {
        convertToOthers('gallons', e.target.value)
      })
      document.querySelector(".volume-units-converter__cubic-cnches").addEventListener('input', (e) => {
        convertToOthers('cubic_inches', e.target.value)
      })
      document.querySelector(".volume-units-converter__cubic-feet").addEventListener('input', (e) => {
        convertToOthers('cubic_feet', e.target.value)
      })
}

export default volumeCalculator;