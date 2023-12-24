const gramsToCups = () => {
    function calculate()
{
	let gram = parseFloat(document.querySelector('.grams-to-cups__gram').value);

    function toDecimal(x) {  
        let f = parseFloat(x);  
        if (!isNaN(f)) {  
           f = Math.round(x*100000)/100000;  
           return f;   
        }  
     } 

	if(!isNaN(gram))	
	{
		let water=gram/236.5882365;
		let granulated_sugar=gram/200.86341278;
		let honey=gram/335.95529583;
		let powered_sugar=gram/120.89658885;
		let allpurpose_flour=gram/125.1551771;
		let milk=gram/244.86882477;
		let butter=gram/226.99931527;
		let coconut_oil=gram/218.671409349855;
		let olive_oil=gram/216.714824634;
		
		document.querySelector(".grams-to-cups__water").innerHTML=toDecimal(water)+" Cups";
		document.querySelector(".grams-to-cups__granu-sugar").innerHTML=toDecimal(granulated_sugar)+" Cups";
		document.querySelector(".grams-to-cups__honey").innerHTML=toDecimal(honey)+" Cups";
		document.querySelector(".grams-to-cups__power-sugar").innerHTML=toDecimal(powered_sugar)+" Cups";
		document.querySelector(".grams-to-cups__purpose-flour").innerHTML=toDecimal(allpurpose_flour)+" Cups";
		document.querySelector(".grams-to-cups__milk").innerHTML=toDecimal(milk)+" Cups";
		document.querySelector(".grams-to-cups__butter").innerHTML=toDecimal(butter)+" Cups";
		document.querySelector(".grams-to-cups__coconut-oil").innerHTML=toDecimal(coconut_oil)+" Cups";
		document.querySelector(".grams-to-cups__olive-oil").innerHTML=toDecimal(olive_oil)+" Cups";
	}else{
		document.querySelector(".grams-to-cups__water").innerHTML="";
		document.querySelector(".grams-to-cups__granu-sugar").innerHTML="";
		document.querySelector(".grams-to-cups__honey").innerHTML="";
		document.querySelector(".grams-to-cups__power-sugar").innerHTML="";
		document.querySelector(".grams-to-cups__purpose-flour").innerHTML="";
		document.querySelector(".grams-to-cups__milk").innerHTML="";
		document.querySelector(".grams-to-cups__butter").innerHTML="";
		document.querySelector(".grams-to-cups__coconut-oil").innerHTML="";
		document.querySelector(".grams-to-cups__olive-oil").innerHTML="";
	}	
}

document.querySelector('.grams-to-cups__gram').addEventListener('keyup', () => {
    calculate();
});

}

export default gramsToCups;