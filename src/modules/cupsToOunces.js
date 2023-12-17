const cupsToOunces = () => {
    function calculateByUscup()
{
    let uscup = parseFloat(document.querySelector('.cups-to-ounces__us-cup').value);
	if(!isNaN(uscup))
	{		
		let quart = uscup / 4;
		let oz = quart * 32;
		let gallon = oz / 128;
		let ml=oz*29.5735295625;
		let liter = ml/1000;
		let pint = oz/16;
		let cup = ml/240;
		let tablespoon =oz*2;
		let teaspoon = tablespoon * 3;
		let ukOz = oz*1.04084273078623633;
		let ukGallon = ukOz/160;
		let ukQuart = ukGallon*4;
		let ukPint = ukGallon*8;
		let ukCup = ukGallon*16;
		let ukTablespoon =ukGallon*256;
		let ukTeaspoon =ukGallon*768;
		
        function toDecimal(x) {  
            var f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         }  

		document.querySelector(".cups-to-ounces__oz").value= toDecimal(oz);
		document.querySelector(".cups-to-ounces__us-cup1").innerHTML= uscup;
		document.querySelector(".cups-to-ounces__oz1").innerHTML= toDecimal(oz);
		document.querySelector(".cups-to-ounces__gallon").innerHTML=toDecimal(gallon);
		document.querySelector(".cups-to-ounces__ml").innerHTML=toDecimal(ml);
		document.querySelector(".cups-to-ounces__liter").innerHTML= toDecimal(liter);
		document.querySelector(".cups-to-ounces__quart").innerHTML= toDecimal(quart);
		document.querySelector(".cups-to-ounces__cup").innerHTML= toDecimal(cup);
		document.querySelector(".cups-to-ounces__pint").innerHTML= toDecimal(pint);
		document.querySelector(".cups-to-ounces__tablespoon").innerHTML= toDecimal(tablespoon);
		document.querySelector(".cups-to-ounces__teaspoon").innerHTML= toDecimal(teaspoon);
		document.querySelector(".cups-to-ounces__uk-oz").innerHTML= toDecimal(ukOz);
		document.querySelector(".cups-to-ounces__uk-gallon").innerHTML= toDecimal(ukGallon);
		document.querySelector(".cups-to-ounces__uk-quart").innerHTML= toDecimal(ukQuart);
		document.querySelector(".cups-to-ounces__uk-print").innerHTML= toDecimal(ukPint);
		document.querySelector(".cups-to-ounces__uk-cup").innerHTML= toDecimal(ukCup);
		document.querySelector(".cups-to-ounces__uk-tablesp").innerHTML= toDecimal(ukTablespoon);
		document.querySelector(".cups-to-ounces__uk-teasp").innerHTML= toDecimal(ukTeaspoon);
	} 
	else 
	{
		document.querySelector(".cups-to-ounces__oz").value="";
		document.querySelector(".cups-to-ounces__us-cup1").innerHTML= "";
		document.querySelector(".cups-to-ounces__oz1").innerHTML= "";
		document.querySelector(".cups-to-ounces__gallon").innerHTML="";
		document.querySelector(".cups-to-ounces__ml").innerHTML="";
		document.querySelector(".cups-to-ounces__liter").innerHTML= "";
		document.querySelector(".cups-to-ounces__quart").innerHTML= "";
		document.querySelector(".cups-to-ounces__cup").innerHTML= "";
		document.querySelector(".cups-to-ounces__pint").innerHTML= "";
		document.querySelector(".cups-to-ounces__tablespoon").innerHTML= "";
		document.querySelector(".cups-to-ounces__teaspoon").innerHTML="";
		document.querySelector(".cups-to-ounces__uk-oz").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-gallon").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-quart").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-print").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-cup").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-tablesp").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-teasp").innerHTML= "";
	}
}

document.querySelector('.cups-to-ounces__us-cup').addEventListener('keyup', () => {
    calculateByUscup();
});

function calculateByOz()
{
	 let oz = parseFloat(document.querySelector('.cups-to-ounces__oz').value);
	 if(!isNaN(oz))
	 {
		let gallon = oz/128;
		let quart = oz/32;
		let uscup = quart*4;
		let pint = oz / 16;
		let ml=oz*29.5735295625;
		let liter = ml/1000;
		let cup = ml/240;
		let tablespoon =oz*2;
		let teaspoon = tablespoon * 3;
		let ukOz = oz*1.04084273078623633;
		let ukGallon = ukOz/160;
		let ukQuart = ukGallon*4;
		let ukPint = ukGallon*8;
		let ukCup = ukGallon*16;
		let ukTablespoon =ukGallon*256;
		let ukTeaspoon =ukGallon*768;

        function toDecimal(x) {  
            var f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         }  

		document.querySelector(".cups-to-ounces__us-cup").value=toDecimal(uscup);
		document.querySelector(".cups-to-ounces__us-cup1").innerHTML= toDecimal(uscup);
		document.querySelector(".cups-to-ounces__oz1").innerHTML= oz;
		document.querySelector(".cups-to-ounces__gallon").innerHTML= toDecimal(gallon);
		document.querySelector(".cups-to-ounces__ml").innerHTML=toDecimal(ml);
		document.querySelector(".cups-to-ounces__liter").innerHTML= toDecimal(liter);
		document.querySelector(".cups-to-ounces__quart").innerHTML= toDecimal(quart);
		document.querySelector(".cups-to-ounces__cup").innerHTML= toDecimal(cup);
		document.querySelector(".cups-to-ounces__pint").innerHTML= toDecimal(pint);
		document.querySelector(".cups-to-ounces__tablespoon").innerHTML= toDecimal(tablespoon);
		document.querySelector(".cups-to-ounces__teaspoon").innerHTML= toDecimal(teaspoon);
		document.querySelector(".cups-to-ounces__uk-oz").innerHTML= toDecimal(ukOz);
		document.querySelector(".cups-to-ounces__uk-gallon").innerHTML= toDecimal(ukGallon);
		document.querySelector(".cups-to-ounces__uk-quart").innerHTML= toDecimal(ukQuart);
		document.querySelector(".cups-to-ounces__uk-print").innerHTML= toDecimal(ukPint);
		document.querySelector(".cups-to-ounces__uk-cup").innerHTML= toDecimal(ukCup);
		document.querySelector(".cups-to-ounces__uk-tablesp").innerHTML= toDecimal(ukTablespoon);
		document.querySelector(".cups-to-ounces__uk-teasp").innerHTML= toDecimal(ukTeaspoon);
	} 
	else
	{
		document.querySelector(".cups-to-ounces__us-cup").value="";
		document.querySelector(".cups-to-ounces__us-cup1").innerHTML= "";
		document.querySelector(".cups-to-ounces__oz1").innerHTML= "";
		document.querySelector(".cups-to-ounces__gallon").innerHTML= "";
		document.querySelector(".cups-to-ounces__ml").innerHTML="";
		document.querySelector(".cups-to-ounces__liter").innerHTML= "";
		document.querySelector(".cups-to-ounces__quart").innerHTML= "";
		document.querySelector(".cups-to-ounces__cup").innerHTML= "";
		document.querySelector(".cups-to-ounces__pint").innerHTML= "";
		document.querySelector(".cups-to-ounces__tablespoon").innerHTML= "";
		document.querySelector(".cups-to-ounces__teaspoon").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-oz").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-gallon").innerHTML="";
		document.querySelector(".cups-to-ounces__uk-quart").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-print").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-cup").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-tablesp").innerHTML= "";
		document.querySelector(".cups-to-ounces__uk-teasp").innerHTML= "";
	}
}

document.querySelector('.cups-to-ounces__oz').addEventListener('keyup', () => {
    calculateByOz();
});

}

export default cupsToOunces;