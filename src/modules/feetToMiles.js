const feetToMiles = () => {
    function calculateByFeet()
    {
        let feet = parseFloat(document.querySelector('.feet-to-miles__feet').value);
        if(!isNaN(feet))
        {		
            let mile = feet*0.00018939;
            let kilometers = feet/3280.8;
            let cm = feet/0.032808;
            let yards = feet*0.33333;
            let inches= feet*12;
            let meters = feet/3.2808;
           document.querySelector(".feet-to-miles__meters").innerHTML= (meters).toFixed(5);
           document.querySelector(".feet-to-miles__inches").innerHTML=(inches).toFixed(5);
           document.querySelector(".feet-to-miles__yards").innerHTML=(yards).toFixed(5);
           document.querySelector(".feet-to-miles__kilometeres").innerHTML= (kilometers).toFixed(5);
           document.querySelector(".feet-to-miles__cm").innerHTML=(cm).toFixed(5);
           document.querySelector(".feet-to-miles__feet1").innerHTML= feet;
           document.querySelector(".feet-to-miles__miles1").innerHTML= (mile).toFixed(5);
           document.querySelector(".feet-to-miles__miles").value = (mile).toFixed(5);
        } else {
            document.querySelector(".feet-to-miles__meters").innerHTML="" 
            document.querySelector(".feet-to-miles__inches").innerHTML=""
            document.querySelector(".feet-to-miles__yards").innerHTML=""
            document.querySelector(".feet-to-miles__kilometeres").innerHTML= ""
            document.querySelector(".feet-to-miles__cm").innerHTML=""
            document.querySelector(".feet-to-miles__feet1").innerHTML="" 
            document.querySelector(".feet-to-miles__miles1").innerHTML="" 
            document.querySelector(".feet-to-miles__miles").value = ""
        }
    }
    document.querySelector('.feet-to-miles__feet').addEventListener('keyup', () => {
        calculateByFeet()
    });

    function calculateByMile()
    {
         let mile = parseFloat(document.querySelector('.feet-to-miles__miles').value);
         if(!isNaN(mile))
         {
             let inches = mile*63360;
             let meters = mile/0.00062137;
             let feet = mile*5280;
             let cm = mile*160934.4;
             let kilometers = mile*1.60934;
             let yards = mile*1760;
    
           document.querySelector(".feet-to-miles__meters").innerHTML= (meters).toFixed(5);
           document.querySelector(".feet-to-miles__inches").innerHTML=(inches).toFixed(5);
           document.querySelector(".feet-to-miles__yards").innerHTML=(yards).toFixed(5);
           document.querySelector(".feet-to-miles__kilometeres").innerHTML= (kilometers).toFixed(5);
           document.querySelector(".feet-to-miles__cm").innerHTML=(cm).toFixed(5);
           document.querySelector(".feet-to-miles__feet1").innerHTML= feet;
           document.querySelector(".feet-to-miles__miles1").innerHTML= (mile).toFixed(5);
           document.querySelector(".feet-to-miles__feet").value = (mile).toFixed(5);
        } else {
            document.querySelector(".feet-to-miles__meters").innerHTML="" 
            document.querySelector(".feet-to-miles__inches").innerHTML=""
            document.querySelector(".feet-to-miles__yards").innerHTML=""
            document.querySelector(".feet-to-miles__kilometeres").innerHTML= ""
            document.querySelector(".feet-to-miles__cm").innerHTML=""
            document.querySelector(".feet-to-miles__feet1").innerHTML="" 
            document.querySelector(".feet-to-miles__miles1").innerHTML="" 
            document.querySelector(".feet-to-miles__feet").value = ""	
        }
    }

    document.querySelector('.feet-to-miles__miles').addEventListener('keyup', () => {
        calculateByMile()
    });
}

export default feetToMiles;