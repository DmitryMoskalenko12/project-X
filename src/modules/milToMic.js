const milToMic = () => {
    function calculateByMg()
{   
    function toDecimalDigital(amount, digits){
        return amount.toLocaleString(undefined, {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: digits
                            });
        }

        function toDecimal(x) {  
            let f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         } 
    let milligrams = parseFloat(document.querySelector('.mil-to-mic__milli').value);
	if(!isNaN(milligrams))
	{		
		let kg=milligrams/1000000;
		let pounds=kg/0.45359237;
		let grams=kg*1000;
		let metricTons = kg/1000;
		let micrograms= kg*1000000000;
		let stones = pounds/14;
		let ounces = pounds*16;
		document.querySelector(".mil-to-mic__pounds").innerHTML=toDecimalDigital(pounds,8);
		document.querySelector(".mil-to-mic__metric-tons").innerHTML=toDecimalDigital(metricTons,9);
		document.querySelector(".mil-to-mic__kg").innerHTML= toDecimalDigital(kg,8);
		document.querySelector(".mil-to-mic__grams").innerHTML=toDecimal(grams);
		document.querySelector(".mil-to-mic__stones").innerHTML=toDecimalDigital(stones,8);
		document.querySelector(".mil-to-mic__ounces").innerHTML=toDecimalDigital(ounces,8);
		document.querySelector(".mil-to-mic__milli1").innerHTML= milligrams;
		document.querySelector(".mil-to-mic__micro1").innerHTML=toDecimal(micrograms);
		document.querySelector(".mil-to-mic__micro").value = toDecimal(micrograms);
	}
	else
	{
		document.querySelector(".mil-to-mic__pounds").innerHTML= "";
		document.querySelector(".mil-to-mic__metric-tons").innerHTML="";
		document.querySelector(".mil-to-mic__kg").innerHTML="";
		document.querySelector(".mil-to-mic__grams").innerHTML= "";
		document.querySelector(".mil-to-mic__stones").innerHTML="";
		document.querySelector(".mil-to-mic__ounces").innerHTML="";
		document.querySelector(".mil-to-mic__milli1").innerHTML= "";
		document.querySelector(".mil-to-mic__micro1").innerHTML= "";
		document.querySelector(".mil-to-mic__micro").value = "";
	}
}

document.querySelector('.mil-to-mic__milli').addEventListener('keyup', () => {
    calculateByMg();
});

function calculateByMcg()
{
    function toDecimalDigital(amount, digits){
        return amount.toLocaleString(undefined, {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: digits
                            });
        }

        function toDecimal(x) {  
            let f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         } 

	 let micrograms = parseFloat(document.querySelector('.mil-to-mic__micro').value);
	 if(!isNaN(micrograms))
	 {
		let kg=micrograms/1000000000;
		let grams=kg*1000;
		let metricTons = kg/1000;
		let milligrams = kg*1000000;
		let pounds = kg*2.20462262185 ;
		let stones = kg/6.35029318;
		let ounces = grams*0.03527396195;
		document.querySelector(".mil-to-mic__pounds").innerHTML=toDecimalDigital(pounds,9);
		document.querySelector(".mil-to-mic__metric-tons").innerHTML=toDecimalDigital(metricTons,13);
		document.querySelector(".mil-to-mic__grams").innerHTML= toDecimalDigital(grams,9);
		document.querySelector(".mil-to-mic__kg").innerHTML=toDecimalDigital(kg,9);
		document.querySelector(".mil-to-mic__stones").innerHTML=toDecimalDigital(stones,11);
		document.querySelector(".mil-to-mic__ounces").innerHTML=toDecimalDigital(ounces,9);
		document.querySelector(".mil-to-mic__micro1").innerHTML= micrograms;
		document.querySelector(".mil-to-mic__milli1").innerHTML= toDecimal(milligrams);
		document.querySelector(".mil-to-mic__milli").value = toDecimal(milligrams);
	} 
	else 
	{
		document.querySelector(".mil-to-mic__pounds").innerHTML= "";
		document.querySelector(".mil-to-mic__metric-tons").innerHTML="";
		document.querySelector(".mil-to-mic__milli1").innerHTML="";
		document.querySelector(".mil-to-mic__micro1").innerHTML= "";
		document.querySelector(".mil-to-mic__stones").innerHTML="";
		document.querySelector(".mil-to-mic__ounces").innerHTML="";
		document.querySelector(".mil-to-mic__kg").innerHTML= "";
		document.querySelector(".mil-to-mic__grams").innerHTML= "";
		document.querySelector(".mil-to-mic__milli").value = "";
	}
}

document.querySelector('.mil-to-mic__micro').addEventListener('keyup', () => {
    calculateByMcg();
});
}

export default milToMic;