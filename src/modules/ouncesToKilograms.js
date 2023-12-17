const ouncesToKilograms = () => {
    function calculateByKg()
    {
        let kg = parseFloat(document.querySelector('.ounces-to-kilograms__kg').value);
        if( !isNaN(kg))
        {		
            let pounds = kg/0.45359237;
            let stones = pounds / 14;
            let grams = kg*1000 ;
            let metricTons = kg/1000;
            let milligrams = kg*1000000;
            let micrograms= kg*1000000000;
            let ounces = pounds * 16;
            let usTon = pounds/2000;
            let ukTon = usTon / 1.12;
           
            function toDecimal(x) {  
                let f = parseFloat(x);  
                if (!isNaN(f)) {  
                   f = Math.round(x*100000)/100000;  
                   return f;   
                }  
             }  

           document.querySelector(".ounces-to-kilograms__ounces").value = toDecimal(ounces);
           document.querySelector(".ounces-to-kilograms__kg").innerHTML=toDecimal(kg);
           document.querySelector(".ounces-to-kilograms__metric-tons").innerHTML=toDecimal(metricTons);
           document.querySelector(".ounces-to-kilograms__milligrams").innerHTML= toDecimal(milligrams);
           document.querySelector(".ounces-to-kilograms__micrograms").innerHTML=toDecimal(micrograms);
           document.querySelector(".ounces-to-kilograms__pounds").innerHTML=toDecimal(pounds);
           document.querySelector(".ounces-to-kilograms__grams").innerHTML=toDecimal(grams);
           document.querySelector(".ounces-to-kilograms__us-tons").innerHTML=toDecimal(usTon);
           document.querySelector(".ounces-to-kilograms__imperial-tons").innerHTML=toDecimal(ukTon);
           document.querySelector(".ounces-to-kilograms__stones").innerHTML=toDecimal(stones);
           document.querySelector(".ounces-to-kilograms__kg1").innerHTML= kg;
           document.querySelector(".ounces-to-kilograms__ounces1").innerHTML=toDecimal(ounces);
           
        } else {
           document.querySelector(".ounces-to-kilograms__ounces").value = "";
           document.querySelector(".ounces-to-kilograms__kg").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__metric-tons").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__milligrams").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__micrograms").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__pounds").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__grams").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__us-tons").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__imperial-tons").innerHTML= "";
           document.querySelector(".ounces-to-kilograms__stones").innerHTML="";
           document.querySelector(".ounces-to-kilograms__kg1").innerHTML=  "";
           document.querySelector(".ounces-to-kilograms__ounces1").innerHTML= "";
        }
    }

    document.querySelector('.ounces-to-kilograms__kg').addEventListener('keyup', () => {
        calculateByKg();
    });

    function calculateByOunces()
    {
         let ounces = parseFloat(document.querySelector('.ounces-to-kilograms__ounces').value);
         if( !isNaN(ounces))
         {
            let pounds = ounces/16;
            let stones = pounds/14;
            let kg = pounds * 0.45359237;
            let grams = kg*1000 ;
            let metricTons = kg/1000;
            let milligrams = kg*1000000;
            let micrograms= kg*1000000000;
            
            let usTon = pounds/2000;
            let ukTon = usTon / 1.12;
           
            function toDecimal(x) {  
                let f = parseFloat(x);  
                if (!isNaN(f)) {  
                   f = Math.round(x*100000)/100000;  
                   return f;   
                }  
             }  

            document.querySelector(".ounces-to-kilograms__kg").value = toDecimal(kg);
            document.querySelector(".ounces-to-kilograms__stones").innerHTML=toDecimal(stones);
            document.querySelector(".ounces-to-kilograms__metric-tons").innerHTML=toDecimal(metricTons);
            document.querySelector(".ounces-to-kilograms__milligrams").innerHTML= toDecimal(milligrams);
            document.querySelector(".ounces-to-kilograms__micrograms").innerHTML=toDecimal(micrograms);
            document.querySelector(".ounces-to-kilograms__pounds").innerHTML=toDecimal(pounds);
            document.querySelector(".ounces-to-kilograms__grams").innerHTML=toDecimal(grams);
            document.querySelector(".ounces-to-kilograms__us-tons").innerHTML=toDecimal(usTon);
            document.querySelector(".ounces-to-kilograms__imperial-tons").innerHTML=toDecimal(ukTon);
            document.querySelector(".ounces-to-kilograms__ounces").innerHTML=toDecimal(ounces);
            document.querySelector(".ounces-to-kilograms__kg1").innerHTML= toDecimal(kg);
            document.querySelector(".ounces-to-kilograms__ounces1").innerHTML=ounces;
        }
        else 
        {
            document.querySelector(".ounces-to-kilograms__kg").value = "";
            document.querySelector(".ounces-to-kilograms__stones").innerHTML="";
            document.querySelector(".ounces-to-kilograms__metric-tons").innerHTML="";
            document.querySelector(".ounces-to-kilograms__milligrams").innerHTML="";
            document.querySelector(".ounces-to-kilograms__micrograms").innerHTML="";
            document.querySelector(".ounces-to-kilograms__pounds").innerHTML="";
            document.querySelector(".ounces-to-kilograms__grams").innerHTML="";
            document.querySelector(".ounces-to-kilograms__us-tons").innerHTML="";
            document.querySelector(".ounces-to-kilograms__imperial-tons").innerHTML="";
            document.querySelector(".ounces-to-kilograms__ounces").innerHTML="";
            document.querySelector(".ounces-to-kilograms__kg1").innerHTML= "";
            document.querySelector(".ounces-to-kilograms__ounces1").innerHTML="";
        
        }
    }
    document.querySelector('.ounces-to-kilograms__ounces').addEventListener('keyup', () => {
        calculateByOunces()
    });
}

export default ouncesToKilograms;