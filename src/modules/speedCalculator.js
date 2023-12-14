const speedCalculator = () => {
    const speed_convertor = () => {
        let input = parseFloat(document.querySelector(".speed-calculator__weight").value);
        let from = document.querySelector(".speed-calculator__from").value;
        let to = document.querySelector(".speed-calculator__to").value;
        let result;

        if (from == to) {
          result = input;
        } else if (from == "cm/s") {
          if (to == "m/s") {
            result = input / 100;
          } else if (to == "km/h") {
            result = input * 0.036;
          } else if (to == "f/s") {
            result = input * 0.032808;
          } else if(to == 'miles/s') {
			result = input * 0.022371;
		  } else if(to == 'knots') {
			result = input * 0.213841;
		  } else if(to == 'mach') {
			result = input * 0.000323;
		  }
        } else if (from == "m/s") {
			if (to == "cm/s") {
            result = input * 100;
          } else if (to == "km/h") {
            result = input * 3.6;
          } else if (to == "f/s") {
            result = input * 3.28084;
          } else if(to == 'miles/s') {
			result = input * 2.237136;
		  } else if(to == 'knots') {
			result = input * 1.944012;
		  } else if(to == 'mach') {
			result = input * 0.002939;
		  }
        } else if (from == "km/h") {
			if (to == "cm/s") {
            result = input * 27.77778;
          } else if (to == "m/s") {
            result = input * 0.277778;
          } else if (to == "f/s") {
            result = input * 0.911344;
          } else if(to == 'miles/s') {
			result = input * 0.621427;
		  } else if(to == 'knots') {
			result = input * 0.540003;
		  } else if(to == 'mach') {
			result = input * 0.000816;
		  }
        } else if (from == "f/s") {
			if (to == "cm/s") {
            result = input * 30.48;
          } else if (to == "m/s") {
            result = input * 0.3048;
          } else if (to == "km/h") {
            result = input * 1.09728;
          } else if(to == 'miles/s') {
			result = input * 0.681879;
		  } else if(to == 'knots') {
			result = input * 0.592535;
		  } else if(to == 'mach') {
			result = input * 0.000896;
		  }
        } else if (from == "miles/s") {
			if (to == "cm/s") {
            result = input * 44.7;
          } else if (to == "m/s") {
            result = input * 0.447;
          } else if (to == "km/h") {
            result = input * 1.6092;
          } else if(to == 'f/s') {
			result = input * 1.466535;
		  } else if(to == 'knots') {
			result = input * 0.868974;
		  } else if(to == 'mach') {
			result = input * 0.001314;
		  }
        } else if (from == "knots") {
			if (to == "cm/s") {
            result = input * 51.44;
          } else if (to == "m/s") {
            result = input * 0.5144;
          } else if (to == "km/h") {
            result = input * 1.85184;
          } else if(to == 'f/s') {
			result = input * 1.687664;
		  } else if(to == 'miles/s') {
			result = input * 1.150783;
		  } else if(to == 'mach') {
			result = input * 0.001512;
		  }
        } else if(from == 'mach') {
			if(to == 'cm/s') {
				result = input * 34030;
			} else if (to == "m/s") {
            result = input * 340.3;
          } else if (to == "km/h") {
            result = input * 1225.08;
          } else if(to == 'f/s') {
			result = input * 1116.47;
		  } else if(to == 'miles/s') {
			result = input * 761.2975;
		  } else if(to == 'knots') {
			result = input * 661.5474;
		  }
		}
        document.querySelector(".speed-calculator__result").innerHTML = `${
          result + " " + to
        }`;
      };
    
      document.querySelector(".speed-calculator__convert").addEventListener("click", () => {
        speed_convertor();
      });

      document.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
          speed_convertor();
        }
      });

      document.querySelector('.speed-calculator__reset').addEventListener('click', () => {
        document.querySelector('.speed-calculator__form').reset();
        document.querySelector('.speed-calculator__result').textContent = '';
      })
}

export default speedCalculator;