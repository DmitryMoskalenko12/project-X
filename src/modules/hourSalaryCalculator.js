const hourSalaryCalculator = () => {
    function calculate(){
        let amount = parseFloat(document.querySelector('.hour-salary-calculator__amount').value);
        let hoursPerWeek = parseFloat(document.querySelector('.hour-salary-calculator__week').value);
        let e = document.querySelector('.hour-salary-calculator__period');
       let workingPeriod = e.options[e.selectedIndex].value;
     
        if(!isNaN(amount) && !isNaN(hoursPerWeek))
        {
            let annualAmount;
            if(workingPeriod == "Hourly"){
               annualAmount = amount * hoursPerWeek * 52;
            } else if(workingPeriod == "Weekly"){
               annualAmount = amount * 52;
            }  else if(workingPeriod == "Bi-Weekly"){
               annualAmount = amount * 26;
            }  else if(workingPeriod == "Semi-Monthly"){
               annualAmount = amount * 24;
            } else if(workingPeriod == "Monthly"){
               annualAmount = amount * 12;
            } else if(workingPeriod == "Quarterly"){
               annualAmount = amount * 4;
            } else if(workingPeriod == "Semi-Annually"){
               annualAmount = amount * 2;
            } else if(workingPeriod == "Annually"){
               annualAmount = amount;
            } 

            function convertToMoney(amount){
                return amount.toLocaleString(undefined, {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2
                                    });
                }

            let hourly = annualAmount/52/hoursPerWeek;
            let weekly = annualAmount/52;
            let biweekly = annualAmount/26;
            let semiMonthly = annualAmount/24;
            let monthly = annualAmount/12;
            let quarterly = annualAmount/4;
            let semiAnnually = annualAmount/2;
            let annually = annualAmount;
    
            document.querySelector('.hour-salary-calculator__hourly').innerHTML = convertToMoney(hourly);
            document.querySelector('.hour-salary-calculator__weekly').innerHTML = convertToMoney(weekly);
            document.querySelector('.hour-salary-calculator__bi-weekly').innerHTML = convertToMoney(biweekly);
            document.querySelector('.hour-salary-calculator__semi-monthly').innerHTML = convertToMoney(semiMonthly);
            document.querySelector('.hour-salary-calculator__monthly').innerHTML = convertToMoney(monthly);
            document.querySelector('.hour-salary-calculator__quarterly').innerHTML = convertToMoney(quarterly);
            document.querySelector('.hour-salary-calculator__semi-annually').innerHTML = convertToMoney(semiAnnually);
            document.querySelector('.hour-salary-calculator__annually').innerHTML = convertToMoney(annually);
        }
    }
    
    document.querySelector('.hour-salary-calculator__period').addEventListener('change', () => {
        calculate();
    });

    document.querySelector('.hour-salary-calculator__amount').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.hour-salary-calculator__week').addEventListener('keyup', () => {
        calculate();
    });
}

export default hourSalaryCalculator;