const lbsToKg = () => {
    function calculateByPounds()
{
    let pounds = parseFloat(document.querySelector('.lbs-to-kg__pounds').value);
	if( !isNaN(pounds))
	{		
		let kg = pounds * 0.45359237;
		let grams = pounds * 453.59237;
		let metricTons = pounds /2204.623;
		let milligrams = pounds*453592.37;
		let micrograms= pounds* 453592370;
		let stones = pounds / 14;
		let ounces = pounds * 16;

        function toDecimal(x) {  
            var f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         }  

	   document.querySelector(".lbs-to-kg__grams").innerHTML=toDecimal(grams);
	   document.querySelector(".lbs-to-kg__mtons").innerHTML=toDecimal(metricTons);
	   document.querySelector(".lbs-to-kg__milligrams").innerHTML= toDecimal(milligrams);
	   document.querySelector(".lbs-to-kg__micrograms").innerHTML=toDecimal(micrograms);
	   document.querySelector(".lbs-to-kg__stones").innerHTML=toDecimal(stones);
	   document.querySelector(".lbs-to-kg__ounces").innerHTML=toDecimal(ounces);
	   document.querySelector(".lbs-to-kg__pounds1").innerHTML= pounds;
	   document.querySelector(".lbs-to-kg__kg1").innerHTML=toDecimal (kg);
	   document.querySelector(".lbs-to-kg__kg").value = toDecimal(kg);
	} else {
		document.querySelector(".lbs-to-kg__grams").innerHTML=""
	   document.querySelector(".lbs-to-kg__mtons").innerHTML=""
	   document.querySelector(".lbs-to-kg__milligrams").innerHTML= ""
	   document.querySelector(".lbs-to-kg__micrograms").innerHTML=""
	   document.querySelector(".lbs-to-kg__stones").innerHTML=""
	   document.querySelector(".lbs-to-kg__ounces").innerHTML=""
	   document.querySelector(".lbs-to-kg__pounds1").innerHTML= ""
	   document.querySelector(".lbs-to-kg__kg1").innerHTML=""
	   document.querySelector(".lbs-to-kg__kg").value = ""
	}
}

document.querySelector('.lbs-to-kg__pounds').addEventListener('keyup', () => {
    calculateByPounds()
});

function calculateByKg()
{
	 let kg = parseFloat(document.querySelector('.lbs-to-kg__kg').value);
	 if( !isNaN(kg))
	 {
		 	
		let pounds = kg * 2.20462262185 ;
		let grams = kg * 1000;
		let metricTons = kg / 1000;
		let milligrams = kg * 1000000;
		let micrograms= kg * 1000000000;
		let stones = kg/ 6.35029318;
		let ounces = kg * 35.27392;

	   function toDecimal(x) {  
            var f = parseFloat(x);  
            if (!isNaN(f)) {  
                f = Math.round(x*100000)/100000;  
                return f;   
            }  
       }  
       
        document.querySelector(".lbs-to-kg__grams").innerHTML=toDecimal(grams);
        document.querySelector(".lbs-to-kg__mtons").innerHTML=toDecimal(metricTons);
        document.querySelector(".lbs-to-kg__milligrams").innerHTML= toDecimal(milligrams);
        document.querySelector(".lbs-to-kg__micrograms").innerHTML=toDecimal(micrograms);
        document.querySelector(".lbs-to-kg__stones").innerHTML=toDecimal(stones);
        document.querySelector(".lbs-to-kg__ounces").innerHTML=toDecimal(ounces);
        document.querySelector(".lbs-to-kg__kg1").innerHTML= kg;
	    document.querySelector(".lbs-to-kg__pounds1").innerHTML= toDecimal(pounds);
	   document.getElementById(".lbs-to-kg__pounds").value = toDecimal(pounds);
	} else 
	{
		document.querySelector(".lbs-to-kg__grams").innerHTML=""
	   document.querySelector(".lbs-to-kg__mtons").innerHTML=""
	   document.querySelector(".lbs-to-kg__milligrams").innerHTML= ""
	   document.querySelector(".lbs-to-kg__micrograms").innerHTML=""
	   document.querySelector(".lbs-to-kg__stones").innerHTML=""
	   document.querySelector(".lbs-to-kg__ounces").innerHTML=""
	   document.querySelector(".lbs-to-kg__pounds1").innerHTML= ""
	   document.querySelector(".lbs-to-kg__kg1").innerHTML=""
	   document.querySelector(".lbs-to-kg__pounds").value = ""
	}
}

document.querySelector('.lbs-to-kg__kg').addEventListener('keyup', () => {
    calculateByKg();
});
}

export default lbsToKg;