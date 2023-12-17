const percentCalculator = () => {
    function calculate()
{
    let a1 = parseFloat(document.querySelector('.percent-calculator__what-is').value);
    let b1 = parseFloat(document.querySelector('.percent-calculator__of').value);
    let a2 = parseFloat(document.querySelector('.percent-calculator__is-what').value);
    let b2 = parseFloat(document.querySelector('.percent-calculator__is-what-res').value);
    let a3 = parseFloat(document.querySelector('.percent-calculator__from').value);
    let b3 = parseFloat(document.querySelector('.percent-calculator__to').value);   

    function convertToMoney(amount){
        return amount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            });
        }

	if(!isNaN(a1) && !isNaN(b1))
	{
	    let answer1 = a1/100 * b1;
	    document.querySelector('.percent-calculator__result1').innerHTML = convertToMoney(answer1);
	}
	
	if(!isNaN(a2) && !isNaN(b2))
	{
	    let answer2 = a2/b2*100;
	    document.querySelector('.percent-calculator__result2').innerHTML = convertToMoney(answer2)+"%";
	}
	
	if(!isNaN(a3) && !isNaN(b3))
	{
	    let answer3 = (b3-a3)/a3*100;
	    document.querySelector('.percent-calculator__result3').innerHTML = convertToMoney(answer3)+"%";
	}
} 

document.querySelector('.percent-calculator__what-is').addEventListener('keyup', () => {
    calculate();
});

document.querySelector('.percent-calculator__of').addEventListener('keyup', () => {
    calculate();
});

document.querySelector('.percent-calculator__is-what').addEventListener('keyup', () => {
    calculate();
});

document.querySelector('.percent-calculator__is-what-res').addEventListener('keyup', () => {
    calculate();
});

document.querySelector('.percent-calculator__from').addEventListener('keyup', () => {
    calculate();
});

document.querySelector('.percent-calculator__to').addEventListener('keyup', () => {
    calculate();
});

}

export default percentCalculator;