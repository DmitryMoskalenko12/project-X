const stepsToMiles = () => {
    function calculate()
    {
        let miles = parseFloat(document.querySelector('.steps-to-miles__miles').value);
        let steps = parseFloat(document.querySelector('.steps-to-miles__steps').value);
        
        if(!isNaN(steps))
        {
            calculateBySteps();		
        } else {
            calculateByMiles();
        }	
    }
    
    function calculateByMiles()
    {
        let miles = parseFloat(document.querySelector('.steps-to-miles__miles').value);
        let isMale = document.querySelector('.steps-to-miles__male').checked;
        let result;
        if(!isNaN(miles))
        {
            if(isMale)
            {
                result = miles * 2112;
            } else {
                result = miles * 2400;
            }
            
            document.querySelector(".steps-to-miles__steps").value = result;
        } else {
            document.querySelector(".steps-to-miles__steps").value = "";
        }
    }

    function calculateBySteps()
    {
        let steps = parseFloat(document.querySelector('.steps-to-miles__steps').value);
        let isMale = document.querySelector('.steps-to-miles__male').checked;
        let result;
        if(!isNaN(steps))
        {
            if(isMale)
            {
                result = steps / 2112;
            } else {
                result = steps / 2400;
            }
            
            document.querySelector(".steps-to-miles__miles").value = result;
        } else {
            document.querySelector(".steps-to-miles__miles").value = "";
        }
    }

   document.querySelector('.steps-to-miles__male').addEventListener('change', () => {
    calculate();
   });

   document.querySelector('.steps-to-miles__female').addEventListener('change', () => {
    calculate();
   });

   document.querySelector('.steps-to-miles__steps').addEventListener('keyup', () => {
    calculateBySteps();
   });

   document.querySelector('.steps-to-miles__miles').addEventListener('keyup', () => {
    calculateByMiles();
   });
}

export default stepsToMiles;