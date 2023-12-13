const timeConverter = () => {
  document.querySelector(".time-converter__reset").addEventListener("click", () => {
    document.querySelector(".time-converter__micro").value = "";
    document.querySelector(".time-converter__milli").value = "";
    document.querySelector(".time-converter__seconds").value = "";
    document.querySelector(".time-converter__hours").value = "";
    document.querySelector(".time-converter__minutes").value = "";
    document.querySelector(".time-converter__years").value = "";
    document.querySelector(".time-converter__week").value = "";
    document.querySelector(".time-converter__days").value = "";
  });
  
  let microsecondss = document.querySelector(".time-converter__micro");
  let millisecondss = document.querySelector(".time-converter__milli");
  let secondss = document.querySelector(".time-converter__seconds");
  let hourss = document.querySelector(".time-converter__hours");
  let minutess = document.querySelector(".time-converter__minutes");
  let yearss = document.querySelector(".time-converter__years");
  let weeks = document.querySelector(".time-converter__week");
  let dayss = document.querySelector(".time-converter__days");

  function microseconds(val) {
    millisecondss.value = val * 0.001;
    secondss.value = val * 0.000001;
    hourss.value = val * 0.000000000277778;
    minutess.value = val * 0.000000016666667;
    yearss.value = val * 0.00000000000032;
    weeks.value = val * 0.000000000001653;
    dayss.value = val * 0.000000000011574;
  }

  function milliseconds(val) {
    microsecondss.value = val * 1000;
    secondss.value = val * 0.000001 * 1000;
    hourss.value = val * 0.000000000277778* 1000;
    minutess.value = val * 0.000000016666667* 1000;
    yearss.value = val * 0.00000000000032* 1000;
    weeks.value = val * 0.000000000001653* 1000;
    dayss.value = val * 0.000000011574074;
  }

  function seconds(val) {
    millisecondss.value = val * 0.001* 1000000;
    microsecondss.value = val * 1000000;
    hourss.value = val * 0.000000000277778* 1000000;
    minutess.value = val * 0.000000016666667* 1000000;
    yearss.value = val * 0.00000000000032* 1000000;
    weeks.value = val * 0.000000000001653* 1000000;
    dayss.value = val * 0.000012;
  }

  function hours(val) {
    millisecondss.value = val * 0.001* 1000000* 3600;
    microsecondss.value = val * 1000000* 3600;
    secondss.value = val * 3600;
    minutess.value = val * 60;
    yearss.value = val * 0.000114;
    weeks.value = val * 0.005952;
    dayss.value = val * 0.041667;
  }

  function minutes(val) {
    microsecondss.value = val * 60000000;
    millisecondss.value = val * 60000;
    hourss.value = val * 0.016667;
    yearss.value = val * 0.000002;
    weeks.value = val * 0.000099;
    secondss.value = val * 60;
    dayss.value = val * 0.000694;
  }

  function years(val) {
    microsecondss.value = val * 31557600000000;
    millisecondss.value = val * 31557600000;
    hourss.value = val * 8766;
    minutess.value = val * 525960;
    weeks.value = val * 52.18;
    secondss.value = val * 31557600;
    dayss.value = val * 365.25;
  }

  function week(val) {
    microsecondss.value = val * 1209600000000;
    millisecondss.value = val * 1209600000;
    secondss.value = val * 1209600;
    minutess.value = val * 10080;
    hourss.value = val * 168;
    yearss.value = val * 0.02;
    dayss.value = val * 0.000012;
  }
  
  function days(val) {
    microsecondss.value = val * 86400000000;
    millisecondss.value = val * 86400000;
    secondss.value = val * 86400;
    minutess.value = val * 1440;
    hourss.value = val * 24;
    yearss.value = val * 0.002738;
    weeks.value = val * 0.142857;
  }

  function convertToOthers(convertFrom, value) {
    switch (convertFrom) {
      case "microseconds":
        microseconds(parseFloat(value));
        break;
      case "milliseconds":
        milliseconds(parseFloat(value));
        break;
      case "seconds":
        seconds(parseFloat(value));
        break;
      case "minutes":
        minutes(parseFloat(value));
        break;
      case "week":
        week(parseFloat(value));
        break;
      case "years":
        years(parseFloat(value));
        break;
      case "hours":
        hours(parseFloat(value));
        break;
      case "days":
        days(parseFloat(value));
        break;  
    }
  }

  microsecondss.addEventListener('input', (e) => {
    convertToOthers('microseconds', e.target.value);
  });

  millisecondss.addEventListener('input', (e) => {
    convertToOthers('milliseconds', e.target.value);
  });

  secondss.addEventListener('input', (e) => {
    convertToOthers('seconds', e.target.value);
  });

  hourss.addEventListener('input', (e) => {
    convertToOthers('hours', e.target.value);
  });

  minutess.addEventListener('input', (e) => {
    convertToOthers('minutes', e.target.value);
  });

  yearss.addEventListener('input', (e) => {
    convertToOthers('years', e.target.value);
  });

  weeks.addEventListener('input', (e) => {
    convertToOthers('week', e.target.value);
  });

  dayss.addEventListener('input', (e) => {
    convertToOthers('days', e.target.value);
  });
}

export default timeConverter;