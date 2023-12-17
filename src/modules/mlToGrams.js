const mlToGrams = () => {
    function calculateByGram()
{
    let grams = parseFloat(document.querySelector('.ml-to-grams__grams').value);
	if(!isNaN(grams))
	{		
		let ml = grams;
		let pounds = grams / 453.59237;
		let teaspoon = grams/ 5;
		let ounces = grams * 0.03527396195;
		let cups = pounds * 4;
		let kg = grams/1000;
		let metricTons = kg / 1000;
		let milligrams = kg * 1000000;
		let micrograms= kg * 1000000000;
		let stones = kg / 6.35029318;
		let imperialTons= pounds / 2240;
		let usTons = pounds / 2000;

		function toDecimal(x) {  
            var f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         }  

	   document.querySelector(".ml-to-grams__ml").value=toDecimal(ml);
	   document.querySelector(".ml-to-grams__grams1").innerHTML= grams;
	   document.querySelector(".ml-to-grams__ml1").innerHTML= toDecimal(ml);
	   document.querySelector(".ml-to-grams__kg").innerHTML=toDecimal(kg);
	   document.querySelector(".ml-to-grams__metric-tons").innerHTML=toDecimal(metricTons);
	   document.querySelector(".ml-to-grams__milligrams").innerHTML= toDecimal(milligrams);
	   document.querySelector(".ml-to-grams__micrograms").innerHTML=toDecimal(micrograms);
	   document.querySelector(".ml-to-grams__stones").innerHTML=toDecimal(stones);
	   document.querySelector(".ml-to-grams__ounces").innerHTML=toDecimal(ounces);
	   document.querySelector(".ml-to-grams__pounds").innerHTML = toDecimal(pounds);
	   document.querySelector(".ml-to-grams__imperial-tons").innerHTML = toDecimal(imperialTons);
	   document.querySelector(".ml-to-grams__us-tons").innerHTML = toDecimal(usTons);
	}
	else
	{
	   document.querySelector(".ml-to-grams__ml").value="";
	   document.querySelector(".ml-to-grams__grams1").innerHTML= "";
	   document.querySelector(".ml-to-grams__ml1").innerHTML= "";
	   document.querySelector(".ml-to-grams__kg").innerHTML="";
	   document.querySelector(".ml-to-grams__metric-tons").innerHTML="";
	   document.querySelector(".ml-to-grams__milligrams").innerHTML= "";
	   document.querySelector(".ml-to-grams__micrograms").innerHTML="";
	   document.querySelector(".ml-to-grams__stones").innerHTML="";
	   document.querySelector(".ml-to-grams__ounces").innerHTML="";
	   document.querySelector(".ml-to-grams__pounds").innerHTML ="";
	   document.querySelector(".ml-to-grams__imperial-tons").innerHTML = "";
	   document.querySelector(".ml-to-grams__us-tons").innerHTML = "";
	}
}

document.querySelector('.ml-to-grams__grams').addEventListener('keyup', () => {
    calculateByGram()
});

function calculateByMl()
{
	let ml = parseFloat(document.querySelector('.ml-to-grams__ml').value);
	if(!isNaN(ml))
	{		
		let grams = ml;
		let pounds = grams / 453.59237;
		let teaspoon = grams/ 5;
		let ounces = grams * 0.03527396195;
		let cups = pounds *4;
		let kg = grams/1000;
		let metricTons = kg / 1000;
		let milligrams = kg * 1000000;
		let micrograms= kg * 1000000000;
		let stones = kg/ 6.35029318;
		let imperialTons= pounds / 2240;
		let usTons = pounds / 2000;
		
        function toDecimal(x) {  
            var f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         }  
         
	   document.querySelector(".ml-to-grams__grams").value=toDecimal(grams);
	   document.querySelector(".ml-to-grams__grams1").innerHTML= toDecimal(grams);
	   document.querySelector(".ml-to-grams__ml1").innerHTML= ml;
	   document.querySelector(".ml-to-grams__kg").innerHTML=toDecimal(kg);
	   document.querySelector(".ml-to-grams__metric-tons").innerHTML=toDecimal(metricTons);
	   document.querySelector(".ml-to-grams__milligrams").innerHTML= toDecimal(milligrams);
	   document.querySelector(".ml-to-grams__micrograms").innerHTML=toDecimal(micrograms);
	   document.querySelector(".ml-to-grams__stones").innerHTML=toDecimal(stones);
	   document.querySelector(".ml-to-grams__ounces").innerHTML=toDecimal(ounces);
	   document.querySelector(".ml-to-grams__pounds").innerHTML = toDecimal(pounds);
	   document.querySelector(".ml-to-grams__imperial-tons").innerHTML = toDecimal(imperialTons);
	   document.querySelector(".ml-to-grams__us-tons").innerHTML = toDecimal(usTons);
	}
	else
	{
	   document.querySelector(".ml-to-grams__grams").value="";
	   document.querySelector(".ml-to-grams__grams1").innerHTML= "";
	   document.querySelector(".ml-to-grams__ml1").innerHTML= "";
	   document.querySelector(".ml-to-grams__kg").innerHTML="";
	   document.querySelector(".ml-to-grams__metric-tons").innerHTML="";
	   document.querySelector(".ml-to-grams__milligrams").innerHTML= "";
	   document.querySelector(".ml-to-grams__micrograms").innerHTML="";
	   document.querySelector(".ml-to-grams__stones").innerHTML="";
	   document.querySelector(".ml-to-grams__ounces").innerHTML="";
	   document.querySelector(".ml-to-grams__pounds").innerHTML ="";
	   document.querySelector(".ml-to-grams__imperial-tons").innerHTML = "";
	   document.querySelector(".ml-to-grams__us-tons").innerHTML = "";
	}
}

document.querySelector('.ml-to-grams__ml').addEventListener('keyup', () => {
    calculateByMl()
});

}

export default mlToGrams;