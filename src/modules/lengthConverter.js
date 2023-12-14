const lengthConverter = () => {
    document.querySelector(".length-converter__button").addEventListener('click', () => {
        document.querySelector(".length-converter__feet").value="";
        document.querySelector(".length-converter__meter").value="";
        document.querySelector(".length-converter__inches").value="";
        document.querySelector(".length-converter__cm").value="";
        document.querySelector(".length-converter__yards").value="";
        document.querySelector(".length-converter__km").value="";
        document.querySelector(".length-converter__miles").value="";
    });

    let feet = document.querySelector(".length-converter__feet");
    let meter = document.querySelector(".length-converter__meter");
    let inch = document.querySelector(".length-converter__inches");
    let cm = document.querySelector(".length-converter__cm");
    let yard = document.querySelector(".length-converter__yards");
    let km = document.querySelector(".length-converter__km");
    let mile = document.querySelector(".length-converter__miles");

    function feetToOther(val){
        meter.value =  val/3.2808; 
        inch.value =  val*12;   
        cm.value    =  val/0.032808; 
        yard.value  =  val*0.33333;  
        km.value    =  val/3280.8; 
        mile.value  =  val*0.00018939;       
    }

    function meterToOther(val){
        feet.value = val*3.2808;
        inch.value = val*39.370;  
        cm.value   = val/0.01;
        yard.value = val*1.0936; 
        km.value   = val/1000;
        mile.value = val*0.00062137;
    }

    function inchesToOther(val){
        feet.value = val*0.083333;
        meter.value = val/39.370;  
        cm.value = val/0.39370;
        yard.value = val*0.027778; 
        km.value = val/39370;
        mile.value = val*0.000015783;
    }

    function cmToOther(val){
        feet.value = val*0.032808;
        meter.value = val/100;  
        inch.value = val*0.39370;
        yard.value = val*0.010936; 
        km.value = val/100000 ;
        mile.value = val*0.0000062137;
    }

    function yardsToOther(val){
        feet.value = val*3;
        inch.value = val*36;  
        cm.value = val/0.010936;
        meter.value = val/1.0936; 
        km.value = val/1093.6;
        mile.value = val*0.00056818;
    }

    function kmToOther(val){
        feet.value = val*3280.8;
        inch.value = val*39370;  
        cm.value = val*100000;
        yard.value = val*1093.6; 
        meter.value = val*1000;
        mile.value = val*0.62137;
    }

    function milesToOther(val){
        feet.value = val*5280;
        inch.value = val*63360;  
        cm.value = val/0.0000062137;
        yard.value = val*1760; 
        km.value = val/0.62137;
        meter.value = val/0.00062137;

    }

    function convertToOthers(convertFrom,value){    
        switch(convertFrom){
            case "feet" : feetToOther (parseFloat(value)); break;
            case "meter": meterToOther(parseFloat(value)); break;
            case "inch" : inchesToOther(parseFloat(value)); break;
            case "cm"   : cmToOther(parseFloat(value)); break;
            case "yard" : yardsToOther (parseFloat(value)); break;
            case "km"   : kmToOther (parseFloat(value)); break;
            case "mile" : milesToOther(parseFloat(value)); break;
        }
    }

    document.querySelector(".length-converter__feet").addEventListener('input', (e) => {
        convertToOthers('feet', e.target.value);
    })
    document.querySelector(".length-converter__meter").addEventListener('input', (e) => {
        convertToOthers('meter', e.target.value);
    })
    document.querySelector(".length-converter__inches").addEventListener('input', (e) => {
        convertToOthers('inches', e.target.value);
    })
    document.querySelector(".length-converter__cm").addEventListener('input', (e) => {
        convertToOthers('cm', e.target.value);
    })
    document.querySelector(".length-converter__yards").addEventListener('input', (e) => {
        convertToOthers('yards', e.target.value);
    })
    document.querySelector(".length-converter__km").addEventListener('input', (e) => {
        convertToOthers('km', e.target.value);
    })
    document.querySelector(".length-converter__miles").addEventListener('input', (e) => {
        convertToOthers('miles', e.target.value);
    })

}

export default lengthConverter;