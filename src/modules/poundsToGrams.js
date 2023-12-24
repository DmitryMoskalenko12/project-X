const poundsToGrams = () => {
    function calculateByPounds()
{
    function toDecimal(x) {  
        let f = parseFloat(x);  
        if (!isNaN(f)) {  
           f = Math.round(x*100000)/100000;  
           return f;   
        }  
     } 

    let pounds = parseFloat(document.querySelector('.pounds-to-grams__pounds').value);
	if( !isNaN(pounds))
	{		
		let kg = pounds * 0.45359237;
		let grams = pounds * 453.59237;
		let metricTons = pounds /2204.623;
		let milligrams = pounds*453592.37;
		let micrograms= pounds* 453592370;
		let stones = pounds / 14;
		let ounces = pounds * 16;
	   
	   document.querySelector(".pounds-to-grams__kg").innerHTML=toDecimal(kg);
	   document.querySelector(".pounds-to-grams__met-tons").innerHTML=toDecimal(metricTons);
	   document.querySelector(".pounds-to-grams__millig").innerHTML= toDecimal(milligrams);
	   document.querySelector(".pounds-to-grams__micrograms").innerHTML=toDecimal(micrograms);
	   document.querySelector(".pounds-to-grams__stones").innerHTML=toDecimal(stones);
	   document.querySelector(".pounds-to-grams__ounces").innerHTML=toDecimal(ounces);
	   document.querySelector(".pounds-to-grams__lbs").innerHTML= pounds;
	   document.querySelector(".pounds-to-grams__g").innerHTML=toDecimal (grams);
	   document.querySelector(".pounds-to-grams__grams").value = toDecimal(grams);
	} else {
		document.querySelector(".pounds-to-grams__kg").innerHTML= "";
	   document.querySelector(".pounds-to-grams__met-tons").innerHTML="";
	   document.querySelector(".pounds-to-grams__millig").innerHTML="";
	   document.querySelector(".pounds-to-grams__micrograms").innerHTML= "";
	   document.querySelector(".pounds-to-grams__stones").innerHTML="";
	   document.querySelector(".pounds-to-grams__ounces").innerHTML="";
	   document.querySelector(".pounds-to-grams__lbs").innerHTML= "";
	   document.querySelector(".pounds-to-grams__g").innerHTML= "";
	   document.querySelector(".pounds-to-grams__grams").value = "";
	}
}

document.querySelector('.pounds-to-grams__pounds').addEventListener('keyup', () => {
    calculateByPounds();
});

function calculateByGrams()
{
    function toDecimal(x) {  
        let f = parseFloat(x);  
        if (!isNaN(f)) {  
           f = Math.round(x*100000)/100000;  
           return f;   
        }  
     } 

	 let grams = parseFloat(document.querySelector('.pounds-to-grams__grams').value);
	 if( !isNaN(grams))
	 {
		let kg = grams / 1000;	
		let pounds = kg * 2.20462262185 ;
		let metricTons = kg / 1000;
		let milligrams = kg * 1000000;
		let micrograms= kg * 1000000000;
		let stones = kg/ 6.35029318;
		let ounces = grams * 0.03527396195;
	   
	   document.querySelector(".pounds-to-grams__kg").innerHTML=toDecimal(kg);
	   document.querySelector(".pounds-to-grams__met-tons").innerHTML=toDecimal(metricTons);
	   document.querySelector(".pounds-to-grams__millig").innerHTML= toDecimal(milligrams);
	   document.querySelector(".pounds-to-grams__micrograms").innerHTML=toDecimal(micrograms);
	   document.querySelector(".pounds-to-grams__stones").innerHTML=toDecimal(stones);
	   document.querySelector(".pounds-to-grams__ounces").innerHTML=toDecimal(ounces);
	   document.querySelector(".pounds-to-grams__g").innerHTML= grams;
	   document.querySelector(".pounds-to-grams__lbs").innerHTML= toDecimal(pounds);
	   document.querySelector(".pounds-to-grams__pounds").value = toDecimal(pounds);
	} else 
	{
		document.querySelector(".pounds-to-grams__kg").innerHTML= "";
	   document.querySelector(".pounds-to-grams__met-tons").innerHTML="";
	   document.querySelector(".pounds-to-grams__millig").innerHTML="";
	   document.querySelector(".pounds-to-grams__micrograms").innerHTML= "";
	   document.querySelector(".pounds-to-grams__stones").innerHTML="";
	   document.querySelector(".pounds-to-grams__ounces").innerHTML="";
	   document.querySelector(".pounds-to-grams__lbs").innerHTML= "";
	   document.querySelector(".pounds-to-grams__g").innerHTML= "";
	   document.querySelector(".pounds-to-grams__pounds").value = "";
	}
}

document.querySelector('.pounds-to-grams__grams').addEventListener('keyup', () => {
    calculateByGrams();
});
}

export default poundsToGrams;