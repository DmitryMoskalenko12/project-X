const teaspoonsToGrams = () => {
    function calculateByTeaspoon()
    {
        let teaspoon = parseFloat(document.querySelector('.teaspoons-to-grams__teaspoon').value);
        if(!isNaN(teaspoon))
        {		
            let gram = teaspoon*5;
            let oz = teaspoon/ 6;
            let ml=oz*29.5735295625;
            let gallon = oz/128;
            let quart = oz/32;
            let pint = oz/16;
            let cup = ml/240;
            let tablespoon =oz*2;
        
            let liter = ml/1000;
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

            document.querySelector(".teaspoons-to-grams__gram").value=toDecimal(gram);
            document.querySelector(".teaspoons-to-grams__ml").innerHTML=toDecimal(ml);
            document.querySelector(".teaspoons-to-grams__us-teaspoon").innerHTML= teaspoon;
            document.querySelector(".teaspoons-to-grams__grams").innerHTML=toDecimal(gram);
            document.querySelector(".teaspoons-to-grams__gallon").innerHTML= toDecimal(gallon);
            document.querySelector(".teaspoons-to-grams__quart").innerHTML= toDecimal(quart);
            document.querySelector(".teaspoons-to-grams__pint").innerHTML= toDecimal(pint);
            document.querySelector(".teaspoons-to-grams__cup").innerHTML= toDecimal(cup);
            document.querySelector(".teaspoons-to-grams__us-tablespoon").innerHTML= toDecimal(tablespoon);
            document.querySelector(".teaspoons-to-grams__oz").innerHTML= toDecimal(oz);
            document.querySelector(".teaspoons-to-grams__liter").innerHTML= toDecimal(liter);
            document.querySelector(".teaspoons-to-grams__uk-oz").innerHTML= toDecimal(ukOz);
            document.querySelector(".teaspoons-to-grams__uk-gallon").innerHTML= toDecimal(ukGallon);
            document.querySelector(".teaspoons-to-grams__uk-quart").innerHTML= toDecimal(ukQuart);
            document.querySelector(".teaspoons-to-grams__uk-pint").innerHTML= toDecimal(ukPint);
            document.querySelector(".teaspoons-to-grams__uk-cup").innerHTML= toDecimal(ukCup);
            document.querySelector(".teaspoons-to-grams__uk-tablespoon").innerHTML= toDecimal(ukTablespoon);
            document.querySelector(".teaspoons-to-grams__uk-teaspoon").innerHTML= toDecimal(ukTeaspoon);
          
        } 
        else 
        {
            document.querySelector(".teaspoons-to-grams__gram").value="";
            document.querySelector(".teaspoons-to-grams__ml").innerHTML="";
            document.querySelector(".teaspoons-to-grams__us-teaspoon").innerHTML="";
            document.querySelector(".teaspoons-to-grams__grams").innerHTML="";
            document.querySelector(".teaspoons-to-grams__gallon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__quart").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__pint").innerHTML="";
            document.querySelector(".teaspoons-to-grams__cup").innerHTML="";
            document.querySelector(".teaspoons-to-grams__us-tablespoon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__oz").innerHTML="";
            document.querySelector(".teaspoons-to-grams__liter").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-oz").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-gallon").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-quart").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-pint").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-cup").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-tablespoon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-teaspoon").innerHTML= "";
        }
    
    }

    document.querySelector('.teaspoons-to-grams__teaspoon').addEventListener('keyup', () => {
       calculateByTeaspoon();
    });

    function calculateByGram()
    {
        let gram = parseFloat(document.querySelector('.teaspoons-to-grams__gram').value);
        if(!isNaN(gram))
        {		
            let teaspoon = gram/ 5;
        
            let oz = teaspoon/ 6;
            let ml=oz*29.5735295625;
            let gallon = oz/128;
            let quart = oz/32;
            let pint = oz/16;
            let cup = ml/240;
            let tablespoon =oz*2;
        
            let liter = ml/1000;
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

            document.querySelector(".teaspoons-to-grams__teaspoon").value=toDecimal(teaspoon);
            document.querySelector(".teaspoons-to-grams__ml").innerHTML=toDecimal(ml);
            document.querySelector(".teaspoons-to-grams__us-teaspoon").innerHTML= toDecimal(teaspoon);
            document.querySelector(".teaspoons-to-grams__grams").innerHTML=gram;
            document.querySelector(".teaspoons-to-grams__gallon").innerHTML= toDecimal(gallon);
            document.querySelector(".teaspoons-to-grams__quart").innerHTML= toDecimal(quart);
            document.querySelector(".teaspoons-to-grams__pint").innerHTML= toDecimal(pint);
            document.querySelector(".teaspoons-to-grams__cup").innerHTML= toDecimal(cup);
            document.querySelector(".teaspoons-to-grams__us-tablespoon").innerHTML= toDecimal(tablespoon);
            document.querySelector(".teaspoons-to-grams__oz").innerHTML= toDecimal(oz);
            document.querySelector(".teaspoons-to-grams__liter").innerHTML= toDecimal(liter);
            document.querySelector(".teaspoons-to-grams__uk-oz").innerHTML= toDecimal(ukOz);
            document.querySelector(".teaspoons-to-grams__uk-gallon").innerHTML= toDecimal(ukGallon);
            document.querySelector(".teaspoons-to-grams__uk-quart").innerHTML= toDecimal(ukQuart);
            document.querySelector(".teaspoons-to-grams__uk-pint").innerHTML= toDecimal(ukPint);
            document.querySelector(".teaspoons-to-grams__uk-cup").innerHTML= toDecimal(ukCup);
            document.querySelector(".teaspoons-to-grams__uk-tablespoon").innerHTML= toDecimal(ukTablespoon);
            document.querySelector(".teaspoons-to-grams__uk-teaspoon").innerHTML= toDecimal(ukTeaspoon);
        }
        else
        {
            document.querySelector(".teaspoons-to-grams__teaspoon").value="";
            document.querySelector(".teaspoons-to-grams__ml").innerHTML="";
            document.querySelector(".teaspoons-to-grams__us-teaspoon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__grams").innerHTML="";
            document.querySelector(".teaspoons-to-grams__gallon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__quart").innerHTML="";
            document.querySelector(".teaspoons-to-grams__pint").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__cup").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__us-tablespoon").innerHTML="";
            document.querySelector(".teaspoons-to-grams__oz").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__liter").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-oz").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-gallon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-quart").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-pint").innerHTML="";
            document.querySelector(".teaspoons-to-grams__uk-cup").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-tablespoon").innerHTML= "";
            document.querySelector(".teaspoons-to-grams__uk-teaspoon").innerHTML= "";
        }
    }

    document.querySelector('.teaspoons-to-grams__gram').addEventListener('keyup', () => {
        calculateByGram();
     });
}

export default teaspoonsToGrams;