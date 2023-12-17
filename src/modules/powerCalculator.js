const powerCalculator = () => {
    document.querySelector(".power-calculator__button").addEventListener("click", () => {
        document.querySelector(".power-calculator__watts").value = "";
        document.querySelector(".power-calculator__kilowatts").value = "";
        document.querySelector(".power-calculator__horse-power").value = "";
        document.querySelector(".power-calculator__fpm").value = "";
        document.querySelector(".power-calculator__bm").value = "";
      });
      let Watts = document.querySelector(".power-calculator__watts");
      let KiloWatts = document.querySelector(".power-calculator__kilowatts");
      let Horsepowers = document.querySelector(".power-calculator__horse-power");
      let fpm = document.querySelector(".power-calculator__fpm");
      let bm = document.querySelector(".power-calculator__bm");

      function WattsToOther(val) {
        KiloWatts.value = val / 1000;
        Horsepowers.value = val * 0.001341;
        fpm.value = val * 44.25373;
        bm.value = val * 0.056869;
      }
      function KiloWattsToOther(val) {
        Watts.value = val * 1000;
        Horsepowers.value = val * 1.341022;
        fpm.value = val * 44253.73;
        bm.value = val * 56.86902;
      }
      function HorsepowersToOther(val) {
        Watts.value = val * 745.6999;
        KiloWatts.value = val * 0.7457;
        fpm.value = val * 33000;
        bm.value = val * 42.40722;
      }
      function fpmToOther(val) {
        Watts.value = val * 0.022597;
        Horsepowers.value = val * 0.00003;
        KiloWatts.value = val * 0.000023;
        bm.value = val * 0.001285;
      }
      function bmToOther(val) {
        Watts.value = val * 17.58427;
        KiloWatts.value = val * 0.017584;
        fpm.value = val * 778.1694;
        Horsepowers.value = val * 0.023581;
      }

      function convertToOthers(convertFrom, value) {
        switch (convertFrom) {
          case "Watts":
            WattsToOther(parseFloat(value));
            break;
          case "KiloWatts":
            KiloWattsToOther(parseFloat(value));
            break;
          case "Horsepowers":
            HorsepowersToOther(parseFloat(value));
            break;
          case "bm":
            bmToOther(parseFloat(value));
            break;
          case "fpm":
            fpmToOther(parseFloat(value));
            break;
        }
      }

      document.querySelector(".power-calculator__watts").addEventListener('input', (e) => {
        convertToOthers('Watts', e.target.value);
      });

      document.querySelector(".power-calculator__kilowatts").addEventListener('input', (e) => {
        convertToOthers('KiloWatts', e.target.value);
      });

      document.querySelector(".power-calculator__horse-power").addEventListener('input', (e) => {
        convertToOthers('Horsepowers', e.target.value);
      });

      document.querySelector(".power-calculator__fpm").addEventListener('input', (e) => {
        convertToOthers('fpm', e.target.value);
      });

      document.querySelector(".power-calculator__bm").addEventListener('input', (e) => {
        convertToOthers('bm', e.target.value);
      });

}

export default powerCalculator;