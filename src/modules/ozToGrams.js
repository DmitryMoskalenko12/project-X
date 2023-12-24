const ozToGrams = () => {
    function calculateByGram()
{
    function toDecimal(x) {  
        let f = parseFloat(x);  
        if (!isNaN(f)) {  
           f = Math.round(x*100000)/100000;  
           return f;   
        }  
     }  

     function toDecimalDigital(amount, digits){
     return amount.toLocaleString(undefined, {
                           minimumFractionDigits: 0,
                           maximumFractionDigits: digits
                         });
     }

    let gram = parseFloat(document.querySelector('.oz-to-grams__gram').value);
	if(!isNaN(gram))
	{		
		let kg = gram / 1000;	
		let pounds = kg * 2.20462262185 ;
		let metricTons = kg / 1000;
		let milligrams = kg * 1000000;
		let micrograms= kg * 1000000000;
		let stones = kg/ 6.35029318;
		let ounces = gram * 0.03527396195;
		document.querySelector(".oz-to-grams__kg").innerHTML=toDecimal(kg);
		document.querySelector(".oz-to-grams__metric-tons").innerHTML=toDecimalDigital(metricTons,8);
		document.querySelector(".oz-to-grams__milligrams").innerHTML= toDecimal(milligrams);
		document.querySelector(".oz-to-grams__micrograms").innerHTML=toDecimal(micrograms);
		document.querySelector(".oz-to-grams__stones").innerHTML=toDecimal(stones);
		document.querySelector(".oz-to-grams__oz-dis").innerHTML=toDecimal(ounces);
		document.querySelector(".oz-to-grams__gram-dis").innerHTML= gram;
		document.querySelector(".oz-to-grams__pounds").innerHTML= toDecimal(pounds);
		document.querySelector(".oz-to-grams__ounces").value = toDecimal(ounces);
	}
	else
	{
		document.querySelector(".oz-to-grams__kg").innerHTML="";
		document.querySelector(".oz-to-grams__metric-tons").innerHTML="";
		document.querySelector(".oz-to-grams__milligrams").innerHTML="";
		document.querySelector(".oz-to-grams__micrograms").innerHTML="";
		document.querySelector(".oz-to-grams__stones").innerHTML="";
		document.querySelector(".oz-to-grams__oz-dis").innerHTML="";
		document.querySelector(".oz-to-grams__gram-dis").innerHTML="";
		document.querySelector(".oz-to-grams__pounds").innerHTML="";
		document.querySelector(".oz-to-grams__ounces").value = "";
	}
}

document.querySelector('.oz-to-grams__gram').addEventListener('keyup', () => {
calculateByGram();
});

function calculateByOunces()
{

    function toDecimal(x) {  
        let f = parseFloat(x);  
        if (!isNaN(f)) {  
           f = Math.round(x*100000)/100000;  
           return f;   
        }  
     }  

	let ounces = parseFloat(document.querySelector('.oz-to-grams__ounces').value);
	if(!isNaN(ounces))
	{		
		let gram=ounces/0.03527396195;
		let kg = gram / 1000;	
		let pounds = kg * 2.20462262185 ;
		let metricTons = kg / 1000;
		let milligrams = kg * 1000000;
		let micrograms= kg * 1000000000;
		let stones = kg/ 6.35029318;
		document.querySelector(".oz-to-grams__kg").innerHTML=toDecimal(kg);
		document.querySelector(".oz-to-grams__metric-tons").innerHTML=toDecimal(metricTons);
		document.querySelector(".oz-to-grams__milligrams").innerHTML= toDecimal(milligrams);
		document.querySelector(".oz-to-grams__micrograms").innerHTML=toDecimal(micrograms);
		document.querySelector(".oz-to-grams__stones").innerHTML=toDecimal(stones);
		document.querySelector(".oz-to-grams__gram-dis").innerHTML= toDecimal(gram);
		document.querySelector(".oz-to-grams__oz-dis").innerHTML= ounces;
		document.querySelector(".oz-to-grams__pounds").innerHTML= toDecimal(pounds);
		document.querySelector(".oz-to-grams__gram").value = toDecimal(gram);
	}
	else
	{
		document.querySelector(".oz-to-grams__kg").innerHTML="";
		document.querySelector(".oz-to-grams__metric-tons").innerHTML="";
		document.querySelector(".oz-to-grams__milligrams").innerHTML="";
		document.querySelector(".oz-to-grams__micrograms").innerHTML="";
		document.querySelector(".oz-to-grams__stones").innerHTML="";
		document.querySelector(".oz-to-grams__oz-dis").innerHTML="";
		document.querySelector(".oz-to-grams__gram-dis").innerHTML="";
		document.querySelector(".oz-to-grams__pounds").innerHTML="";
		document.querySelector(".oz-to-grams__gram").value = "";
	}
}

document.querySelector('.oz-to-grams__ounces').addEventListener('keyup', () => {
    calculateByOunces();
});

}

export default ozToGrams;