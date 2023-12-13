const dayCalculator = () => {
    function DaysCalculator() {
        var userinput = document.getElementById("starting-Date").value;
        var startingdate = new Date(userinput);
      
        var userinput1 = document.getElementById("ending-Date").value;
        var endingdate = new Date(userinput1);
      
        if (userinput == null || userinput1 == '' || userinput1 == null || userinput1 == '') {
          document.getElementById("message").innerHTML = "</br> **Choose both the starting date and ending date please!";
          return false;
        }
    
        else {
          var startingYear = startingdate.getYear();
          var startingMonth = startingdate.getMonth();
          var startingDate = startingdate.getDate();
      
      
          var endingYear = endingdate.getYear();
          var endingMonth = endingdate.getMonth();
          var endingDate = endingdate.getDate();
      
          var age = {};
          var ageString = "";
      
          var yearDuration = endingYear - startingYear;
      
          if (endingMonth >= startingMonth)
            var monthDuration = endingMonth - startingMonth;
          else {
            yearDuration--;
            var monthDuration = 12 + endingMonth - startingMonth;
          }
      
          if (endingDate >= startingDate)
            var dateDuration = endingDate - startingDate;
          else {
            monthDuration--;
            var dateDuration = 31 + endingDate - startingDate;
      
            if (monthDuration < 0) {
              monthDuration = 11;
              yearDuration--;
            }
          }
      
          age = {
            years: yearDuration,
            months: monthDuration,
            days: dateDuration
          };
      
      
          if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            ageString = age.years + " years, " + age.months + " months, and " + age.days + " days. ";
          else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
            ageString = "Result: " + age.days + " days.";
          else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
            ageString = age.years + " years!";
          else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
            ageString = age.years + " years and " + age.months + " months.";
          else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
            ageString = age.months + " months and " + age.days + " days .";
          else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
            ageString = age.years + " years, and" + age.days + " days.";
          else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
            ageString = age.months + " months old.";
          else ageString = "Please, Enter an valid date </br>You have entered Ending date which is less than the Starting Date";
      
          return document.getElementById("resultAge").innerHTML = ageString;
      
        }
      }
      
      document.querySelector('.days-calculator__reset').addEventListener('click', () => {
        document.querySelector("#starting-Date").value = "";
        document.querySelector("#ending-Date").value = "";
        document.getElementById("resultAge").textContent = "";
      });
    
      document.querySelector('.days-calculator__form').addEventListener('submit', (e) => {
       e.preventDefault();
       DaysCalculator();
      });
    
      document.body.addEventListener("keyup", (e) => {
        if(e.keyCode === 13){
            DaysCalculator();
        }
    });
}

export default dayCalculator;