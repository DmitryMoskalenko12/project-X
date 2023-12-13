const weighConvertor = () => {
    const weigh_convertor = () => {
        let input = parseFloat(document.querySelector('#inputweigh').value);
        let from = document.querySelector('#from').value;
        let to = document.querySelector('#to').value;
        let result;
      
        if (from == to) {
          result = input;
        } else if (from == 'kg') {
          if (to == 'ton') {
            result = input / 1000;
          } else if (to == 'g') {
            result = input * 1000;
          } else if (to == 'lb') {
            result = input * 2.20462;
          }
        } else if (from == 'ton') {
          if (to == 'kg') {
            result = input * 1000;
          } else if (to == 'g') {
            result = input * Math.pow(10, 6);
          } else if (to == 'lb') {
            result = input * 2204.62;
          }
      
        } else if (from == 'g') {
          if (to == 'kg') {
            result = input / 1000;
          } else if (to == 'ton') {
            result = input / Math.pow(10, 6);
          } else if (to == 'lb') {
            result = input * 0.00220462;
          }
        } else if (from == 'lb') {
          if (to == 'kg') {
            result = input * 0.453592;
          } else if (to == 'g') {
            result = input * 453.592;
          } else if (to == 'ton') {
            result = input * 0.000453592;
          }
        }
        document.getElementById("resultWeighCalculator").innerHTML = `${result + ' ' + to}`;
      }

      function fun11() {
        document.querySelector("#calc11").addEventListener('click', function () {
          document.querySelector('#inputweigh').value = "";
          document.getElementById('resultWeighCalculator').innerHTML = "";
        });
      }

      document.querySelector('.weigh-converter__convert').addEventListener('click', (e) => {
        e.preventDefault()
          weigh_convertor();
      });

      document.querySelector('.weigh-converter__reset').addEventListener('click', () => {
        fun11();
    });

}


export default weighConvertor;